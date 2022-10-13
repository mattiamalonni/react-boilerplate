import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HomePage, LoginPage, UserPage, UsersPage } from '../';
import { en, it } from '../../locales';
import { history, routes } from '../../utils';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    it: { translation: it },
  },
});

const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path={routes.login} exact element={<LoginPage />} />
        <Route path={routes.users} exact element={<UsersPage />} />
        <Route path={routes.user()} exact element={<UserPage />} />
        <Route path={routes.home} exact element={<HomePage />} />
        <Route path="*" element={<Navigate replace to={routes.home} />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
