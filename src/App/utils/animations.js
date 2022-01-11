exports.variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "tween",
      // when: "beforeChildren",
      staggerChildren: 0,
    },
  },
};
