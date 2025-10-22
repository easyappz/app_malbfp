import React from 'react';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/DownloadButton.jsx');

export default function DownloadButton({ store, label, soon = false }) {
  const classes = [
    'download-button',
    store ? `download-button--${store}` : '',
    soon ? 'is-soon' : ''
  ]
    .filter(Boolean)
    .join(' ');

  const Icon = () => {
    if (store === 'ruStore') {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...et()}>
          <rect x="3" y="5" width="18" height="14" rx="3" fill="#2f90f6" {...et()}></rect>
          <path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" {...et()}></path>
        </svg>
      );
    }
    if (store === 'google') {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...et()}>
          <polygon points="4,4 18,12 4,20" fill="#34a853" {...et()}></polygon>
          <polygon points="18,12 21,10 21,14" fill="#ea4335" {...et()}></polygon>
        </svg>
      );
    }
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" {...et()}>
        <path d="M16 13c2 0 3-2 3-2s-2-1-2-3 2-3 2-3c-1 0-3 1-4 2-1 1-2 2-2 3 0 1 1 3 3 3zM12 8c-3 0-6 3-6 6 0 3 2 5 5 5 2 0 3-1 4-2 2-2 2-3 2-4 0-3-2-5-5-5z" fill="#000" {...et()}></path>
      </svg>
    );
  };

  return (
    <div className={classes} aria-label={soon ? `${label} — скоро` : `${label}`} {...et()}>
      <div className="download-button__icon" {...et()}><Icon /></div>
      <div className="download-button__text" {...et()}>
        <span className="download-button__caption" {...et()}>Скачать через</span>
        <strong className="download-button__label" {...et()}>{label}</strong>
      </div>
      {soon && (
        <span className="download-button__badge" {...et()}>Скоро</span>
      )}
    </div>
  );
}
