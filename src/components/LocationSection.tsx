import { factoryLocation } from '../siteConfig';
import { useI18n } from '../i18n';
import './sections.css';

export function LocationSection() {
  const { t, addressLines } = useI18n();
  const { latitude, longitude, provider } = factoryLocation as any;

  // Берём ключ если есть
  const googleKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_KEY as string | undefined;
  const zoom = provider?.zoom ?? 14;

  // Если есть ключ используем Maps Embed API, иначе публичный embed без ключа
  const googleSrc = googleKey
    ? `https://www.google.com/maps/embed/v1/place?key=${googleKey}&q=${latitude},${longitude}&zoom=${zoom}`
    : `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed&hl=en`;

  return (
    <section id="location" className="section location-section" aria-labelledby="location-heading">
      <div className="section-inner">
        <h2 id="location-heading">{t('sections.location.title')}</h2>
        <div className="location-grid">
          <address className="location-address" aria-label="Studio address">
            {addressLines.map(line => (<div key={line}>{line}</div>))}
          </address>
          <div className="map-wrapper" aria-label="Map showing the studio location">
            <iframe
              title="Studio location map"
              src={googleSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        {!googleKey && provider?.type === 'google' && (
          <p className="map-hint">Google Maps API key not set – using public embed. Add VITE_GOOGLE_MAPS_KEY for enhanced map controls.</p>
        )}
      </div>
    </section>
  );
}
