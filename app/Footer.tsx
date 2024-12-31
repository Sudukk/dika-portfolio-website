import React from 'react';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 rounded-lg bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col items-center text-center">
        <div className="flex flex-row items-center justify-center space-x-1">
          © 2024 Wikandika Setya Nugroho. All rights reserved. <a href="/" className="hover:underline"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
