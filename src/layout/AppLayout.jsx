import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {

  let navigateToList = () => {
    window.location.href = '/list';
  }

  return (
    <div className="app-layout min-h-screen flex flex-col">

      <header className="app-header border p-4 cursor-pointer" onClick={navigateToList}>
        <h5 className="app-title text-lg font-bold">My react learning App</h5>
      </header>

      <main className="app-content flex-grow p-4">
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;