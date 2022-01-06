const parseColor = ({ id }) => (id ? `#9${id.split('-').map((v, i) => v[i]).join('')}` : 'grey');

export const getColor = (arg) => (
  typeof arg === 'object'
    ? parseColor(arg)
    : `#${arg || Math.floor(Math.random() * 16777215).toString(16)}`
);
