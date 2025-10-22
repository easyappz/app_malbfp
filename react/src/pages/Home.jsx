import React, { useEffect, useState } from 'react';
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
      <div style={{ width: '100%' }} {...et()}>
        <Calculator />
        <InstructionSection />
        <div className="home-status" {...et()}>
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
