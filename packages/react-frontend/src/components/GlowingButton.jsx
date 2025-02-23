import React from 'react';

// Credit for styles: https://youtu.be/5W6kEP65AH4
const GlowingButton = ({ as: Element = 'a', children, href, ...props }) => {
  return (
    <div className="w-fit text-secondary lg:text-xl font-semibold">
      <div className="grid gap-8 items-center justify-center">
        <div className="relative group hover:scale-105 transition duration-400">
          <div className="absolute -inset-0.5 bg-primary/60 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-700 group-hover:duration-600"></div>
          <Element
            href={href}
            download={Element === 'a' ? href : undefined}
            className="relative px-7 py-4 bg-primary rounded-full leading-none flex items-center divide-x divide-gray-600"
            {...props}
          >
            {children}
          </Element>
        </div>
      </div>
    </div>
  );
};

export default GlowingButton;