'use client'; // if you're using Next.js App Router and need interactivity

import Link from 'next/link';
import Image from 'next/image';

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-16 bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/chillibackgraound.mp4" type="/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative container mx-auto z-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          Our Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card: Chilli */}
          <div className="p-6 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition transform duration-300">
            
            {/* Image container */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/chi.jpeg"
                alt="Chilli Products"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Product Title */}
            <h4 className="text-2xl font-bold text-white mb-2">Chilli Products</h4>

            {/* Product List */}
            <ul className="list-disc ml-6 text-gray-200 mb-4">
              <li>Chilli Powder</li>
              <li>Chilli Flakes</li>
              <li>Stemmed Chilli</li>
              <li>Stemless Chilli</li>
            </ul>

            {/* Enquiry Button */}
            <div className="flex justify-center">
              <Link
                href="#contact"
                className="inline-block bg-[#f4a261] text-white font-bold py-2 px-4 rounded-full hover:bg-[#e76f51] transition duration-300 text-center"
              >
                Enquire Now
              </Link>
            </div>

          </div>

          {/* Product Card: Turmeric */}
          <div className="p-6 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition transform duration-300">
          <div className="relative w-full h-48 mb-4">
          <Image
              src="/turmeric1.jpeg"
              alt="Turmeric Products"
              fill
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">Turmeric Products</h4>
            <ul className="list-disc ml-6 text-gray-200 mb-4">
              <li>Turmeric Finger</li>
              <li>Turmeric Powder</li>
            </ul>
            <div className="flex justify-center">
              <Link
                href="#contact"
                className="inline-block bg-[#f4a261] text-white font-bold py-2 px-4 rounded-full hover:bg-[#e76f51] transition duration-300 text-center"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Product Card: Coriander */}
          <div className="p-6 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition transform duration-300">
          <div className="relative w-full h-48 mb-4">
          <Image
              src="/Coriander_Seeds.webp"
              alt="Coriander Products"
              fill
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">Coriander Products</h4>
            <ul className="list-disc ml-6 text-gray-200 mb-4">
              <li>Coriander Powder</li>
              <li>Coriander Seeds</li>
              <li>Coriander Splits</li>
            </ul>
            <div className="flex justify-center">
              <Link
                href="#contact"
                className="inline-block bg-[#f4a261] text-white font-bold py-2 px-4 rounded-full hover:bg-[#e76f51] transition duration-300 text-center"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Product Card: Biomass */}
          <div className="p-6 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition transform duration-300">
          <div className="relative w-full h-48 mb-4">
          <Image
              src="/briquette.jpeg"
              alt="Biomass Products"
              fill
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">Biomass Fuel</h4>
            <p className="text-gray-200 mb-4">Available exclusively in India:</p>
            <ul className="list-disc ml-6 text-gray-200 mb-4">
              <li>Biomass Briquettes</li>
              <li>Biomass Pellets</li>
            </ul>
            <div className="flex justify-center">
              <Link
                href="#contact"
                className="inline-block bg-[#f4a261] text-white font-bold py-2 px-4 rounded-full hover:bg-[#e76f51] transition duration-300 text-center"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
