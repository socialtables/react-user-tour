export const arrowUp = ({color, size}) => {
	return {
		width: "0px",
		height: "0px",
		borderLeft: `${size}px solid transparent`,
		borderRight: `${size}px solid transparent`,
		borderBottom: `${size}px solid ${color}`,
		position: "absolute",
		top: -15
	};
};

export const arrowDown = ({color, size}) => {
	return {
		width: "0px",
		height: "0px",
		borderLeft: `${size}px solid transparent`,
		borderRight: `${size}px solid transparent`,
		borderTop: `${size}px solid ${color}`,
		position: "absolute"
	};
};

export const arrowRight = ({color, size}) => {
	return {
		width: "0px",
		height: "0px",
		borderTop: `${size}px solid transparent`,
		borderBottom: `${size}px solid transparent`,
		borderLeft: `${size}px solid ${color}`,
		position: "absolute"
	};
};

export const arrowLeft = ({color, size}) => {
	return {
		width: "0px",
		height: "0px",
		borderTop: `${size}px solid transparent`,
		borderBottom: `${size}px solid transparent`,
		borderRight: `${size}px solid ${color}`,
		position: "absolute",
		left: -15
	};
};
