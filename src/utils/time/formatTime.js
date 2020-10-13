const optionsHHMM = {
  hour: '2-digit',
  minute: '2-digit',
};

const optionsHHMMSS = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const toHHMM = (date) => new Date(date).toLocaleString('pt-BR', optionsHHMM);

const toHHMMSS = (date) =>
  new Date(date).toLocaleString('pt-BR', optionsHHMMSS);

const formatTime = (date, format) => {
  const formats = {
    'hh:mm': (date) => toHHMM(date),
    'hh:mm:ss': (date) => toHHMMSS(date),
    default: () => date,
  };

  return (formats[format] || formats['default'])(date);
};

export default formatTime;
