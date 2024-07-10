import NavButton from './buttons/NavButton';
import ThemeButton from './buttons/ThemeButton';
const NavBar = () => {
  return (
    <nav className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center p-4">
      <div className="order-1 sm:order-1 md:order-1 text-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Portfolio Personal
        </h1>
        <p className="text-xl font-bold text-white-rock-400/50 dark:text-slate-400">
          Axel Lescano | Developer Jr
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-2 order-1 sm:order-2 md:order-2 sm:mt-3">
        <NavButton text="Home" idParam={'home'} />
        <NavButton text="About Me" idParam={'about'} />
        <NavButton text="Proyects" idParam={'proyects'} />
        <NavButton text="Contact" idParam={'root'} />
        <ThemeButton />
      </div>
    </nav>
  );
};

export default NavBar;
