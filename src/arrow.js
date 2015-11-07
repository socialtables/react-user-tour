import React from "react";
import { arrowUp, arrowDown, arrowLeft, arrowRight } from "./arrow-styles";

const Arrow = ({position, width, height, size, color}) => {
	let arrowStyle;
	switch (position) {
		case "left":
			arrowStyle = arrowRight({size, color});
			arrowStyle.left = width;
			break;
		case "right":
			arrowStyle = arrowLeft({size, color});
			break;
		case "top":
			arrowStyle = arrowDown({size, color});
			arrowStyle.top = height;
			break;
		case "topLeft":
			arrowStyle = arrowDown({size, color});
			arrowStyle.top = height;
			arrowStyle.left = width - (size * 2);
			break;
		case "bottom":
			arrowStyle = arrowUp({size, color});
			break;
		case "bottomLeft":
			arrowStyle = arrowUp({size, color});
			arrowStyle.left = width - (size * 2);
			break;
		default:
			arrowStyle = {};
	}
	return <div className="react-user-tour-arrow" style={arrowStyle} />;
};

export default Arrow;
