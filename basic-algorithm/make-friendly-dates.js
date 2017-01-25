function makeFriendlyDates(arr) {
  const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  const ORDINAL = ['st', 'nd', 'rd', 'th'];

  function parseDate(date) {
    const d = date.getDate();
    let suf;
    if (d > 3) {
      suf = ORDINAL[3];
    } else {
      suf = ORDINAL[d - 1];
    }
    return {
      date: d + suf,
      month: MONTH[date.getMonth()],
      year: date.getFullYear(),
    };
  }

  function isCurrentYear(date) {
    const current = new Date();
    return date.getFullYear() === current.getFullYear();
  }

  function isSameYear(b, e) {
    return b.getFullYear() === e.getFullYear();
  }

  function isSameMonth(b, e) {
    return b.getMonth() === e.getMonth();
  }

  function isSameDay(b, e) {
    return e - b === 0;
  }

  function isInAYear(b, e) {
    return isSameYear(b, e) ||
      (e.getFullYear() - b.getFullYear() === 1 && e.getMonth() < b.getMonth()) ||
      (e.getFullYear() - b.getFullYear() === 1 && isSameMonth(b, e) &&
        e.getDate() < b.getDate());
  }

  const begin = new Date(arr[0]);
  const end = new Date(arr[1]);
  const parsedBegin = parseDate(begin);
  const parsedEnd = parseDate(end);

  const ret = [];

  switch (true) {
    case isCurrentYear(begin) && isSameDay(begin, end):
      ret.push(`${parsedBegin.month} ${parsedBegin.date}`);
      break;
    case isSameDay(begin, end):
      ret.push(`${parsedBegin.month} ${parsedBegin.date}, ${parsedBegin.year}`);
      break;
    case isCurrentYear(begin) && isSameYear(begin, end) && isSameMonth(begin,
      end):
      ret.push(`${parsedBegin.month} ${parsedBegin.date}`);
      ret.push(parsedEnd.date);
      break;
    case isCurrentYear(begin) && isInAYear(begin, end):
      ret.push(`${parsedBegin.month} ${parsedBegin.date}`);
      ret.push(`${parsedEnd.month} ${parsedEnd.date}`);
      break;
    case isInAYear(begin, end) || isSameYear(begin, end):
      ret.push(`${parsedBegin.month} ${parsedBegin.date}, ${parsedBegin.year}`);
      ret.push(`${parsedEnd.month} ${parsedEnd.date}`);
      break;
    default:
      ret.push(`${parsedBegin.month} ${parsedBegin.date}, ${parsedBegin.year}`);
      ret.push(`${parsedEnd.month} ${parsedEnd.date}, ${parsedEnd.year}`);
  }

  return ret;
}

module.exports = makeFriendlyDates;
