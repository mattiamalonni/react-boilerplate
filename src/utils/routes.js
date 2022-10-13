const routes = {
  home: '/',
  login: '/login',
  users: '/users',
  user: (id = ':id') => `/users/${id}`,
};

export default routes;
