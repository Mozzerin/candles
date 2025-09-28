import { siteMeta } from '../siteConfig';
import { useI18n } from '../i18n';
import './sections.css';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const { t } = useI18n();
  const loc = useLocation();
  const navigate = useNavigate();

  const scrollTop = useCallback(() => {
    // Если не на главной странице – перейти на root, затем проскроллить.
    if (loc.pathname !== '/') {
      navigate('/', { replace: false });
      // Небольшая задержка чтобы контент успел отрендериться
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loc.pathname, navigate]);

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
        <button type="button" className="back-to-top" onClick={scrollTop}>{t('footer.backToTop')} ↑</button>
      </div>
    </footer>
  );
}
