import React from 'react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className='footer'>
      <span>
      © 2021
        <a
          href='https://github.com/Hyricon'
          target='_blank'
          rel='noreferrer'
        >
          Hyricon Development
        </a>
      </span>
    </footer>
  );
}
