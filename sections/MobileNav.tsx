import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { Menu } from "../components/menu";
import MobNavToggle from "../components/mobNavToggle";
import MobNavFooter from "../components/mobNavFooter";
import { sidebar } from "../styles/Animation";
import Logo from "../components/logo";

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.aside
        className="absolute top-0"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebar}
      >
        <div className="md:hidden w-[90vw] h-[100vh] bg-gray-100 dark:bg-zinc-900 p-5">
          <div className="flex justify-between items-center">
            <MobNavToggle toggle={() => toggleOpen()} />
            <Logo />
          </div>
          <div className="grid grid-rows-3 h-[90vh]">
            <Menu toggle={() => toggleOpen()} />
            <MobNavFooter />
          </div>
        </div>
      </motion.aside>
    </>
  );
};
