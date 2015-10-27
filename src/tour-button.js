import React, { Component } from "react";

export default class TourButton extends Component {
	render() {
		return (
			<div style={this.props.style} onClick={this.props.onClick}>
				{this.props.children}
			</div>
		);
	}
}

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
