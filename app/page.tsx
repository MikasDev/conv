import React from 'react';
import SideBar from './components/SideBar';


const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-96">
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
