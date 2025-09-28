import { creator } from '../siteConfig';
import { useI18n } from '../i18n';
import './sections.css';

export function CreatorSection() {
  const { t, creatorBio, creatorRole } = useI18n();
  return (
    <section id="creator" className="section creator-section" aria-labelledby="creator-heading">
      <div className="section-inner grid-two">
        <div>
          <h2 id="creator-heading">{t('sections.creator.title')}</h2>
          <p className="section-lead">{t('sections.creator.lead')}</p>
          <p>{creatorBio}</p>
          <p><strong>{creator.name}</strong><br />{creatorRole}</p>
        </div>
        <div className="creator-photo-wrapper">
          <img src={creator.photo} alt={creator.name + ' – ' + creatorRole} className="creator-photo" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
