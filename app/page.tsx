'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import gsap from 'gsap';
import 'animate.css';
import Link from 'next/link';

import ContactSection from './contactSection';
import WhatsAppButton from './whatsappButton';
import ProductSection from './productSection';


export default function Home() {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });

    const flameButton = document.getElementById('flame-button');
    if (flameButton) {
      flameButton.addEventListener('mouseenter', () => {
        gsap.fromTo(
          flameButton,
          {
            scale: 1,
            boxShadow: '0 0 10px 2px rgba(255, 165, 0, 0.8)',
          },
          {
            scale: 1.1,
            boxShadow:
              '0 0 20px 4px rgba(255, 165, 0, 0.8), 0 0 30px 8px rgba(255, 69, 0, 0.7)',
            duration: 0.4,
            ease: 'power2.inOut',
          }
        );
      });

      flameButton.addEventListener('mouseleave', () => {
        gsap.to(flameButton, {
          scale: 1,
          boxShadow: '0 0 10px 2px rgba(255, 165, 0, 0.8)',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Unity Exporter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="DdDCf5_MoSLOerdDusQXR5uW7_jp5P7U-uJzljBfplg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Export the finest, handpicked spices globally with our trusted Unity Spices Exporter. Quality, authenticity, and timely delivery guaranteed." />
        <meta property="og:title" content="Unity Spices Exporter - Premium Global Spice Export Service" />
        <meta property="og:description" content="Discover a world of flavor with Unity Spices Exporter. We export premium quality spices worldwide with reliable service and competitive prices." />
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NTDKHFWFKD"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NTDKHFWFKD');
        </script>
        <style>{`
          a:hover {
            text-shadow: 0 0 5px rgba(244, 164, 97, 1), 0 0 10px rgba(244, 164, 97, 1);
          }
        `}</style>
      </Head>

      {/* Header */}
      <header className="bg-[#264653] text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/png.png"
                width={40}
                height={40}
                alt="Home"
              />
            </Link>
            <a href="/" className="text-2xl font-bold">
              Unity Exporter
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {['#about', '#products', '#contact'].map((section) => (
              <a
                key={section}
                href={`/${section}`}
                className="relative group text-white"
              >
                {section.slice(1).charAt(0).toUpperCase() + section.slice(2)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f4a261] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
          </nav>

          {/* Mobile Menu Button */}
          <button id="menu-toggle" className="md:hidden text-2xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        <nav id="mobile-menu" className="hidden bg-[#2a6a73] md:hidden">
          <ul className="space-y-4 p-4">
            {['#about', '#products', '#contact'].map((section) => (
              <li key={section}>
                <a
                  href={section}
                  className="block hover:text-[#f4a261] transition"
                >
                  {section.slice(1).charAt(0).toUpperCase() + section.slice(2)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-white min-h-screen py-12">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="container mx-auto flex flex-col justify-center items-center min-h-screen space-y-8 text-center relative z-10 transform -translate-y-20">
          <h1 className="text-6xl font-bold animate__animated animate__bounceInUp">
            Welcome to Unity Exporter
          </h1>
          <p className="text-2xl animate__animated animate__fadeInUp animate__delay-1s">
            Exporting Premium Products
          </p>
          {/* <a
            href="#contact"
            id="flame-button"
            className="bg-white text-[#264653] px-8 py-2 rounded-full hover:bg-[#f1faee] transition transform hover:scale-110 text-lg"
          >
            Get in Touch
          </a> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-[#264653] mb-6">About Us</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          At Unity Exporter, we specialise in exporting premium quality products. Our mission is to connect global markets with the best quality products.
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section id="mission" className="relative py-16 bg-gradient-to-br from-[#264653] via-[#2a9d8f] to-[#e9c46a] text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320">
            <path fill="white" d="M0,256L1440,160L1440,320L0,320Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-10">
          <span className="block">Our Vision & Mission</span>
        </h2>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-500 ease-in-out hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-br from-[#2a9d8f] to-[#264653] rounded-full text-white font-bold text-2xl">
                V
              </div>
              <h3 className="text-2xl font-bold text-[#264653]">Our Vision</h3>
            </div>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              To facilitate global economic growth by ensuring the responsible and reliable flow of commodities, meeting the world's evolving needs with integrity and innovation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition duration-500 ease-in-out hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 flex items-center justify-center bg-gradient-to-br from-[#e76f51] to-[#f4a261] rounded-full text-white font-bold text-2xl">
                M
              </div>
              <h3 className="text-2xl font-bold text-[#e76f51]">Our Mission</h3>
            </div>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              To consistently deliver the highest quality commodities and ensure reliability in every transaction, building trust and excellence in the global marketplace.
            </p>
          </div>
        </div>

        {/* Subtle Animation */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[#f4a261] to-[#e76f51] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-[#2a9d8f] to-[#264653] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </section>
    
    <ProductSection />
    <ContactSection />
    <WhatsAppButton />
    <footer className="bg-[#264653] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center px-4">
        {/* Company Info */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image src="/png.png" alt="Unity Exporter Logo" width={32} height={32} />
            <h4 className="text-lg font-bold mb-2">Unity Exporter</h4>
          </div>
          <p className="text-center mb-2">
            Facilitating global economic growth with high-quality commodities and reliable services.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link
              href="https://www.instagram.com/unity_exporter/?utm_source=ig_web_button_share_sheet"
              className="text-gray-500 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/insta.png" alt="Instagram" width={32} height={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/unity-exporter-977151318/"
              className="text-gray-500 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link
              href="https://x.com/UnityExporter?t=_KsxWQ-Htlyv_3sMVMFKWA&s=09"
              className="text-gray-500 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twi.jpg" alt="Twitter" width={32} height={32} />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p>📍 Near old water tank, Shivaji Ward, Warora, Dist. Chandrapur, Maharashtra, India, 442907</p>
          <p>📞 Phone: +91-6262441313</p>
          <p>📧 Email: unityexporter@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:text-[#f4a261] transition">About Us</a></li>
            <li><a href="#products" className="hover:text-[#f4a261] transition">Products</a></li>
            <li><a href="#contact" className="hover:text-[#f4a261] transition">Contact Us</a></li>
            <li><a href="#mission" className="hover:text-[#f4a261] transition">Mission & Vision</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>&copy; 2024 Unity Export. All Rights Reserved.</p>
        <p>Designed with 💖 by Unity Export Team.</p>
      </div>
    </footer>
    </>
  );
}
