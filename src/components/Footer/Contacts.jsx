/* @flow */
import React from 'react';

const Contacts = () => (
  <div className="col-6 col-md-3">
    <dl className="mb-1">
      <dt className="mb-1">Contacts</dt>
      <dd>
        <nav className="nav flex-column small">
          <span className="nav-link px-0">
            Gubelstrasse 11, 6300 Zug, Switzerland
          </span>
          <a href="mailto:info@windingtree.com" className="nav-link px-0 text-white text-alpha-inverse text-truncate">info@windingtree.com</a>
        </nav>
      </dd>
    </dl>
  </div>
);

export default Contacts;
