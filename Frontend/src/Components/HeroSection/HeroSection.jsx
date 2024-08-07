import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const strings = ['Welcome to Our Farm', 'Fresh and Organic Pickles','Order For Pickles'];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[index];
      if (deleting) {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        if (charIndex < currentString.length) {
          setCurrentText((prev) => prev + currentString.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setDeleting(true);
        }
      }
    };

    const typingSpeed = deleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, deleting, charIndex, index, strings]);

  return (
    <div className="relative">
      <img
        src="https://walnutcreekfarmtexas.com/wp-content/uploads/2023/06/GettyImages-883109582-pickles.jpg"
        className="rounded-lg w-full"
        alt="Hero Background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-playwrite-gb-s text-2xl md:text-4xl font-bold">
            {currentText}
          </h1>
        </div>
      </div>
    </div>
  );
}
