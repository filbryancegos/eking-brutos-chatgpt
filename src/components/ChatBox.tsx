
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ChatBox = ({ message, user }: { message: string; user: "me" | "gpt" }) => {
  const chatStringIndex = useRef(0);
  const [gptMessage, setGptMessage] = useState("");

  function appendChar() {
    setGptMessage((prev) => prev + message[chatStringIndex.current]);
    chatStringIndex.current++;
  }

  useEffect(() => {
    if (chatStringIndex.current < message.length - 1) {
      const appendCharInterval = setInterval(appendChar, 50);
      return () => clearInterval(appendCharInterval);
    }
  }, [gptMessage, chatStringIndex.current]);

  return (
     <motion.div
        style={{
          alignSelf: user === "gpt" ? "flex-start" : "flex-end",
          display: 'flex',
          justifyContent: 'flex-start',
          width: "auto",
          maxWidth: "90%",
          }}
          initial={{
            opacity: 0,
            translateY: "100%",
          }}
          animate={{ opacity: 1, translateY: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, translateY: 0 }}
      >
        <div className={`flex-${user === "gpt" ? 'row' : 'row-reverse'} flex gap-2 items-start justify-end`}>
          <span style={{fontSize: '10px'}} className={`h-8 w-8 p-4 bg-${user === "gpt" ? 'pink-600' : 'purple-600'} rounded-full text-white flex justify-center items-center text-sm`}>{user === 'gpt' ? 'GPT' : 'ME'}</span>
          <span className={`bg-${user === "gpt" ? 'pink-600' : 'purple-600'} text-white`} style={{
            padding: '1rem 1rem',
            borderRadius: '0 20px 20px 20px',
          }}>
            {gptMessage}
          </span>
        </div>
      </motion.div> 
  );
};

export default ChatBox;
