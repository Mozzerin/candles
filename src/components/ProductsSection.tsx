import { useI18n, localizedProducts } from '../i18n';
import { Link } from 'react-router-dom';
import './sections.css';

export function ProductsSection() {
  const { t, locale, formatCurrency } = useI18n();
  const localized = localizedProducts(locale);
  const hasProducts = localized.length > 0;
  return (
    <section id="products" className="section products-section" aria-labelledby="products-heading">
      <div className="section-inner">
        <h2 id="products-heading">{t('sections.products.title')}</h2>
        <p className="section-lead">{t('sections.products.lead')}</p>
        {!hasProducts && <p role="status">{t('sections.products.empty')}</p>}
        {hasProducts && (
          <div className="products-grid" role="list">
            {localized.map(p => (
              <article key={p.id} className="product-card" role="listitem">
                <Link to={`/products/${p.id}`} className="product-card-link" aria-label={p.name}>
                  <div className="product-card-media">
                    <img src={p.image} alt="" loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-title">{p.name}</h3>
                    <p className="product-card-desc">{p.description}</p>
                    <div className="product-card-meta">
                      <span className="product-card-price">{formatCurrency(p.price)}</span>
                      <span className="product-card-more">{t('products.more')} →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
