import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { MembershipForm } from './components/membership/MembershipForm';
// import { Dashboard } from './components/admin/Dashboard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Events } from './components/Events';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { EligibilityCheck } from './components/EligibilityCheck';
import Newsletter from './components/NewsletterAndMap';

import Userdashboard from './Userdash/Userdashboard'
 
function HeaderWrapper() {
  const location = useLocation();
  return location.pathname !== '/admin' ? <Header /> : null;
}
function FooterWrapper(){
  const location = useLocation();
  return location.pathname !== '/admin' ? <Footer /> : null;
}

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
        <ToastContainer />
          <Toaster position="top-right" />
          <HeaderWrapper />
          {/* <Header /> */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/membership" element={<MembershipForm />} />
              <Route path="/events" element={<Events />} />
              {/* <Route path="/admin" element={<Dashboard />} /> */}
              <Route path="/admin" element={<Userdashboard />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/eligibility-check" element={<EligibilityCheck />} /> 
            </Routes>
          </main>
          {/* <Footer />  */}
          <FooterWrapper />
        </div>
      </Suspense>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Newsletter/>
      {/* <Contact /> */}
    </>
  );
}

export default App;