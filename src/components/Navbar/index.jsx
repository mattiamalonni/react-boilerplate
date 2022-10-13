import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoHomeSharp, IoLogInSharp, IoPersonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { routes } from '../../utils';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-slate-600 px-5 py-5 text-white flex justify-between items-center">
      <Link to={routes.home} className="flex items-center space-x-1">
        <IoHomeSharp size={24} title={t('components.navbar.home')} />
      </Link>

      <ul className="flex space-x-5 justify-end">
        <li>
          <Link
            to={routes.users}
            className="flex items-center space-x-1"
            title={t('components.navbar.users')}
          >
            <IoPersonSharp />
            <span>{t('components.navbar.users')}</span>
          </Link>
        </li>
        <li>
          <Link to={routes.login} className="flex items-center space-x-1">
            <IoLogInSharp />
            <span>{t('components.navbar.login')}</span>
          </Link>
        </li>
        <li>
          <select
            defaultValue={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)}
            className="bg-transparent outline-none uppercase"
          >
            {Object.keys(i18n.options.resources).map(lng => (
              <option key={lng} value={lng}>
                {lng}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
