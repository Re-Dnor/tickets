export const getTransplantCount = (num) => {
  switch (num) {
    case 0:
      return 'Без пересадок';
    case 1: {
      return '1 пересадка';
    }
    case 2: {
      return '2 пересадки';
    }
    case 3: {
      return '3 пересадки';
    }
    default: {
      return 'Много пересадок';
    }
  }
}

export const makeDate = (dateStr) => {
  let [day, month, year] = dateStr.split('.').map(s => +s);
  year += 2000;
  const date = new Date(year, month, day)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-Ru', options)
}