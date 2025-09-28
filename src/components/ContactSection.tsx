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

  function update<K extends keyof OrderFormData>(key: K, value: OrderFormData[K]) {
    setForm(f => ({ ...f, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    // Simulate async submission
    setTimeout(() => {
      try {
        console.log('Order form submission', form);
        setStatus('success');
        setForm({
          productId: products[0]?.id ?? '',
          quantity: 1,
          name: '',
          email: '',
          notes: ''
        });
      } catch (err) {
        setStatus('error');
        console.log(err);
      }
    }, 600);
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="section-inner">
        <h2 id="contact-heading">{t('contact.title')}</h2>
        <p className="section-lead">{t('contact.lead')}</p>
        <form className="order-form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
          <div className="form-grid">
            <label>
              <span>{t('contact.form.product')}</span>
              <select value={form.productId} onChange={e => update('productId', e.target.value)} required>
                {localized.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </label>
            <label>
              <span>{t('contact.form.quantity')}</span>
              <input type="number" min={1} max={99} value={form.quantity} onChange={e => update('quantity', Number(e.target.value))} required />
            </label>
            <label>
              <span>{t('contact.form.name')}</span>
              <input type="text" value={form.name} onChange={e => update('name', e.target.value)} required placeholder="Jane Doe" />
            </label>
            <label>
              <span>{t('contact.form.email')}</span>
              <input type="email" value={form.email} onChange={e => update('email', e.target.value)} required placeholder="you@example.com" />
            </label>
            <label className="full-width">
              <span>{t('contact.form.notes')}</span>
              <textarea value={form.notes} onChange={e => update('notes', e.target.value)} rows={4} placeholder={t('contact.form.notesPlaceholder')} />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? t('contact.sending') : t('contact.send')}
            </button>
            {status === 'success' && <span id="form-status" role="status" className="status success">{t('contact.sent')}</span>}
            {status === 'error' && <span id="form-status" role="status" className="status error">{t('contact.error')}</span>}
          </div>
          <p className="privacy-hint">{t('contact.privacy')} <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.</p>
        </form>
      </div>
    </section>
  );
}
