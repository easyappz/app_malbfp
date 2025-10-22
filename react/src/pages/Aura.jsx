import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import makeEasyTag from '../utils/easytag';
import Chip from '../components/Chip';
import DownloadButton from '../components/DownloadButton';
import StatCard from '../components/StatCard';
import Accordion from '../components/Accordion';
import './Aura.css';

const et = makeEasyTag('src/pages/Aura.jsx');

export default function Aura() {
  const [activeChip, setActiveChip] = useState('Почему Аура?');

  const chips = [
    'Почему Аура?',
    'Команда и продукты',
    'Инструкция',
    'Отзывы',
    'FAQ',
    'Контакты и Помощь',
  ];

  const faq = [
    {
      q: 'Как зарегистрироваться в приложении?',
      a: 'Скачайте приложение на смартфон, войдите под рабочим логином и паролем, далее следуйте подсказкам мастера. Если возникли сложности, обратитесь к администратору магазина.'
    },
    {
      q: 'Будет ли доступно приложение «Мой помощник» для Пятёрочки?',
      a: 'Да, приложение будет работать, но постепенно функциональность переедет в Ауру. Актуальные сроки уточняйте во внутренних новостях.'
    },
    {
      q: 'Куда обращаться по всем вопросам?',
      a: 'Откройте раздел Обратная связь внутри приложения и оставьте обращение. Команда ответит в ближайшее время.'
    }
  ];

  return (
    <main className="aura-page" {...et()}>
      {/* Header / Logo */}
      <header className="aura-header" {...et()}>
        <div className="aura-header__inner" {...et()}>
          <div className="aura-logo" aria-label="Logo Aura" {...et()}>
            <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true" {...et()}>
              <circle cx="18" cy="18" r="18" fill="#2F7A2E" {...et()}></circle>
              <path d="M11 20c0-5 3-9 7-9s7 4 7 9h-3c0-3-2-6-4-6s-4 3-4 6h-3z" fill="#fff" {...et()}></path>
            </svg>
            <span className="aura-logo__text" {...et()}>Aura</span>
          </div>
          <nav className="aura-header__nav" {...et()}>
            <Link className="aura-link" to="/" {...et()}>На главную</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="aura-hero" {...et()}>
        <h1 className="aura-hero__title" {...et()}>
          Новый способ управления магазином и взаимодействия с офисами
        </h1>

        <div className="aura-hero__chips" {...et()}>
          {chips.map((label) => (
            <Chip key={label} label={label} active={activeChip === label} onClick={() => setActiveChip(label)} />
          ))}
        </div>

        <div className="aura-downloads" {...et()}>
          <DownloadButton store="ruStore" label="ruStore" />
          <DownloadButton store="google" label="Google Play" soon />
          <DownloadButton store="apple" label="App Store" soon />
        </div>
      </section>

      {/* Stats */}
      <section className="aura-stats" {...et()}>
        <StatCard tone="green" title="30+ → 1" subtitle="используемых порталов" />
        <StatCard tone="orange" title="–1 уровень" subtitle="управления" />
        <StatCard tone="blue" title="+30%" subtitle="производительности труда" />
        <StatCard tone="purple" title="120+" subtitle="процессов оптимизировано" />
      </section>

      {/* Info blocks */}
      <section className="aura-info" {...et()}>
        <article className="info-card soft-blue" {...et()}>
          <div className="info-card__content" {...et()}>
            <h3 className="info-card__title" {...et()}>Менеджер задач</h3>
            <p className="info-card__text" {...et()}>
              Цифровой ассистент, который помогает приоритизировать и структурировать задачи для эффективной работы команды в магазине.
            </p>
            <p className="info-card__owner" {...et()}>
              Издаг Магомедова — владелец продукта «Менеджер задач»
            </p>
          </div>
          <button className="info-card__arrow" type="button" aria-label="Далее" {...et()}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...et()}>
              <path d="M8 5l7 7-7 7" fill="none" stroke="#0B1E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...et()}></path>
            </svg>
          </button>
        </article>

        <article className="info-card soft-yellow" {...et()}>
          <div className="info-card__content" {...et()}>
            <h3 className="info-card__title" {...et()}>Аналитика</h3>
            <p className="info-card__text" {...et()}>
              Делаем аналитику простой, удобной и своевременной. На основании данных управление магазинами становится прозрачным.
            </p>
            <p className="info-card__owner" {...et()}>
              Эрдни Эрдняев — владелец продукта «Аналитика»
            </p>
          </div>
          <button className="info-card__arrow" type="button" aria-label="Далее" {...et()}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...et()}>
              <path d="M8 5l7 7-7 7" fill="none" stroke="#0B1E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...et()}></path>
            </svg>
          </button>
        </article>

        <article className="info-card soft-green" {...et()}>
          <div className="info-card__content" {...et()}>
            <h3 className="info-card__title" {...et()}>Сервисы и полномочия</h3>
            <p className="info-card__text" {...et()}>
              Больше не нужно писать на почту и в мессенджеры. Создавайте и согласовывайте заявки в одном месте.
            </p>
            <p className="info-card__owner" {...et()}>
              Андрей Дёмочкин — владелец продукта «Сервисы и полномочия»
            </p>
          </div>
          <button className="info-card__arrow" type="button" aria-label="Далее" {...et()}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" {...et()}>
              <path d="M8 5l7 7-7 7" fill="none" stroke="#0B1E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...et()}></path>
            </svg>
          </button>
        </article>
      </section>

      {/* CTA */}
      <section className="aura-cta" {...et()}>
        <div className="aura-cta__text" {...et()}>
          <h2 {...et()}>Уже работали в приложении?</h2>
          <p {...et()}>Поделитесь первым впечатлением — это поможет нам стать лучше.</p>
        </div>
        <button className="aura-cta__button" type="button" {...et()}>
          Оценить приложение
        </button>
      </section>

      {/* FAQ */}
      <section className="aura-faq" {...et()}>
        <div className="aura-faq__head" {...et()}>
          <h2 {...et()}>Частые вопросы</h2>
          <p {...et()}>Мы уже ответили на ваши вопросы — ознакомьтесь ниже.</p>
        </div>
        <Accordion items={faq} />
      </section>
    </main>
  );
}
