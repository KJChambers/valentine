import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineApp() {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPos({ x, y });
  };

  if (accepted) {
    return (
      <div className="flex items-center justify-center h-screen bg-pink-100">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl font-bold text-pink-600"
        >
          YAY 💖
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 gap-8">
      <h1 className="text-4xl font-semibold text-pink-700">
        Will you be my Valentine? 💘
      </h1>

      <div className="flex gap-6 relative">
        <button
          onClick={() => setAccepted(true)}
          className="px-6 py-3 text-lg rounded-2xl bg-pink-500 text-white shadow-lg hover:bg-pink-600"
        >
          Yes 💕
        </button>

        <motion.button
          onMouseEnter={moveNoButton}
          animate={{ x: noPos.x, y: noPos.y }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 text-lg rounded-2xl bg-gray-300 text-gray-700 shadow-lg absolute"
        >
          No 😢
        </motion.button>
      </div>
    </div>
  );
}
