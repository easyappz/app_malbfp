import React, { useMemo, useState } from 'react';
import Key from './Key';
import './Calculator.css';
import makeEasyTag from '../utils/easytag';

const et = makeEasyTag('src/components/Calculator.jsx');

function roundTo(n, digits = 10) {
  const p = Math.pow(10, digits);
  return Math.round(n * p) / p;
}

function toDisplay(value) {
  if (typeof value !== 'number' || !isFinite(value)) return 'Error';
  let s = String(value);
  if (s.indexOf('e') !== -1 || s.indexOf('E') !== -1) {
    return s;
  }
  if (s.indexOf('.') !== -1) {
    // trim trailing zeros without regex
    while (s.length > 0 && s.charAt(s.length - 1) === '0') {
      s = s.slice(0, -1);
    }
    if (s.charAt(s.length - 1) === '.') {
      s = s.slice(0, -1);
    }
  }
  return s;
}

function compute(a, b, op) {
  if (op === '+') return roundTo(a + b);
  if (op === '−') return roundTo(a - b);
  if (op === '×') return roundTo(a * b);
  if (op === '÷') return b === 0 ? NaN : roundTo(a / b);
  return b;
}

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [pendingOperator, setPendingOperator] = useState(null); // '+','−','×','÷' | null
  const [leftOperand, setLeftOperand] = useState(null); // number | null
  const [lastOperator, setLastOperator] = useState(null); // for repeated '='
  const [lastOperand, setLastOperand] = useState(null); // number | null
  const [overwrite, setOverwrite] = useState(true);
  const [hasInput, setHasInput] = useState(false); // controls AC/C label

  const clearLabel = hasInput ? 'C' : 'AC';

  const handleDigit = (d) => {
    setDisplayValue((prev) => {
      let next = prev;
      if (overwrite) {
        next = d === '0' ? '0' : d;
      } else {
        if (prev === '0') {
          next = d; // replace leading zero
        } else {
          next = prev + d;
        }
      }
      return next;
    });
    setOverwrite(false);
    setHasInput(true);
  };

  const handleDot = () => {
    setDisplayValue((prev) => {
      if (overwrite) {
        setOverwrite(false);
        setHasInput(true);
        return '0.';
      }
      if (prev.indexOf('.') !== -1) return prev;
      setHasInput(true);
      return prev + '.';
    });
  };

  const handleToggleSign = () => {
    setDisplayValue((prev) => {
      if (prev === '0') return prev;
      if (prev.startsWith('-')) return prev.slice(1);
      return '-' + prev;
    });
    setHasInput(true);
  };

  const handlePercent = () => {
    setDisplayValue((prev) => {
      const current = parseFloat(prev);
      if (pendingOperator && leftOperand !== null) {
        const percentValue = (leftOperand * current) / 100;
        const safe = toDisplay(roundTo(percentValue));
        setOverwrite(true);
        setHasInput(true);
        return safe;
      }
      const simple = current / 100;
      setOverwrite(true);
      setHasInput(true);
      return toDisplay(roundTo(simple));
    });
  };

  const handleOperator = (op) => {
    const current = parseFloat(displayValue);

    if (pendingOperator && overwrite) {
      // Replace operator before entering next number
      setPendingOperator(op);
      setHasInput(false);
      return;
    }

    if (pendingOperator && leftOperand !== null && !overwrite) {
      // Evaluate with current and chain
      const result = compute(leftOperand, current, pendingOperator);
      if (!isFinite(result) || isNaN(result)) {
        setDisplayValue('Error');
        setLeftOperand(null);
        setPendingOperator(null);
        setLastOperator(null);
        setLastOperand(null);
        setOverwrite(true);
        setHasInput(false);
        return;
      }
      setDisplayValue(toDisplay(result));
      setLeftOperand(result);
      setPendingOperator(op);
      setLastOperator(pendingOperator);
      setLastOperand(current);
      setOverwrite(true);
      setHasInput(false);
      return;
    }

    // No pending operator yet: set left operand
    setLeftOperand(current);
    setPendingOperator(op);
    setOverwrite(true);
    setHasInput(false);
  };

  const handleEqual = () => {
    const current = parseFloat(displayValue);

    if (pendingOperator && leftOperand !== null) {
      // First '=' after an operator sequence
      // If user did not type new number (overwrite true), repeat with lastOperand
      if (overwrite && lastOperator && lastOperand !== null) {
        const result = compute(current, lastOperand, lastOperator);
        if (!isFinite(result) || isNaN(result)) {
          setDisplayValue('Error');
          setLeftOperand(null);
          setPendingOperator(null);
          setLastOperator(null);
          setLastOperand(null);
          setOverwrite(true);
          setHasInput(false);
          return;
        }
        setDisplayValue(toDisplay(result));
        setLeftOperand(result);
        setOverwrite(true);
        setHasInput(false);
        return;
      }

      const result = compute(leftOperand, current, pendingOperator);
      if (!isFinite(result) || isNaN(result)) {
        setDisplayValue('Error');
        setLeftOperand(null);
        setPendingOperator(null);
        setLastOperator(null);
        setLastOperand(null);
        setOverwrite(true);
        setHasInput(false);
        return;
      }
      setDisplayValue(toDisplay(result));
      setLeftOperand(result);
      setLastOperator(pendingOperator);
      setLastOperand(current);
      setPendingOperator(null);
      setOverwrite(true);
      setHasInput(false);
      return;
    }

    if (!pendingOperator && lastOperator && lastOperand !== null) {
      const result = compute(current, lastOperand, lastOperator);
      if (!isFinite(result) || isNaN(result)) {
        setDisplayValue('Error');
        setLeftOperand(null);
        setPendingOperator(null);
        setLastOperator(null);
        setLastOperand(null);
        setOverwrite(true);
        setHasInput(false);
        return;
      }
      setDisplayValue(toDisplay(result));
      setLeftOperand(result);
      setOverwrite(true);
      setHasInput(false);
    }
  };

  const handleClear = () => {
    if (!hasInput) {
      // AC
      setDisplayValue('0');
      setPendingOperator(null);
      setLeftOperand(null);
      setLastOperator(null);
      setLastOperand(null);
      setOverwrite(true);
      setHasInput(false);
      return;
    }
    // C (clear current entry)
    setDisplayValue('0');
    setOverwrite(true);
    setHasInput(false);
  };

  const operatorActive = useMemo(() => (overwrite ? pendingOperator : null), [overwrite, pendingOperator]);

  return (
    <div className="calculator-root" {...et()}>
      <div className="calculator" {...et()}>
        <div className="calculator-display" {...et()}>
          {displayValue}
        </div>
        <div className="calculator-keys" {...et()}>
          <Key label={clearLabel} variant="function" onPress={handleClear} />
          <Key label="±" variant="function" onPress={handleToggleSign} />
          <Key label="%" variant="function" onPress={handlePercent} />
          <Key label="÷" variant="operator" active={operatorActive === '÷'} onPress={() => handleOperator('÷')} />

          <Key label="7" onPress={() => handleDigit('7')} />
          <Key label="8" onPress={() => handleDigit('8')} />
          <Key label="9" onPress={() => handleDigit('9')} />
          <Key label="×" variant="operator" active={operatorActive === '×'} onPress={() => handleOperator('×')} />

          <Key label="4" onPress={() => handleDigit('4')} />
          <Key label="5" onPress={() => handleDigit('5')} />
          <Key label="6" onPress={() => handleDigit('6')} />
          <Key label="−" variant="operator" active={operatorActive === '−'} onPress={() => handleOperator('−')} />

          <Key label="1" onPress={() => handleDigit('1')} />
          <Key label="2" onPress={() => handleDigit('2')} />
          <Key label="3" onPress={() => handleDigit('3')} />
          <Key label="+" variant="operator" active={operatorActive === '+'} onPress={() => handleOperator('+')} />

          <Key label="0" wide onPress={() => handleDigit('0')} />
          <Key label="." onPress={handleDot} />
          <Key label="=" variant="operator" onPress={handleEqual} />
        </div>
      </div>
    </div>
  );
}
