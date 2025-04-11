
import React from 'react';
import { CircuitBoard } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-3 px-4 bg-secondary shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* College Logo */}
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
            <img
              src="/college_logo.jpg" // Replace with your college logo URL
              alt="College Logo"
              className="h-10 w-10 object-cover"
            />
          </div>
          
          {/* Club Logo */}
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
            <img
              src="/logo.png"
              alt="Club Logo"
              className="h-8 w-8 object-cover"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <CircuitBoard className="h-8 w-8 text-white mr-2" />
          <h1 className="text-2xl md:text-3xl font-bold text-white treasure-font tracking-wider">
            The Lost Circuit
          </h1>
        </div>
        
        <div className="w-24">
          {/* Empty div for balance */}
        </div>
      </div>
    </header>
  );
};

export default Header;
