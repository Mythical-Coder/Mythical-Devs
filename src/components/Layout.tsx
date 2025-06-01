import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad, Github, Linkedin, Twitter } from 'lucide-react';
import StatusBar from './StatusBar';

const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/journey', label: 'Journey' },
    { path: '/projects', label: 'Projects' },
    { path: '/goals', label: 'Goals' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/education', label: 'Education' },
    { path: '/hobbies', label: 'Hobbies' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-neon-blue/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad className="text-neon-green" size={24} />
              <span className="font-cyber text-lg text-neon-green">
                <span className="glitch" data-text="PLAYER.DEV">PLAYER.DEV</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-cyber-darker border-t border-neon-blue/30 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 px-4 ${
                    location.pathname === item.path 
                      ? 'text-neon-blue border-l-2 border-neon-blue pl-3' 
                      : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      
      {/* Status Bar */}
      <StatusBar level={42} health={85} mana={60} xp={75} />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-neon-purple/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-cyber text-neon-blue">PLAYER.DEV</p>
              <p className="text-gray-400 mt-2">© 2025 All rights reserved</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;