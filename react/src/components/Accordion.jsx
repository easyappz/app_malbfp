import React, { useState } from 'react';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/Accordion.jsx');

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion" {...et()}>
      {items.map((it, idx) => {
        const open = idx === openIndex;
        return (
          <div className={`accordion__item ${open ? 'is-open' : ''}`} key={it.q} {...et()}>
            <button
              type="button"
              className="accordion__head"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              {...et()}
            >
              <span className="accordion__q" {...et()}>{it.q}</span>
              <span className="accordion__toggle" aria-hidden="true" {...et()}>
                <span className="plus" {...et()}></span>
              </span>
            </button>
            {open && (
              <div className="accordion__body" {...et()}>
                <p {...et()}>{it.a}</p>
              </div>
            )}
          </div>
        );
      })}
      <style>{`
        .accordion { display: grid; gap: 12px; }
        .accordion__item { background: #f5f8f6; border-radius: 16px; border: 1px solid #e6ece8; }
        .accordion__head { width: 100%; text-align: left; background: transparent; border: 0; padding: 16px 18px; display: grid; grid-template-columns: 1fr auto; align-items: center; cursor: pointer; }
        .accordion__q { color: #13271c; font-weight: 700; }
        .accordion__toggle { width: 36px; height: 36px; border-radius: 50%; background: #fff; display: grid; place-items: center; border: 1px solid #e2e8e4; }
        .accordion__toggle .plus { width: 14px; height: 14px; position: relative; display: inline-block; }
        .accordion__toggle .plus::before, .accordion__toggle .plus::after { content: ''; position: absolute; background: #2d7a2d; }
        .accordion__toggle .plus::before { width: 100%; height: 2px; top: 50%; left: 0; transform: translateY(-50%); }
        .accordion__toggle .plus::after { width: 2px; height: 100%; left: 50%; top: 0; transform: translateX(-50%); }
        .accordion__item.is-open .accordion__toggle .plus::after { display: none; }
        .accordion__body { padding: 0 18px 16px; color: #3f5247; }
      `}</style>
    </div>
  );
}
