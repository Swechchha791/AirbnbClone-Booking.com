const PATHS = {
  LANDING: '/',

  SIGN_IN: '/signin',
  SIGN_UP: '/signup',

  HOTEL: (id) => `/hotel/:${id}`,
  SEARCH: '/search',
};

export default { PATHS };
