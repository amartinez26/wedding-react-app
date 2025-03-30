import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported
import './assets/css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
AOS.init({
  duration: 1000, // Animation duration
  once: false, // Allow animations to trigger multiple times
})
root.render(
  <App />
);
