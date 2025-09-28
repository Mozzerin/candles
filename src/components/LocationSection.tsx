import { factoryLocation } from '../siteConfig';
import { useI18n } from '../i18n';
import './sections.css';

export function LocationSection() {
  const { t, addressLines } = useI18n();
  const { mapEmbedUrl, latitude, longitude, provider } = factoryLocation as any;

  const googleKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_KEY;
  const useGoogle = provider?.type === 'google' && googleKey;
  const zoom = provider?.zoom ?? 14;

  const googleSrc = useGoogle
    ? `https://www.google.com/maps/embed/v1/place?key=${googleKey}&q=${latitude},${longitude}&zoom=${zoom}`
    : undefined;

  return (
    <section id="location" className="section location-section" aria-labelledby="location-heading">
      <div className="section-inner">
        <h2 id="location-heading">{t('sections.location.title')}</h2>
        <div className="location-grid">
          <address className="address" aria-label="Factory address">
            {addressLines.map(line => (<div key={line}>{line}</div>))}
          </address>
          <div className="map-wrapper" aria-label="Map showing the studio location">
            <iframe
              title="Studio location map"
              src={googleSrc || mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        {provider?.type === 'google' && !googleKey && (
          <p style={{ fontSize: '.7rem', opacity: .7, marginTop: '0.75rem' }}>
            Google Maps API key missing – falling back to OpenStreetMap. Add VITE_GOOGLE_MAPS_KEY to enable Google Maps.
          </p>
        )}
      </div>
    </section>
  );
}
