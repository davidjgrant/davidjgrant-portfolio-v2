import * as React from "react";
import { motion } from "framer-motion";
import { stagger } from "../styles/Animation";
import Link from "next/link";

// const colors = ["amber-pink", "green-blue", "purple-purple", "amber-pink", "green-blue"];

export const ProjectItem = ({ link, children }) => {
  return (
    <motion.li
      className="mb-2"
      variants={stagger}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className={`text-lg text-zinc-900 dark:text-gray-100`}>
        <Link href={`/portfolio${link}`}>
          <a>{children}</a>
        </Link>
      </h3>
    </motion.li>
  );
};
