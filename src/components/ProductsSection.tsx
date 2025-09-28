import { useI18n, localizedProducts } from '../i18n';
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
        {!hasProducts && (
          <p role="status">{t('sections.products.empty')}</p>
        )}
        {hasProducts && (
          <div className="table-wrapper">
            <table className="products-table">
              <caption className="visually-hidden">{t('sections.products.title')}</caption>
              <thead>
                <tr>
                  <th scope="col">{t('table.photo')}</th>
                  <th scope="col">{t('table.name')}</th>
                  <th scope="col">{t('table.description')}</th>
                  <th scope="col">{t('table.scent')}</th>
                  <th scope="col">{t('table.size')}</th>
                  <th scope="col">{t('table.price')}</th>
                </tr>
              </thead>
              <tbody>
                {localized.map(p => (
                  <tr key={p.id}>
                    <td data-label={t('table.photo')}>
                      <img src={p.image} alt={p.name + ' candle'} className="product-image" loading="lazy" />
                    </td>
                    <td data-label={t('table.name')} className="product-name">{p.name}</td>
                    <td data-label={t('table.description')}>{p.description}</td>
                    <td data-label={t('table.scent')}>{p.scent ?? '—'}</td>
                    <td data-label={t('table.size')}>{p.size ?? '—'}</td>
                    <td data-label={t('table.price')} className="price">{formatCurrency(p.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
