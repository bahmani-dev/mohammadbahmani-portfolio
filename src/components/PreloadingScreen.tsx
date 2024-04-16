// components/PreloadingScreen.tsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const languages = [
  "سلام",
  "Hello",
  "Hola",
  "Bonjour",
  "नमस्ते",
  "Hallo",
  "你好",
  "Salve",
  "Merhaba",
  "Ciao",
];
const durations = [1, 0.6, 0.4, 0.4, 0.2, 0.2, 0.2, 0.2, 0.2, 0.6]; // durations for each language animation

const PreloadingScreen: React.FC = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);
  const [allMessagesShown, setAllMessagesShown] = useState<boolean>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => {
        if (prevIndex + 1 === languages.length) {
          // If the last message is reached, set allMessagesShown to true
          setAllMessagesShown(true);
          localStorage.setItem("allMessagesShown", "true");
        } else {
          return (prevIndex + 1) % languages.length;
        }
      });
    }, durations[currentLanguageIndex] * 1000);

    // Clear interval when all messages are shown
    return () => clearInterval(intervalId);
  }, [currentLanguageIndex]); // Re-run effect when currentLanguageIndex changes

  if (!allMessagesShown) {
    return (
      <div className="fixed inset-0 flex items-center justify-center text-[#666] bg-white dark:bg-[#111] dark:text-white  z-50 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          key={languages[currentLanguageIndex]}
          className="h-full flex items-center justify-center"
        >
          <h1 className="text-4xl text-center w-full h-full relative top-1/2 left-1/2 transform -translate-x-1/2 ">
            {languages[currentLanguageIndex]}
          </h1>
        </motion.div>
      </div>
    );
  } else {
    return null;
  }
};

export default PreloadingScreen;
