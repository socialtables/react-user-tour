import React from "react";

const TourButtonContainer = ({children, style}) => {
	return (
		<div className="react-user-tour-button-container" style={style}>
			{children}
		</div>
	);
}

export default TourButtonContainer;