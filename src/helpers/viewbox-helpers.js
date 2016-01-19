export const isElementBelowViewBox = (viewBoxHeight, top) => viewBoxHeight - top < 0;
export const isElementAboveViewBox = (bottom) => bottom < 0;
export const isElementLeftOfViewBox = (viewBoxWidth, left) => (viewBoxWidth - left) < 0 || left < 0;
export const isElementRightOfViewBox = (viewBoxWidth, right) => (viewBoxWidth - right) < 0 || right < 0;
export const shouldPositionLeft = (viewBoxWidth, left) => (viewBoxWidth - left) < (viewBoxWidth /2);
export const shouldPositionAbove = (viewBoxHeight, bottom) => (viewBoxHeight - bottom) < 100;
export const shouldPositionBelow = (top) => top < 50;
