
import { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import PageTransition from "./PageTransition";
import { AnimatePresence, motion } from "framer-motion";

function MyWorks() {
  const gridRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const artworkFiles = [

    "Artist Study Of Claude Monet.jpeg",
    "The Starry Night.jpeg",
    "Autumn.jpeg",
    "Richard Parker.jpeg",
    "Seo Yea-ji.jpeg",
    "Pennywise 3.jpeg",
    "Pennywise 2.jpeg",

    "Sol.jpeg",
    "A Still From The Sound Of Magic.jpeg",
    "Veil In Colour.jpeg",
    "Mr. Bean.jpeg",

    "Pennywise 4.jpeg",
    "Pennywise.jpeg",
    "The Man With The Violin.jpeg",
    "Lost.jpeg",
    "Santa Claus.jpeg",
    "Aquarium.jpeg",
    "Taeyong.jpeg",
    "Rose.jpeg",


    "Blue Eyes.jpeg",
    "Taylor Swift.jpeg",

    "A Still From Wonderland.jpeg",
    "When Life Gives You Lemons.jpeg",
    "Whisper Of A Sister.jpeg",
    "A Still From Goblin.jpeg",



    "A Still From Alchemy Of Souls.jpeg",

    "A Still From My Love.jpeg",
    "A Still From Squid Game 2.jpeg",
    "A Still From Squid Game.jpeg",
    "A Still From Studio Ghibli 2.jpeg",
    "A Still From Studio Ghibli.jpeg",

    "A Still From Why Her.jpeg",

    "A Woman.jpeg",
    "Alice In Wonderland.jpeg",
    "Altitude.jpeg",

    "Artist Study Of Ravi Varma.jpeg",
    "Artist Study Of Ravi Varma 2.jpeg",


    "Baby.jpeg",
    "Blooming Within.jpeg",
    "A Bartender.jpeg",

    "Bobby.jpeg",
    "Cha Eun Woo.jpeg",

    "Cone Head.jpeg",
    "Death Parade.jpeg",
    "Deepa.jpeg",
    "Dessert.jpeg",
    "Earthbound.jpeg",
    "Emarald.jpeg",
    "First Fall Of Snow.jpeg",
    "Flower Vase.jpeg",
    "Ganapathi.jpeg",
    "Genre.jpeg",
    "Goblin.jpeg",
    "Homestay.jpeg",
    "Hymn Of Death.jpeg",
    "Hyunjin.jpeg",
    "Ink In Bloom.jpeg",
    "Jay 2.jpeg",
    "Jay.jpeg",
    "Joker.jpeg",
    "Liliam.jpeg",
    "Little Misery.jpeg",


    "Midnight Muse.jpeg",
    "Moana.jpeg",

    "Muah!.jpeg",
    "Nick Wilde.jpeg",
    "Pancakes.jpeg",

    "Petals Of Kyoto.jpeg",
    "Poise.jpeg",

    "Roop.jpeg",




    "Swan.jpeg",


    "Tea Party.jpeg",
    "The Aftermath.jpeg",
    "The Ghost On Cannery Row.jpeg",
    "The Girl.jpeg",
    "The Hat.jpeg",
    "The Lady Bug.jpeg",


    "Tokyo Ghoul.jpeg",

    "Vesham.jpeg",


    "Wi Ha-joon.jpeg",
    "Woman With Flower.jpeg",
    "Yuta.jpeg",
  ];

  const images = artworkFiles.map((filename) => ({
    title: filename.replace(/\.jpeg$/i, ""),
    src: `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`,
  }));


  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const masonry = new Masonry(grid, {
      itemSelector: ".art-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      gutter: 16,
      transitionDuration: "0.3s",
    });

    const imageLoader = imagesLoaded(grid, () => {
      masonry.layout();
    });

    imageLoader.on("progress", () => {
      masonry.layout();
    });

    return () => {
      imageLoader.off("progress");
      masonry.destroy();
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

 return (
  <PageTransition page="works">
    <div className="min-h-screen bg-amber-50">
      <h1 className="py-5 text-center font-nav text-4xl text-[#8E94C4] sm:text-5xl">
        My Works
      </h1>

      {/* Masonry gallery */}
      <div
        ref={gridRef}
        className="masonry-grid"
      >
        <div className="grid-sizer"></div>

        {images.map((image) => (
          <div
            className="art-item mb-4 pb-3"
            key={image.src}
            onClick={() => setSelectedImage(image)}
          >
            <div className="group relative overflow-hidden rounded cursor-pointer">
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="block h-auto w-full rounded-3xl"
              />

              <div className="absolute inset-x-0 bottom-0 flex translate-y-0 items-center justify-center bg-black/50 px-2 py-3 text-center opacity-100 transition-all duration-300 ease-in-out md:translate-y-full md:px-3 md:py-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <h2 className="font-serif text-lg text-white md:text-xl">
                  {image.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen artwork — outside the Masonry grid */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="artwork-overlay"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90dvh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
              initial={{ opacity: 0, y: 35, scale: 0.75 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </PageTransition>
);
}

export default MyWorks;
