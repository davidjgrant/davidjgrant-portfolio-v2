export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.25
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const titleAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.75 }
  }
}

export const picAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.4 }
  }
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 }
  }
}

export const stagger = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


export const sidebar = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    clipPath: "circle(24px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};