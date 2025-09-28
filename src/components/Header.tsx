import { siteMeta, supportedLocales } from '../siteConfig';
import { useI18n } from '../i18n';
import './sections.css';

export function Header() {
  const { t, siteTagline, locale, setLocale } = useI18n();
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#products">{t('skip.toProducts')}</a>
      <nav className="main-nav" aria-label="Main navigation">
        <div className="brand">
          <img src={siteMeta.heroImage} alt={siteMeta.brand + ' logo'} className="brand-image" />
          <div className="brand-text">
            <h1>{siteMeta.brand}</h1>
            <p className="tagline">{siteTagline}</p>
          </div>
        </div>
        <ul>
          <li><a href="#products">{t('nav.products')}</a></li>
            <li><a href="#creator">{t('nav.creator')}</a></li>
            <li><a href="#location">{t('nav.location')}</a></li>
            <li><a href="#contact">{t('nav.order')}</a></li>
        </ul>
        <form className="locale-switch" aria-label="Language selector" onSubmit={e => e.preventDefault()}>
          <label htmlFor="locale" className="visually-hidden">Language</label>
          <select id="locale" value={locale} onChange={e => setLocale(e.target.value as any)}>
            {supportedLocales.map(l => (
              <option key={l} value={l}>{l.toUpperCase()}</option>
            ))}
          </select>
        </form>
      </nav>
    </header>
  );
}
