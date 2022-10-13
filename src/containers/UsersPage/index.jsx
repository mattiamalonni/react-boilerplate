import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout } from '../../layouts';
import { routes } from '../../utils';
import { fetchUsers } from './reducer';
import { usersSelector } from './selectors';

const Users = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const users = useSelector(usersSelector());

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Layout pageTitle={t('containers.users.title')}>
      <ul className="space-y-2">
        {users.map(e => (
          <li key={e.id}>
            <Link to={routes.user(e.id)}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Users;
