"use client";

import Image from "next/image";
import { useState } from "react";

const DiplomasPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [selectedImage, setSelectedImage] = useState<string>(""); // To store the clicked image src

  // Hardcoded list of diploma filenames
  const diplomas = [
    "alg-cert.jpg",
    "css-cert.jpg",
    "react-cert.jpg",
    "js-cert.jpg",
    "ts-cert.jpg",
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <main className="grow">
      <section className="py-24">
        <div className="container mx-auto max-w-7xl">
          <h1 className="mb-12 text-center text-3xl font-bold">My Diplomas</h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {diplomas.map((diploma, index) => (
              <div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:border-2 hover:border-nebula-purple"
                onClick={() => openModal(diploma)} // Open modal on image click
              >
                <Image
                  src={`/images/projects/diplomas/${diploma}`}
                  alt={`Diploma ${index + 1}`}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal to show the selected image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal if overlay is clicked
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute right-0 top-0 p-4 text-2xl text-white"
            >
              ×
            </button>
            <Image
              src={`/images/projects/diplomas/${selectedImage}`}
              alt="Selected Diploma"
              width={800} // Larger size for modal view
              height={800} // Larger size for modal view
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default DiplomasPage;
