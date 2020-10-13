const diff = (a) => (b) => Math.abs(a - b);

const ss = (mili) => (mili / 1000) % 60;

const mm = (mili) => (((mili / 1000) % 3600) / 60) | 0;

const hh = (mili) => (mili / 1000 / 3600) | 0;

const str = (num) => String(num).padStart(2, '0');

const getDiffTime = (timeA) => (timeB) => {
  const mili = diff(new Date(timeA).getTime())(new Date(timeB).getTime());

  return `${str(hh(mili))}:${str(mm(mili))}:${str(ss(mili))}`;
};

export default getDiffTime;
