import * as React from "react";
import { motion } from "framer-motion";
import { stagger } from "../styles/Animation";
import Link from "next/link";

const colors = ["amber-pink", "green-blue", "purple-purple", "blue-blue"];

export const MenuItem = ({ i, link, children }) => {
  return (
    <motion.li
      className="mb-3"
      variants={stagger}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className={`text-2xl font-semibold text-zinc-900 dark:text-gray-100 bg-clip-text ${colors[i]}-gradient`}>
        <Link href={link}>
          <a>{children}</a>
        </Link>
      </h3>
    </motion.li>
  );
};
