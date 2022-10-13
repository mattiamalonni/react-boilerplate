import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Layout } from '../../layouts';
import { fetchUser } from './reducer';
import { userSelector } from './selectors';

const Users = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(userSelector());

  useEffect(() => {
    dispatch(fetchUser({ id }));
  }, []);

  return (
    <Layout pageTitle={t('containers.user.title')}>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </Layout>
  );
};

export default Users;
