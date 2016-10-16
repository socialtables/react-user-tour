import scrollTo from "scroll-to";

export default function scrollToPosition(el, { x, y }, cb) {
  scrollTo(x, y, {
    ease: "out-sine",
    duration: 500
  });
  setTimeout(() => {
    cb(el.getBoundingClientRect());
  }, 500);
}
