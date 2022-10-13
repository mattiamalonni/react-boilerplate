import React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../layouts';

const Login = () => {
  const { t } = useTranslation();
  return <Layout pageTitle={t('containers.login.title')}></Layout>;
};

export default Login;
