import React from 'react';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/StatCard.jsx');

const toneToColor = {
  green: 'var(--card-green)',
  orange: 'var(--card-orange)',
  blue: 'var(--card-blue)',
  purple: 'var(--card-purple)'
};

export default function StatCard({ tone = 'green', title, subtitle }) {
  return (
    <div
      className="stat-card"
      style={{
        background: toneToColor[tone] || toneToColor.green,
        color: '#ffffff',
        borderRadius: 20,
        padding: '16px 18px',
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      {...et()}
    >
      <div>
        <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1 }} {...et()}>{title}</div>
        <div style={{ fontSize: 16, opacity: 0.95 }} {...et()}>{subtitle}</div>
      </div>
    </div>
  );
}
