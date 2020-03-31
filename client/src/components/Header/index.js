import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Emaily
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
