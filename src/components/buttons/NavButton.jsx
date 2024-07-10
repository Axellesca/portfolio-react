import React from 'react';

const NavButton = ({ text, idParam }) => {
  return (
    <a
      className="py-2 px-4 min-w-36 bg-white-rock-300 text-center text-black hover:bg-white-rock-500 shadow-lg dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:shadow-lg rounded-lg"
      href={`#${idParam}`}
    >
      {text}
    </a>
  );
};

export default NavButton;
