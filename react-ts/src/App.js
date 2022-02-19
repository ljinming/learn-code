import { useMemo } from 'react';

function getData(type) {
  let res = {};
  for (let i = 0; i < 10000; i++) {
    res[i] = `${type} value is :${i}`;
  }
  return res;
}

export default () => {
  const [str, setStr] = useState('x');

  const keys = getData(str);

  return (
    <div>
      {keys.map((it) => (
        <li key={it}>{it}</li>
      ))}
      <button>ee</button>
    </div>
  );
};

window.addEventListener('click', () => {});
