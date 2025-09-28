import { useParams, Link, useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n';
import { products } from '../siteConfig';
import { useState, type FormEvent, useMemo } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, productTranslation, formatCurrency, locale } = useI18n();
  const translation = productTranslation(id || '');
  const product = products.find(p => p.id === id);
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState('');
  const [email, setEmail] = useState('');

  const notFound = !product || !translation;

  const totalPrice = useMemo(() => product ? formatCurrency(product.price * qty) : '', [product, qty, formatCurrency]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!product || !translation) return;
    const subject = encodeURIComponent(`[Order] ${translation.name} x${qty}`);
    const bodyLines = [
      `Product: ${translation.name} (${product.id})`,
      `Locale: ${locale}`,
      `Unit price: ${formatCurrency(product.price)}`,
      `Quantity: ${qty}`,
      `Total: ${formatCurrency(product.price * qty)}`,
      translation.scent ? `Scent: ${translation.scent}` : null,
      translation.size ? `Size: ${translation.size}` : null,
      notes ? `Notes: ${notes}` : null,
      email ? `Reply-to: ${email}` : null,
      `Timestamp: ${new Date().toISOString()}`
    ].filter(Boolean).join('\n');
    const mailto = `mailto:orders@lumoscandles.example?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;
    window.location.href = mailto;
  }

  if (notFound) {
    return (
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="section-inner product-detail-wrapper">
          <p>{t('product.notFound')}</p>
          <Link to="/" className="btn-back">{t('product.back')}</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ paddingTop: '4rem' }}>
      <div className="section-inner product-detail-wrapper">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li><Link to="/">{t('sections.products.title')}</Link></li>
            <li aria-current="page">{translation.name}</li>
          </ol>
        </nav>
        <div className="product-detail-grid">
          <div className="detail-media">
            <img src={product.image} alt={translation.name} className="detail-image" />
          </div>
          <div className="detail-info">
            <h1 className="detail-title">{translation.name}</h1>
            <p className="detail-desc">{translation.description}</p>
            <ul className="detail-attrs">
              {translation.scent && <li><strong>Scent:</strong> {translation.scent}</li>}
              {translation.size && <li><strong>Size:</strong> {translation.size}</li>}
              <li><strong>Price:</strong> {formatCurrency(product.price)}</li>
            </ul>
            <form className="detail-order-form" onSubmit={onSubmit}>
              <fieldset>
                <legend>{t('product.order.title')}</legend>
                <div className="form-row">
                  <label>
                    <span>{t('product.order.quantity')}</span>
                    <input type="number" min={1} max={99} value={qty} onChange={e => setQty(Number(e.target.value) || 1)} required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                  </label>
                </div>
                <label className="full-width">
                  <span>{t('product.order.notes')}</span>
                  <textarea rows={4} value={notes} onChange={e => setNotes(e.target.value)} placeholder="..." />
                </label>
                <div className="order-summary">{totalPrice && <span>Total: {totalPrice}</span>}</div>
                <div className="detail-actions">
                  <button type="submit" className="order-btn">{t('product.order.submit')}</button>
                  <button type="button" className="ghost-btn" onClick={() => navigate(-1)}>{t('product.back')}</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

