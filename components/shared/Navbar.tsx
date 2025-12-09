'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { getAllContinents, getCountriesByContinent } from '@/lib/data';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const subjectsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) {
        setIsDestinationsOpen(false);
      }
      if (subjectsRef.current && !subjectsRef.current.contains(event.target as Node)) {
        setIsSubjectsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get unique continents and countries for the destinations menu
  const continents = getAllContinents();
  const continentCountries: Record<string, string[]> = {};
  continents.forEach(continent => {
    continentCountries[continent] = getCountriesByContinent(continent);
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Universities', href: '/universities' },
    { name: 'TERMS', href: '/terms' },
    { name: 'How it works', href: '/#how-it-works' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              BFL<span className="text-yellow-500">.pk</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Destinations Mega Menu */}
              <div className="relative" ref={destinationsRef}>
                <button
                  onMouseEnter={() => setIsDestinationsOpen(true)}
                  onMouseLeave={() => setIsDestinationsOpen(false)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                >
                  Destinations
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDestinationsOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg rounded-md"
                    onMouseEnter={() => setIsDestinationsOpen(true)}
                    onMouseLeave={() => setIsDestinationsOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-8 p-6">
                      {/* Visual Column */}
                      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Find Your Perfect Program</h3>
                        <p className="mb-4 text-blue-100">Explore universities across the globe</p>
                        <Link 
                          href="/universities" 
                          className="inline-block bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                        >
                          Find a Program
                        </Link>
                      </div>
                      
                      {/* Data Column */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Destinations</h3>
                        {continents.map(continent => (
                          <div key={continent} className="mb-4">
                            <h4 className="font-semibold text-gray-700 mb-2">{continent}</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {continentCountries[continent].slice(0, 4).map(country => (
                                <Link
                                  key={country}
                                  href={`/universities?country=${country}`}
                                  className="text-gray-600 hover:text-blue-900 hover:underline"
                                >
                                  {country}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Subjects Dropdown */}
              <div className="relative" ref={subjectsRef}>
                <button
                  onMouseEnter={() => setIsSubjectsOpen(true)}
                  onMouseLeave={() => setIsSubjectsOpen(false)}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                >
                  Subjects
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isSubjectsOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1"
                    onMouseEnter={() => setIsSubjectsOpen(true)}
                    onMouseLeave={() => setIsSubjectsOpen(false)}
                  >
                    {['Business', 'Engineering', 'Arts', 'Medicine', 'Computer Science', 'Law'].map(subject => (
                      <Link
                        key={subject}
                        href={`/subjects/${subject.toLowerCase().replace(' ', '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                      >
                        {subject}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Destinations */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
                className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
              >
                <span>Destinations</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isDestinationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDestinationsOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {continents.map(continent => (
                    <div key={continent}>
                      <h4 className="font-semibold text-gray-700">{continent}</h4>
                      {continentCountries[continent].slice(0, 3).map(country => (
                        <Link
                          key={country}
                          href={`/universities?country=${country}`}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {country}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Subjects */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
                className="flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
              >
                <span>Subjects</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isSubjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSubjectsOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {['Business', 'Engineering', 'Arts', 'Medicine', 'Computer Science', 'Law'].map(subject => (
                    <Link
                      key={subject}
                      href={`/subjects/${subject.toLowerCase().replace(' ', '-')}`}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subject}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;