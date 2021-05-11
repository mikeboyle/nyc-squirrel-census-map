import { parse } from 'date-fns';

export const parseDate = (value) => {
  return parse(value, 'LLddyyyy', new Date()).toDateString();
};

export const snakeToTitleCase = (string) => {
  return string
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};
