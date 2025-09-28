import { type FormEvent, useState } from 'react';
import { products, siteMeta } from '../siteConfig';
import { useI18n, localizedProducts } from '../i18n';
import './sections.css';

interface OrderFormData {
  productId: string;
  quantity: number;
  name: string;
  email: string;
  notes: string;
}

type ErrorCode = 'required' | 'quantity' | 'nameShort' | 'emailInvalid';

export function ContactSection() {
  const { t, locale } = useI18n();
  const localized = localizedProducts(locale);
  const [form, setForm] = useState<OrderFormData>({
    productId: products[0]?.id ?? '',
    quantity: 1,
    name: '',
    email: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [touched, setTouched] = useState<Record<keyof OrderFormData, boolean>>({ productId: false, quantity: false, name: false, email: false, notes: false });
  const [submittedOnce, setSubmittedOnce] = useState(false);

  function update<K extends keyof OrderFormData>(key: K, value: OrderFormData[K]) { setForm(f => ({ ...f, [key]: value })); }
  function markTouched<K extends keyof OrderFormData>(key: K) { setTouched(t => ({ ...t, [key]: true })); }

  const errors: Partial<Record<keyof OrderFormData, ErrorCode>> = {};
  if (!form.productId) errors.productId = 'required';
  if (!(form.quantity >= 1 && form.quantity <= 99)) errors.quantity = 'quantity';
  if (form.name.trim().length < 2) errors.name = 'nameShort';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'emailInvalid';
  const canSubmit = Object.keys(errors).length === 0 && status !== 'submitting';

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmittedOnce(true);
    if (!canSubmit) return;
    setStatus('submitting');
    setTimeout(() => {
      try {
        console.log('Order form submission', form);
        setStatus('success');
        setForm({ productId: products[0]?.id ?? '', quantity: 1, name: '', email: '', notes: '' });
        setTouched({ productId: false, quantity: false, name: false, email: false, notes: false });
        setSubmittedOnce(false);
      } catch (err) {
        setStatus('error');
        console.log(err);
      }
    }, 600);
  }

  function buildMailto() {
    const prod = localized.find(p => p.id === form.productId);
    const subject = encodeURIComponent(`Order request: ${prod?.name || 'Candle'}`);
    const body = encodeURIComponent([
      `Product: ${prod?.name || form.productId}`,
      `Quantity: ${form.quantity}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.notes ? `Notes: ${form.notes}` : ''
    ].filter(Boolean).join('\n'));
    return `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
  }

  function fieldError(key: keyof OrderFormData) { if (!(touched[key] || submittedOnce)) return undefined; return errors[key]; }
  function errorLabel(code?: ErrorCode) {
    if (!code) return undefined;
    switch (code) {
      case 'required': return t('form.error.required');
      case 'quantity': return t('form.error.quantityRange');
      case 'nameShort': return t('form.error.nameShort');
      case 'emailInvalid': return t('form.error.emailInvalid');
    }
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="section-inner">
        <h2 id="contact-heading">{t('contact.title')}</h2>
        <p className="section-lead">{t('contact.lead')}</p>
        <form className="order-form" onSubmit={onSubmit} noValidate aria-describedby="form-global-status" aria-live="polite">
          <div className="form-grid">
            <label data-error={!!fieldError('productId')}>
              <span>{t('contact.form.product')}</span>
              <select value={form.productId} onChange={e => update('productId', e.target.value)} onBlur={() => markTouched('productId')} required aria-invalid={!!fieldError('productId')}>
                {localized.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              {errorLabel(fieldError('productId')) && <em className="field-error">{errorLabel(fieldError('productId'))}</em>}
            </label>
            <label data-error={!!fieldError('quantity')}>
              <span>{t('contact.form.quantity')}</span>
              <input type="number" min={1} max={99} value={form.quantity} onChange={e => update('quantity', Number(e.target.value))} onBlur={() => markTouched('quantity')} required aria-invalid={!!fieldError('quantity')} />
              {errorLabel(fieldError('quantity')) && <em className="field-error">{errorLabel(fieldError('quantity'))}</em>}
            </label>
            <label className="col-span-2" data-error={!!fieldError('name')}>
              <span>{t('contact.form.name')}</span>
              <input type="text" value={form.name} onChange={e => update('name', e.target.value)} onBlur={() => markTouched('name')} required aria-invalid={!!fieldError('name')} placeholder="Jane Doe" />
              {errorLabel(fieldError('name')) && <em className="field-error">{errorLabel(fieldError('name'))}</em>}
            </label>
            <label className="col-span-2" data-error={!!fieldError('email')}>
              <span>{t('contact.form.email')}</span>
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} onBlur={() => markTouched('email')} required aria-invalid={!!fieldError('email')} placeholder="you@example.com" />
              {errorLabel(fieldError('email')) && <em className="field-error">{errorLabel(fieldError('email'))}</em>}
            </label>
            <label className="full-width" data-error={!!fieldError('notes')}>
              <span>{t('contact.form.notes')}</span>
              <textarea value={form.notes} onChange={e => update('notes', e.target.value)} onBlur={() => markTouched('notes')} rows={4} placeholder={t('contact.form.notesPlaceholder')} />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit" disabled={!canSubmit}>{status === 'submitting' ? t('contact.sending') : t('contact.send')}</button>
            <a className="mailto-fallback" href={buildMailto()} aria-label={t('contact.mailto')}>{t('product.order.submit')}</a>
            <span id="form-global-status" className={`status-inline ${status}`} role="status">
              {status === 'success' && t('contact.sent')}
              {status === 'error' && t('contact.error')}
              {(!['success','error'].includes(status)) && Object.keys(errors).length > 0 && submittedOnce && t('form.error.fix')}
            </span>
          </div>
          <p className="privacy-hint">{t('contact.privacy')} <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.</p>
        </form>
      </div>
    </section>
  );
}
