import scrollTo from "scroll-to";

export default function scrollToPosition({el, x = 0, y = 0}, cb) {
  scrollTo(x, y, {
    ease: "out-sine",
    duration: 500
  });
  // need to give a little time for move to happen before firing callback
  setTimeout(cb, 200);
}
