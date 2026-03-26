import { useState, useRef } from 'react';

const buttonConfig = [
  { label: 'AC', type: 'clear', span: 1 },
  { label: '+/-', type: 'func' },
  { label: '%', type: 'func' },
  { label: '÷', type: 'operator' },
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '×', type: 'operator' },
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '−', type: 'operator' },
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '+', type: 'operator' },
  { label: '0', type: 'number', span: 2 },
  { label: '.', type: 'number' },
  { label: '=', type: 'equals' },
];

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [prevVal, setPrevVal] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOp, setWaitingForOp] = useState(false);
  const [animClass, setAnimClass] = useState('');

  const triggerBump = () => {
    setAnimClass('bump');
    setTimeout(() => setAnimClass(''), 200);
  };

  const triggerResult = () => {
    setAnimClass('result-anim');
    setTimeout(() => setAnimClass(''), 400);
  };

  const addRipple = e => {
    const btn = e.currentTarget;
    const r = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = e.clientX - rect.left - size / 2 + 'px';
    r.style.top = e.clientY - rect.top - size / 2 + 'px';
    r.classList.add('ripple');
    btn.appendChild(r);
    setTimeout(() => r.remove(), 600);
  };

  const handleNumber = num => {
    triggerBump();
    if (waitingForOp) {
      setDisplay(num === '.' ? '0.' : num);
      setWaitingForOp(false);
    } else {
      if (num === '.' && display.includes('.')) return;
      setDisplay(display === '0' && num !== '.' ? num : display + num);
    }
  };

  const handleOperator = op => {
    const current = parseFloat(display);
    if (prevVal !== null && !waitingForOp) {
      const result = calculate(prevVal, current, operator);
      setDisplay(formatNum(result));
      setPrevVal(result);
      setExpression(formatNum(result) + ' ' + op);
    } else {
      setPrevVal(current);
      setExpression(display + ' ' + op);
    }
    setOperator(op);
    setWaitingForOp(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+':
        return a + b;
      case '−':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : 'Error';
      default:
        return b;
    }
  };

  const formatNum = n => {
    if (n === 'Error') return 'Error';
    const s = parseFloat(n.toFixed(10)).toString();
    return s.length > 12 ? parseFloat(n.toPrecision(8)).toString() : s;
  };

  const handleEquals = () => {
    if (prevVal === null || operator === null) return;
    const current = parseFloat(display);
    const result = calculate(prevVal, current, operator);
    setExpression(
      formatNum(prevVal) + ' ' + operator + ' ' + formatNum(current) + ' =',
    );
    setDisplay(formatNum(result));
    setPrevVal(null);
    setOperator(null);
    setWaitingForOp(true);
    triggerResult();
  };

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
    setPrevVal(null);
    setOperator(null);
    setWaitingForOp(false);
    triggerBump();
  };

  const handleFunc = func => {
    const val = parseFloat(display);
    if (func === '+/-') {
      setDisplay(formatNum(-val));
      triggerBump();
    } else if (func === '%') {
      setDisplay(formatNum(val / 100));
      triggerBump();
    }
  };

  const handleClick = (btn, e) => {
    addRipple(e);
    if (btn.type === 'number') handleNumber(btn.label);
    else if (btn.type === 'operator') handleOperator(btn.label);
    else if (btn.type === 'equals') handleEquals();
    else if (btn.type === 'clear') handleClear();
    else if (btn.type === 'func') handleFunc(btn.label);
  };

  const getClass = type => {
    switch (type) {
      case 'number':
        return 'btn btn-number';
      case 'operator':
        return 'btn btn-operator';
      case 'func':
        return 'btn btn-func';
      case 'clear':
        return 'btn btn-clear';
      case 'equals':
        return 'btn btn-equals';
      default:
        return 'btn';
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="calc-wrapper">
        <div className="calc-container">
          <div className="glow-orb" />
          <div className="glow-orb-2" />

          <div className="display">
            <div className="expression">{expression || '\u00A0'}</div>
            <div className={`current-val ${animClass}`}>{display}</div>
          </div>

          <div className="grid">
            {buttonConfig.map((btn, i) => (
              <button
                key={i}
                className={`${getClass(btn.type)}${btn.span === 2 ? ' span-2' : ''}`}
                onClick={e => handleClick(btn, e)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="history-badge">◆ &nbsp; Calc &nbsp; ◆</div>
        </div>
      </div>
    </>
  );
}
