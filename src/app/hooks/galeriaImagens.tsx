// components/ImageGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {images.length > 0 && (
        <div className="w-4/5 max-w-xl aspect-video relative overflow-hidden rounded-md shadow-md">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      {images.length > 1 && (
        <div className="flex gap-4 items-center">
          <button onClick={goToPrevious} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">
            Anterior
          </button>
          <span>{currentIndex + 1} / {images.length}</span>
          <button onClick={goToNext} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;