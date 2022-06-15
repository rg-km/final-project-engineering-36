import "../styles/hero.css";
import hero from "../assets/hero.svg";

function Hero() {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between bg-white">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">develop & grow</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Mari Belajar skill Digital
          </h1>
          <p className="text-2xl">
            Jadilah 1% manusia terbaik di dunia dengan mengikuti course online dan
            dapatkan Maudy Ayunda
          </p>
          <button className="py-3 px-6 sm:w-[60%] my-4 bg-purple-500 rounded text-white ml-0">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-full shake-vertical HeroJumbo" src={hero} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
