import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <header className="bg-[#ddd9cf] backdrop-blur-lg  top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <motion.div 
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">IETE</span>
            <h1 className="text-2xl font-extrabold text-black">IETE</h1>
          </Link>
        </motion.div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <motion.div 
          className="hidden lg:flex lg:gap-x-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="relative group">
              <span className={`text-sm font-semibold leading-6 transition-colors ${
                location.pathname === item.href
                  ? "text-black font-extrabold"
                  : "text-gray-900 hover:text-gray-700"
              }`}>
                {item.name}
              </span>
              {location.pathname === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0  mt-0.1 h-0.5 bg-black rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          ))}
        </motion.div>

        <motion.div 
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/login" className="relative group">
            <span className={`text-sm font-semibold leading-6 transition-colors ${
              location.pathname === "/login"
                ? "text-black font-bold"
                : "text-gray-900 hover:text-gray-900"
            }`}>
              Log in <span aria-hidden="true">&rarr;</span>
            </span>
            {location.pathname === "/login" && (
              <motion.div
                layoutId="underline"
                className="absolute left-0  mt-0.2 h-0.5 bg-gray-900 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </Link>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IETE</span>
              <h1 className="text-2xl font-bold text-black">IETE</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all ${
                      location.pathname === item.href
                        ? "text-gray-900 font-bold underline bg-gray-100"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all ${
                    location.pathname === "/login"
                      ? "text-gray-900 font-bold underline bg-gray-100"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

