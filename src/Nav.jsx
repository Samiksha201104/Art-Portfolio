import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex min-h-14 flex-col items-center justify-center gap-2 bg-amber-50 py-3 font-bubly sm:flex-row sm:justify-between sm:px-6 sm:py-0">
      <p className="text-center text-[1.6rem] leading-tight text-[#8E94C4] sm:text-3xl md:pl-10 md:text-4xl">
        Samiksha Paramesh
      </p>

      <div className="flex w-full justify-center gap-5 text-base font-bold text-[#8E94C4] sm:w-auto sm:gap-6 sm:text-lg md:gap-9 md:pr-10 md:text-2xl lg:pr-20">
        <Link className="transition-colors duration-300 hover:cursor-grab hover:text-[#2D3C2B]" to="/">Home</Link>
        <Link className="transition-colors duration-300 hover:cursor-grab hover:text-[#2D3C2B]" to="/about">About</Link>
        <Link className="transition-colors duration-300 hover:cursor-grab hover:text-[#2D3C2B]" to="/works">My Works</Link>
      </div>
    </nav>
  )
}

export default Nav
