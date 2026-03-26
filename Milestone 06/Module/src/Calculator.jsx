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

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0e0e10;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
  }

  .calc-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #0e0e10;
  }

  .calc-container {
    position: relative;
    width: 340px;
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 32px;
    padding: 28px 24px 24px;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.06),
      0 40px 80px rgba(0,0,0,0.6),
      0 0 60px rgba(99, 102, 241, 0.08);
    animation: floatIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes floatIn {
    from { opacity: 0; transform: translateY(40px) scale(0.92); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .glow-orb {
    position: absolute;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%);
    border-radius: 50%;
    top: -60px;
    right: -40px;
    pointer-events: none;
    animation: pulse 4s ease-in-out infinite;
  }
  .glow-orb-2 {
    position: absolute;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%);
    border-radius: 50%;
    bottom: -40px;
    left: -30px;
    pointer-events: none;
    animation: pulse 5s ease-in-out infinite reverse;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  .display {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 20px 20px 14px;
    margin-bottom: 20px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
  }

  .expression {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    color: rgba(255,255,255,0.35);
    min-height: 18px;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;
    word-break: break-all;
    text-align: right;
  }

  .current-val {
    font-family: 'Space Mono', monospace;
    font-size: 44px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-top: 6px;
    transition: all 0.15s ease;
    word-break: break-all;
    text-align: right;
  }

  .current-val.bump {
    animation: bump 0.15s ease;
  }
  @keyframes bump {
    0% { transform: scale(1); }
    50% { transform: scale(0.96); }
    100% { transform: scale(1); }
  }

  .current-val.result-anim {
    animation: resultFlash 0.35s ease;
  }
  @keyframes resultFlash {
    0% { color: #ffffff; }
    40% { color: #818cf8; }
    100% { color: #ffffff; }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .btn {
    position: relative;
    height: 68px;
    border: none;
    border-radius: 18px;
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  .btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: white;
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: inherit;
  }
  .btn:active::after { opacity: 0.08; }
  .btn:active { transform: scale(0.94); }

  .btn.span-2 { grid-column: span 2; }

  .btn-number {
    background: rgba(255,255,255,0.07);
    color: #e2e8f0;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08);
  }
  .btn-number:hover {
    background: rgba(255,255,255,0.11);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
  }

  .btn-operator {
    background: linear-gradient(145deg, #4f46e5, #6366f1);
    color: #fff;
    box-shadow: 0 4px 20px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  }
  .btn-operator:hover {
    background: linear-gradient(145deg, #5b52f0, #7577f7);
    box-shadow: 0 6px 28px rgba(99,102,241,0.55);
    transform: translateY(-1px);
  }

  .btn-func {
    background: rgba(255,255,255,0.12);
    color: #94a3b8;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  }
  .btn-func:hover { background: rgba(255,255,255,0.17); }

  .btn-clear {
    background: linear-gradient(145deg, #ef4444, #f87171);
    color: #fff;
    box-shadow: 0 4px 20px rgba(239,68,68,0.35);
  }
  .btn-clear:hover {
    box-shadow: 0 6px 28px rgba(239,68,68,0.5);
    transform: translateY(-1px);
  }

  .btn-equals {
    background: linear-gradient(145deg, #ec4899, #f472b6);
    color: #fff;
    box-shadow: 0 4px 20px rgba(236,72,153,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  }
  .btn-equals:hover {
    box-shadow: 0 6px 28px rgba(236,72,153,0.55);
    transform: translateY(-1px);
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    transform: scale(0);
    animation: rippleAnim 0.5s linear;
    pointer-events: none;
  }
  @keyframes rippleAnim {
    to { transform: scale(4); opacity: 0; }
  }

  .history-badge {
    font-size: 10px;
    color: rgba(255,255,255,0.2);
    text-align: center;
    margin-top: 14px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
  }
`;

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [prevVal, setPrevVal] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOp, setWaitingForOp] = useState(false);
  const [animClass, setAnimClass] = useState('');
  const displayRef = useRef(null);

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
