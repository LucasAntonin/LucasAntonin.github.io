import Navbar from './components/layouts/Navbar';
import NeonBox from './components/NeonBox';
import { IoLocation } from "react-icons/io5";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import './App.css';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className="m-10 grid sm:grid-cols-2 grid-cols-1">
        <NeonBox>
          <div className='flex justify-center mb-5 mt-10'>
            <img className="w-48 h-48 rounded-full border border-8 border-blue-800" src="images/space-cat.jpg" alt="Rounded avatar" />
          </div>
          <h1 className="font-extrabold mb-5 text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-center">
            Lucas Antonin
          </h1>
          <p className="font-extrabold text-white text-2xl text-center mb-5">
            Full Stack Web Developer
          </p>
          <div className="flex flex-row justify-center font-extrabold text-white text-2xl mb-5 ">
            <IoLocation />
            <p className="ml-1">Maricá - RJ, Brazil</p>
          </div>
          <div className="flex flex-row justify-center font-extrabold text-blue-800 text-8xl mb-5 ">
            <a href='https://www.linkedin.com/in/lucas-antonin/' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/LucasAntonin' target="_blank"><AiOutlineGithub /></a>
          </div>
        </NeonBox>
        <img className="w-10/12 h-full hidden sm:block" src="images/neon-fox.png" />
      </div>
      {/* About */}
      <div className='m-10'>
        <NeonBox>
          <h1 className="font-extrabold mb-5 text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-center">
            About Me
          </h1>
          <p className="font-bold mb-5 text-white text-xl">A ABOUT ME</p>
        </NeonBox>
      </div>
    </div >
  );
}

export default App;
