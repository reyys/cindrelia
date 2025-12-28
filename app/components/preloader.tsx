import { motion } from "framer-motion";

const Preloader = ({
  setLoading,
}: {
  setLoading: (isLoading: boolean) => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="relative overflow-hidden">
        <motion.h1
          className="text-6xl md:text-9xl font-serif text-[#F5F5F0] tracking-tighter"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          Cindrelia.id
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Preloader;
