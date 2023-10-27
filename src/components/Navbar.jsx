import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 sticky top-0 rounded-md ">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <div className="space-x-4">
            <a href="/">Rabbit Hole</a>
            <a href="#">New</a>
            <a href="#">Past</a>
            <a href="#">Comment</a>
            <a href="#">Jobs</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;