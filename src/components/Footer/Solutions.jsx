/* @flow */
import React from 'react';

const Solutions = () => (
  <div className="col-6 col-md-3">
    <dl className="mb-1">
      <dt className="mb-1">Solutions</dt>
      <dd>
        <nav className="nav flex-column small">
          <a href="/suppliers.html" className="nav-link px-0 text-white text-alpha-inverse">For travel suppliers</a>
          <a href="/sellers.html" className="nav-link px-0 text-white text-alpha-inverse">For sellers of travel</a>
          <a href="/software-vendors.html" className="nav-link px-0 text-white text-alpha-inverse">For software vendors</a>
          <a href="https://github.com/windingtree/" className="nav-link px-0 text-white text-alpha-inverse">API</a>
        </nav>
      </dd>
    </dl>
  </div>
);

export default Solutions;
