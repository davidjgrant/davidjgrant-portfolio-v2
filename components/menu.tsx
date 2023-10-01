import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
import { stagger } from '../styles/Animation'
import { ProjectItem } from "./projectItem";

export const Menu = ({toggle}) => {
  const itemIds = [0, 1, 2, 3];
  return (
    <div className="row-span-2">
      <motion.ul className="border-b-2 border-gray-300 dark:border-zinc-400 pt-12 pb-2"
        variants={stagger}>
        <MenuItem i={itemIds[0]} link={'/about'}>About</MenuItem>
        <MenuItem i={itemIds[1]} link={'/contact'}>Contact</MenuItem>
        <MenuItem i={itemIds[3]} link={'/portfolio'}>Portfolio</MenuItem>
      </motion.ul>
      <motion.ul className="pt-2"
        variants={stagger}>
        <ProjectItem toggle={toggle} link={'/aya-abbes-portfolio'}>PSE Archery</ProjectItem>
        <ProjectItem toggle={toggle} link={'/bijoux-de-mimi'}>Bijoux De Mimi</ProjectItem>
        <ProjectItem toggle={toggle} link={'/pse-archery'}>PSE Archery</ProjectItem>
        <ProjectItem toggle={toggle} link={'/legends-speak'}>Legends Speak</ProjectItem>
      </motion.ul>
    </div>
  )
};