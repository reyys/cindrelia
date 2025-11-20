import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const LuxuryCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {
    const updateMouse = (e: { clientX: number; clientY: number }) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onHover = (e: any) => {
      setIsHovering(true);
      if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
        setIsButton(true);
      }
    };
    const onLeave = () => {
      setIsHovering(false);
      setIsButton(false);
    };

    window.addEventListener("mousemove", updateMouse);

    const handleInteractions = () => {
      document
        .querySelectorAll("a, button, .interactive, input")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onHover);
          el.removeEventListener("mouseleave", onLeave);
          el.addEventListener("mouseenter", onHover);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    handleInteractions();
    const observer = new MutationObserver(handleInteractions);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#Cfb53b] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-[#Cfb53b]/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? (isButton ? 60 : 40) : 20,
          height: isHovering ? (isButton ? 60 : 40) : 20,
          opacity: isHovering ? 1 : 0.5,
          backgroundColor: isButton ? "rgba(207, 181, 59, 0.1)" : "transparent",
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />
    </>
  );
};

export default LuxuryCursor;
