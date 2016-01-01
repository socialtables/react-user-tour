import scrollTo from "scroll-to";

export default function scrollToPosition(el, position) {
  scrollTo(0, position, {
    ease: "out-sine",
    duration: 500
  });
  return el.getBoundingClientRect();
}
