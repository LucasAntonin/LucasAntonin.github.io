import Navbar from './components/layouts/Navbar';
import NeonBox from './components/NeonBox';
import Avatar from './components/Avatar';
import Location from './components/Location';
import NeonTitle from './components/NeonTitle';
import NeonSubTitle from './components/NeonSubTitle';
import NeonDivisor from './components/NeonDivisor';
import NeonText from './components/NeonText';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import './App.css';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className="space">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="m-10 grid md:grid-cols-2 grid-cols-1">
        <NeonBox>
          <div className='flex justify-center mb-5 mt-10'>
            <Avatar />
          </div>
          <NeonTitle>
            Lucas Antonin
          </NeonTitle>
          <NeonSubTitle>
            Full Stack Web Developer
          </NeonSubTitle>
          <Location>
            Maricá - RJ, Brazil
          </Location>
          <div className="flex flex-row justify-center font-extrabold text-blue-800 text-8xl mb-5 ">
            <a href='https://www.linkedin.com/in/lucas-antonin/' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/LucasAntonin' target="_blank"><AiOutlineGithub /></a>
          </div>
        </NeonBox>
        <img className="z-40 w-10/12 h-full hidden md:block" src="images/neon-fox.png" />
      </div>
      {/* About */}
      <div id="about" className='m-10'>
        <NeonBox>
          <NeonTitle>
            About Me
          </NeonTitle>
          <NeonText>
            I am a highly skilled and experienced Full Stack Web Developer with over 5 years of experience in the industry. I have a passion for coding and have been programming since the age of 14. Throughout my career, I have honed my skills in various technologies and frameworks, including Laravel, Node.js, React.js, Next.js, Vue.js, Tailwind CSS. I have a strong background in developing and deploying full-scale web applications that meet the needs of both businesses and users. I am committed to delivering high-quality, reliable and user-friendly solutions, and am constantly seeking new challenges to further develop my skills and knowledge. Let's build amazing things together.
          </NeonText>
        </NeonBox>
      </div>
      {/* Experience */}
      <div id="experience" className='m-10'>
        <NeonBox>
          <NeonTitle>
            Experience
          </NeonTitle>
          <NeonSubTitle>
            Full Stack Web Developer at Dicas Mei (2022-Present)
          </NeonSubTitle>
          <Location>
            Bauru - SP, Brazil
          </Location>
          <NeonText>
            I work with a diverse client base including well-known brazilian companies such as Natura, Avon, Febracis, Wiser, Ambev, Diamantes, as well as numerous small Brazilian entrepreneurs. I utilize my expertise in Laravel, React.js, React Native, Vue.js and Tailwind CSS to deliver tailored web solutions that meet the unique needs of each client. I am committed to staying current with the latest web development technologies and industry trends, ensuring that my clients receive the best possible outcome.
          </NeonText>
          <NeonDivisor />
          <NeonSubTitle>
            Full Stack Web Developer at Hla Tecnologia (2021-2022)
          </NeonSubTitle>
          <Location>
            Curitiba - PR, Brazil
          </Location>
          <NeonText>
            At Hla Tecnologia, I served as a Full Stack Web Developer where I was responsible for working on the development and maintenance of the company's telemedicine system and car oil change system. My work involved utilizing Laravel, React, and Bootstrap frameworks to create user-friendly and efficient applications. During my time at Hla Tecnologia, I was able to gain valuable experience in full stack web development and improve my skills in various technologies.
          </NeonText>
          <NeonDivisor />
          <NeonSubTitle>
            As a Freelance Web Developer (2019-2020)
          </NeonSubTitle>
          <Location>
            Brazil
          </Location>
          <NeonText>
            I have provided web development services to a range of small clients, delivering custom-built solutions that meet their unique needs. My expertise in Node.js, Laravel, React.js, Vue, and Tailwind CSS has allowed me to create dynamic and user-friendly web applications that not only meet but exceed my clients' expectations. I am dedicated to staying at the forefront of web development technologies, continuously improving my skillset to provide the highest quality services to my clients.
          </NeonText>
        </NeonBox>
      </div>
    </div >
  );
}

export default App;
