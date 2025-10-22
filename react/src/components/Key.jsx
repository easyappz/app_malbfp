import React from 'react';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/Key.jsx');

function Key({ label, onPress, variant = 'digit', wide = false, active = false }) {
  const className = [
    'key',
    variant === 'operator' ? 'key-operator' : '',
    variant === 'function' ? 'key-function' : '',
    variant === 'digit' ? 'key-digit' : '',
    wide ? 'key-wide' : '',
    active ? 'key-active' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      onClick={onPress}
      aria-label={typeof label === 'string' ? label : 'key'}
      {...et()}
    >
      {label}
    </button>
  );
}

export default Key;
