import { AboutMe } from './components/AboutMe';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Proyects from './components/Proyects';

function App() {
  return (
    <div className="container-sm container mx-auto min-h-screen" id="root">
      <div className="sticky top-0">
        <NavBar />
      </div>
      <Home id="home" />
      <hr className="border-white-rock-500 dark:border-slate-400 p-10" />
      <AboutMe id="about" />
      <Proyects id="proyects" />
    </div>
  );
}

export default App;
