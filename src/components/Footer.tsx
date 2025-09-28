import { siteMeta } from '../siteConfig';
import { useI18n } from '../i18n';
import './sections.css';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="visually-hidden">Site footer</h2>
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>{siteMeta.brand}</strong>
          <div className="small">&copy; {new Date().getFullYear()} {siteMeta.brand}. All rights reserved.</div>
        </div>
        <nav aria-label="Social links" className="social-links">
          <a href={siteMeta.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          <a href={siteMeta.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
          <a href={siteMeta.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
          <a href={`mailto:${siteMeta.email}`} aria-label="Email us">Email</a>
        </nav>
        <a href="#top" className="back-to-top">{t('footer.backToTop')} ↑</a>
      </div>
    </footer>
  );
}
