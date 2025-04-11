
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gradient-to-r from-amber-600/90 to-yellow-500/90 mt-auto">
      <div className="container mx-auto flex justify-center items-center">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
        >
          <Instagram className="h-5 w-5 text-white" />
          <span className="text-white font-medium">Follow us on Instagram</span>
        </a>
      </div>
      <div className="text-center mt-2 text-white/70 text-sm">
        © {new Date().getFullYear()} The Lost Circuit - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
