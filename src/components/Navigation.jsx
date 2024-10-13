import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/todolist', name: 'Todo List' },
  { path: '/message', name: 'Message' },
  { path: '/challenges/one', name: 'Challenge One' },
  { path: '/challenges/box', name: 'Challenge Two' },
  { path: '/challenges/autoselect', name: 'autoselect' },
];

const Navigation = () => {
  return (
    <div className="p-4">
      <nav className="mb-4 p-4">
        <ul>
          {routes.map(route => (
            <li key={route.path} className="mb-4">
              <NavLink 
                to={route.path} 
                className="block p-4 bg-white rounded text-blue-500 hover:text-blue-700"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {/* <Outlet /> */}
      </main>
    </div>
  );
};

export default Navigation;