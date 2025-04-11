
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-secondary mt-auto">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a 
            href="https://www.instagram.com/ee__nitj/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
          >
            <Instagram className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Instagram</span>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
          >
            <Facebook className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Facebook</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors"
          >
            <Twitter className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Twitter</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-2 text-white/70 text-sm">
        © {new Date().getFullYear()} The Lost Circuit - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
