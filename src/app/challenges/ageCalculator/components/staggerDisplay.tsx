import { motion } from "framer-motion";

export function StaggerDisplay({ words }: { words: string }) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, idx) => (
        <motion.h1
          key={`${letter}-${idx}`}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={`${letter}-${idx}`}
          className="font-display text-center text-5xl font-bold sm:leading-[5rem]"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
      <span>&nbsp;</span>
    </div>
  );
}
