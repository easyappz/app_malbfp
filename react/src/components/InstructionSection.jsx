import React from 'react';
import './InstructionSection.css';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/InstructionSection.jsx');

export default function InstructionSection() {
  return (
    <section className="instruction-section" {...et()}>
      <div className="instruction-container" {...et()}>
        <div className="instruction-header" {...et()}>
          <h2 className="instruction-title" {...et()}>Начнём работу?</h2>
          <p className="instruction-subtitle" {...et()}>
            Следуйте пошаговой инструкции и включайтесь в работу
          </p>
        </div>

        <div className="steps" {...et()}>
          <div className="step-card step--left" {...et()}>
            <div className="step-badge" {...et()}>
              <span className="step-number" {...et()}>1</span>
            </div>
            <p className="step-text" {...et()}>
              Установите приложение на свой смартфон.{' '}
              <a href="#" target="_blank" rel="noreferrer" className="step-link" {...et()}>
                Скачать приложение можно тут
              </a>
            </p>
          </div>

          <div className="step-card step--middle" {...et()}>
            <div className="step-badge" {...et()}>
              <span className="step-number" {...et()}>2</span>
            </div>
            <p className="step-text" {...et()}>
              Войдите в личный кабинет по логину и паролю от учётной записи
            </p>
            <p className="step-note" {...et()}>Логин до @x5.ru</p>
          </div>

          <div className="step-card step--right" {...et()}>
            <div className="step-badge" {...et()}>
              <span className="step-number" {...et()}>3</span>
            </div>
            <p className="step-text" {...et()}>
              Готово! Пользуйтесь приложением и достигайте новых результатов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
