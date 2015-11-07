import React from "react";

const TourButton = (props) => {
	return (
		<div style={props.style} onClick={props.onClick} {...props}>
			{props.children}
		</div>
	);
};

TourButton.defaultProps = {
	style: {
		"width": 50,
		"height": 30,
		"backgroundColor": "#cbd1d4",
		"color": "#494949",
		"fontWeight": 700,
		"display": "inline-block",
		"textAlign": "center",
		"paddingTop": "5px",
		"cursor": "pointer",
		"float": "right",
		"marginRight": 10
	},
	onClick: () => {}
};

export default TourButton;
