import React, { useEffect } from 'react';
import './style.css';
import Navbar from './Navbar';

function App() {
  useEffect(() => {
    const header = document.querySelector('[data-header]');
    const handleScroll = () => {
      window.scrollY >= 10
        ? header.classList.add('active')
        : header.classList.remove('active');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <h1>Welcome to Ridex</h1>
          <p>Your journey begins here.</p>
        </section>
        <section id="details">
          <h2>Details</h2>
          <p>Explore car details here.</p>
        </section>
        <section id="featured-cars">
          <h2>Featured Cars</h2>
          <p>Check out our featured cars.</p>
        </section>
        <section id="blog">
          <h2>Blog</h2>
          <p>Latest updates and news.</p>
        </section>
        <section id="payment">
          <h2>Payment</h2>
          <p>Secure payment options available.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
