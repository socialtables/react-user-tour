import scrollTo from "scroll-to";

export default function scrollToPosition({el, x = 0, y = 0}, cb) {
  scrollTo(x, y, {
    ease: "out-sine",
    duration: 500
  });
  setTimeout(cb, 501);
}
