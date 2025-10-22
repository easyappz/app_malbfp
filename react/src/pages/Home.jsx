import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calculator from '../components/Calculator';
import InstructionSection from '../components/InstructionSection';
import { getStatus } from '../api/status';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/pages/Home.jsx');

export default function Home() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    getStatus()
      .then((data) => {
        if (mounted) setStatus(data);
      })
      .catch((e) => {
        if (mounted) setError(e?.message || 'Ошибка');
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} {...et()}>
      <div style={{ width: '100%', position: 'relative' }} {...et()}>
        <div style={{ position: 'sticky', top: 0, zIndex: 5, background: 'rgba(10,10,10,0.8)', backdropFilter: 'saturate(1.2) blur(6px)', padding: '12px 16px', display: 'flex', justifyContent: 'center' }} {...et()}>
          <Link to="/aura" style={{
            background: '#50a63b',
            color: '#fff',
            textDecoration: 'none',
            padding: '12px 20px',
            borderRadius: 12,
            fontWeight: 600,
            letterSpacing: '0.2px',
          }} {...et()}>
            Открыть страницу Аура
          </Link>
        </div>
        <Calculator />
        <InstructionSection />
        <div className="home-status" style={{ color: '#9aa4af', textAlign: 'center', padding: 16 }} {...et()}>
          <small {...et()}>
            {status
              ? `Статус API: ${status.status} • ${status.timestamp}`
              : error
              ? `Статус API: ошибка • ${error}`
              : 'Проверка соединения с сервером…'}
          </small>
        </div>
      </div>
    </div>
  );
}
