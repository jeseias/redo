const globalStyles = {
  '::selection': {
    background: 'rgb(232, 69, 69)',
    color: '#fff',
  },
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*::-webkit-scrollbar': {
    width: '5px',
  },
  '*::-webkit-scrollbar-track': {
    width: '6px',
  },
  '*::-webkit-scrollbar-thumb': {
    background: 'rgb(232, 69, 69)',
    borderRadius: '24px',
  },
  html: {
    fontSize: '62.5%',
    '@media screen and (max-width: 75.5em)': {
      fontSize: '56.25%',
    },
    '@media screen and (max-width: 56.25em)': {
      fontSize: '50%',
      fontFamily: 'electrolize',
    },
  },
};

export default globalStyles;
