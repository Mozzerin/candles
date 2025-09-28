import { useState, useRef, useEffect } from 'react';
import { supportedLocales } from '../siteConfig';
import { useI18n } from '../i18n';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (open && listRef.current) {
      const current = listRef.current.querySelector('[data-active="true"]') as HTMLButtonElement | null;
      current?.focus();
    }
  }, [open]);

  function toggle() { setOpen(o => !o); }
  function choose(l: string) { setLocale(l as any); setOpen(false); }
  function onTriggerKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); setOpen(true);
    }
  }
  function onListKey(e: React.KeyboardEvent) {
    const items = Array.from(listRef.current?.querySelectorAll('button.locale-item') || []) as HTMLButtonElement[];
    const index = items.findIndex(i => i.dataset.locale === locale);
    if (e.key === 'ArrowDown') {
      e.preventDefault(); items[(index + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); items[(index - 1 + items.length) % items.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault(); items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault(); items[items.length - 1]?.focus();
    }
  }

  return (
    <div className="language-switcher" ref={wrapRef}>
      <button
        type="button"
        className="globe-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        onClick={toggle}
        onKeyDown={onTriggerKey}
      >
        <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm6.93 6h-2.63a15.3 15.3 0 0 0-1.24-3.17A8.027 8.027 0 0 1 18.93 8ZM12 4c.62.74 1.69 2.27 2.25 4h-4.5C10.31 6.27 11.38 4.74 12 4ZM7.94 14a15.5 15.5 0 0 1 0-4h8.12a15.5 15.5 0 0 1 0 4ZM8.46 6.83A13.6 13.6 0 0 0 7.7 8H5.07a8.027 8.027 0 0 1 3-3.17 13.3 13.3 0 0 0 .39 1Zm0 10.34-.39 1A8.027 8.027 0 0 1 5.07 16h2.63a13.6 13.6 0 0 0 .76 1.17Zm1.79 2.33c-.56-1.73-1.63-3.26-2.25-4h4.5c-.56 1.73-1.63 3.26-2.25 4Zm3.29-5.5h-4.1c-.07-.66-.11-1.32-.11-2s.04-1.34.11-2h4.12c.07.66.11 1.32.11 2s-.05 1.34-.13 2Zm.5 5.5c.56-.74 1.69-2.27 2.25-4h2.63a8.027 8.027 0 0 1-3 3.17 15.3 15.3 0 0 1-1.24 3.17ZM19.7 14h-2.63a13.3 13.3 0 0 1-.39 1c-.24.53-.51 1.06-.78 1.54A8.027 8.027 0 0 0 19.7 14Z"/></svg>
        <span className="locale-short">{locale.toUpperCase()}</span>
      </button>
      {open && (
        <ul
          className="language-menu"
          role="listbox"
          aria-label="Select language"
          ref={listRef}
          onKeyDown={onListKey}
        >
          {supportedLocales.map(l => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                data-active={l === locale || undefined}
                data-locale={l}
                className="locale-item"
                onClick={() => choose(l)}
              >{l.toUpperCase()}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

