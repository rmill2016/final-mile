export const MenuTransition = {
  hide: {
    width: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
  show: {
    width: '60vw',
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const StaggerLinks = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
      staggerDirection: 1,
    },
  },
}

export const MenuLinks = {
  hide: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}

export const FadeInLeft = {
  hide: {
    opacity: 0,
    x: -20,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}
export const FadeInRight = {
  hide: {
    opacity: 0,
    x: 20,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}
export const FadeInTop = {
  hide: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}
export const FadeInDown = {
  hide: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}
