import PageTransition from "./PageTransition";
import portrait from "./assets/me.jpeg";

function About() {
  return (
    <PageTransition page="about">
      <main className="w-full bg-amber-50">
        <div className="flex w-full flex-col items-center gap-8 px-5 py-8 sm:px-10 md:flex-row md:items-start md:gap-0 md:px-12 md:py-10 lg:px-20">
          <div className="w-full max-w-md md:w-[42%] md:max-w-none">
            <img
              className="block max-h-[32rem] w-full rounded-4xl border-2 border-[#B8C0E7] object-cover"
              src={portrait}
              alt="Samiksha surrounded by her artwork"
            />
          </div>

          <div className="w-full rounded-2xl p-2 sm:p-6 md:w-[58%]">
            <h1 className="font-nav text-3xl text-[#454a6f] sm:text-4xl md:text-5xl">
              A Little About My Passion
            </h1>
            <p className="mt-4 text-justify font-txt leading-relaxed text-[#8E94C4]">
              I've always enjoyed the process of turning something I admire into something I can create with my own hands. Whether it's a drawing I come across or an image that catches my eye, I love the challenge of recreating it, paying attention to the little details, and watching it slowly come together on paper.

              For me, art is a way to slow down, focus, and get lost in the moment. I enjoy the patience it takes, the satisfaction of getting a detail just right, and the happiness that comes with seeing the finished result.

              I'm still exploring my skills and discovering what I enjoy creating the most, but one thing that remains constant is my love for the process. Every drawing teaches me something new, and every piece reminds me why I enjoy creating art in the first place.
            </p>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

export default About
