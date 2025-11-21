import { ASSETS } from "@/app/constants/assets";
import { motion } from "framer-motion";
import Transition from "../transition";
import { ArrowRight } from "lucide-react";

const ViewJournals = () => {
  const posts = [
    {
      img: ASSETS.journal1,
      title: "The Art of Silence",
      date: "Oct 12, 2025",
      category: "Editorial",
    },
    {
      img: ASSETS.journal2,
      title: "Sustainable Future",
      date: "Sep 28, 2025",
      category: "Behind the Scenes",
    },
    {
      img: ASSETS.model3,
      title: "Midnight in Paris",
      date: "Aug 15, 2025",
      category: "Campaign",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] pt-32 px-6 md:px-12 pb-20 text-[#050505]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <span className="uppercase tracking-[0.5em] text-sm text-gray-500 block mb-4">
          Cindrelia Magazine
        </span>
        <h1 className="text-6xl md:text-9xl font-serif italic">The Journal</h1>
      </motion.div>

      <div className="space-y-32">
        {posts.map((post, i) => (
          <Transition
            key={i}
            className={`flex flex-col ${
              i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-12 md:gap-24 items-center group interactive cursor-pointer`}
          >
            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/3]">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7 }}
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#Cfb53b] mb-4">
                {post.category}
              </span>
              <h2 className="text-5xl md:text-6xl font-serif mb-6 group-hover:underline decoration-1 underline-offset-8 decoration-[#Cfb53b]">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                Exploring the depths of modern aesthetics and the quiet
                revolution of form and function in our latest collection
                release.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest">
                Read Article <ArrowRight className="w-4 h-4 text-[#Cfb53b]" />
              </div>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default ViewJournals;
