import { useNavigate } from "react-router-dom";
import PageTransition from "./PageTransition";
import hero from "./assets/hero.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition page="home">
      <main className="relative min-h-screen bg-amber-50 px-3 pt-1 sm:px-5">
        <div className="relative">
          <img
            className="block h-[min(72vh,31.25rem)] min-h-[25rem] w-full rounded-3xl object-cover sm:h-[31.25rem] sm:rounded-4xl"
            src={hero}
            alt="Artistic hero"
          />

          <div className="absolute left-4 top-4 z-10 sm:left-8 sm:top-8 md:left-12 md:top-10">
            <p className="max-w-[78vw] font-nav text-4xl leading-tight text-[#3d446d] sm:max-w-lg sm:text-6xl md:text-7xl">
              Exploring the world one brushstroke at a time.
            </p>
          </div>

          <div className="absolute bottom-5 right-4 z-10 flex max-w-[88%] flex-col items-end justify-center text-right font-nav sm:bottom-8 sm:right-8 md:bottom-10 md:right-12">
            <p className="text-2xl leading-tight text-[#242843] sm:text-4xl ">
              A little chaos. A lot of color.
            </p>

            <button
              onClick={() => navigate("/works")}
              className="mt-4 rounded-4xl bg-[#2D3C2B] p-3 text-base text-white transition-colors duration-300 hover:cursor-grab sm:mt-6 sm:text-xl"
            >
              View My Gallery
            </button>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

export default Home
