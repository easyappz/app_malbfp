import React from 'react';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/Chip.jsx');

export default function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`chip ${active ? 'chip--active' : ''}`}
      style={{
        background: active ? '#54b94b' : 'var(--aura-chip-bg)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '8px 16px',
        borderRadius: 16,
        fontWeight: 600,
        cursor: 'pointer'
      }}
      {...et()}
    >
      {label}
    </button>
  );
}
