import { siteMeta } from '../siteConfig';
import { useI18n } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import './sections.css';

const socialLinks = [
  { key: 'instagram', href: siteMeta.instagram, label: 'Instagram', svg: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 8.25A3.75 3.75 0 1 1 8.25 12 3.76 3.76 0 0 1 12 8.25Zm0 2A1.75 1.75 0 1 0 13.75 12 1.75 1.75 0 0 0 12 10.25ZM16.9 6.6a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"/></svg>
  )},
  { key: 'facebook', href: siteMeta.facebook, label: 'Facebook', svg: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M13.5 22h-3v-8H8v-3h2.5V8.75C10.5 6.21 12 5 14.27 5c1 0 1.86.07 2.23.11v2.58h-1.53c-1.2 0-1.47.57-1.47 1.4V11H16l-.4 3h-2.1v8Z"/></svg>
  )},
  { key: 'tiktok', href: siteMeta.tiktok, label: 'TikTok', svg: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M14.5 3c.27 1.86 1.3 3.14 3.08 3.23v2.27c-1.27.12-2.4-.32-3.53-1.07l-.02 5.9c0 2.94-1.86 5.09-4.86 5.09A4.67 4.67 0 0 1 4.5 13.7c.27-2.53 2.44-4.39 5.05-4.24v2.62c-.73-.2-1.4-.02-1.89.44a1.9 1.9 0 0 0-.56 1.38c.04 1.02.83 1.83 1.86 1.89 1.26.07 2.06-.87 2.06-2.3V2.99h3.48Z"/></svg>
  )},
  { key: 'email', href: `mailto:${siteMeta.email}`, label: 'Email', svg: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4 5h16a2 2 0 0 1 2 2v10c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Zm0 2v.25l8 4.75 8-4.75V7H4Zm16 10V10.6l-7.38 4.38a1 1 0 0 1-1.04 0L4 10.6V17h16Z"/></svg>
  )}
].filter(l => l.href);

export function Header() {
  const { t } = useI18n();
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#products">{t('skip.toProducts')}</a>
      <nav className="main-nav main-nav-grid" aria-label="Main navigation">
        <div className="nav-left">
          <ul className="primary-links">
            <li><a href="#products">{t('nav.products')}</a></li>
            <li><a href="#creator">{t('nav.creator')}</a></li>
            <li><a href="#location">{t('nav.location')}</a></li>
            <li><a href="#contact">{t('nav.order')}</a></li>
          </ul>
        </div>
        <div className="nav-center">
          <a href="#top" className="brand brand-center brand-combo" aria-label={siteMeta.brand} title={siteMeta.brand}>
            <img src={siteMeta.heroImage} alt="" className="brand-image animated-logo" />
            <span className="brand-word">Candles</span>
          </a>
        </div>
        <div className="nav-right">
          <div className="social-icons" aria-label="Social links">
            {socialLinks.map(s => (
              <a key={s.key} href={s.href} target={s.key === 'email' ? undefined : '_blank'} rel={s.key === 'email' ? undefined : 'noopener noreferrer'} aria-label={s.label} title={s.label} className="social-icon">
                {s.svg}
              </a>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
