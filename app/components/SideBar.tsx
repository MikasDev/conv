import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button flex justify-center items-center">
            List
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link href="/CF">Celcius to Fahrenheit</Link></li>
            <li><Link href="/FC">Fahrenheit to Celcius</Link></li>
            <li><Link href="/CK">Celcius to Kelvin</Link></li>
            <li><Link href="/KC">Kelvin to Celcius</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
