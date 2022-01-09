exports.variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.5,
      type: "tween",
      // when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
