import React, { Component } from "react";
import {Motion, spring} from "react-motion";

import TourButton from "./tour-button";
import { arrowUp, arrowDown, arrowLeft, arrowRight } from "./arrows";

const ARROW_SIZE = 15;

export default class ReactUserTour extends Component {

	shouldComponentUpdate(nextProps) {
		return this.props.step !== nextProps.step || this.props.active !== nextProps.active;
	}

	getStepPosition(selector, tourElWidth, tourElHeight) {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		const el = document.querySelector(selector);
		let position = el ? el.getBoundingClientRect() : {};
		const isElementCompletelyBelowViewBox = windowHeight - position.top < 0;
		const isElementCompletelyAboveViewBox = position.bottom < 0;
		if (isElementCompletelyBelowViewBox) {
			window.scrollTo(0, position.bottom);
			position = el.getBoundingClientRect();
		}
		else if (isElementCompletelyAboveViewBox) {
			window.scrollTo(0, window.pageYOffset + position.top);
			position = el.getBoundingClientRect();
		}
		const shouldPositionLeft = windowWidth - position.left < (windowWidth / 2);
		const shouldPositionAbove = windowHeight - position.bottom < 100;
		const shouldPositionBelow = position.top < 50;
		let left = position.right + 25;
		let top = position.top + window.pageYOffset;
		let positioned = "right";
		if (shouldPositionLeft && !shouldPositionAbove && !shouldPositionBelow) {
			left = (position.left - 25) - tourElWidth;
			positioned = "left";
		}
		else if (shouldPositionAbove) {
			top = top - tourElHeight - ARROW_SIZE;
			if (shouldPositionLeft) {
				left = (position.left + 25) - tourElWidth;
				positioned = "topLeft";
			}
			else {
				left = position.left;
				positioned = "top";
			}
		}

		else if (shouldPositionBelow) {
			top = top + el.offsetHeight + ARROW_SIZE;
			if (shouldPositionLeft) {
				left = (position.left + 25) - tourElWidth;
				positioned = "bottomLeft";
			}
			else {
				left = position.left;
				positioned = "bottom";
			}
		}

		return {
			top: top,
			left: left,
			positioned: positioned
		};
	}

	getArrow(position, width, height) {
		let arrowStyle;
		switch (position) {
			case "left":
				arrowStyle = arrowRight;
				arrowStyle.left = width;
				break;
			case "right":
				arrowStyle = arrowLeft;
				break;
			case "top":
				arrowStyle = arrowDown;
				arrowStyle.top = height;
				break;
			case "topLeft":
				arrowStyle = Object.assign({}, arrowDown);
				arrowStyle.top = height;
				arrowStyle.left = (width - 20) - ARROW_SIZE;
				break;
			case "bottom":
				arrowStyle = arrowUp;
				break;
			case "bottomLeft":
				arrowStyle = Object.assign({}, arrowUp);
				arrowStyle.left = (width - 20) - ARROW_SIZE;
				break;
			default:
				arrowStyle = {};
		}
		return <div className="react-user-tour-arrow" style={arrowStyle} />;
	}

	render() {
		const currentTourStep = this.props.steps.filter(step => step.step === this.props.step)[0];
		if (!this.props.active || !currentTourStep) {
			return <span />;
		}
		const position = this.getStepPosition(currentTourStep.selector, this.props.style.width, this.props.style.height);
		const style = Object.assign({}, this.props.style);
		const arrow = this.props.arrow || this.getArrow(position.positioned, this.props.style.width, this.props.style.height);

		let extraButtonProps = {};
		if (this.props.buttonStyle) {
			extraButtonProps.style = this.props.buttonStyle;
		}

		const nextButton = this.props.step !== this.props.steps.length ?
			<TourButton onClick={() => this.props.onNext(this.props.step + 1)} {...extraButtonProps} className="react-user-tour-next-button">{this.props.nextButtonText}</TourButton> : "";

		const backButton = this.props.step !== 1 ?
			<TourButton onClick={() => this.props.onBack(this.props.step - 1)} {...extraButtonProps} className="react-user-tour-back-button">{this.props.backButtonText}</TourButton> : "";

		const doneButton = this.props.step === this.props.steps.length ?
			<TourButton onClick={() => this.props.onCancel()} {...extraButtonProps} className="react-user-tour-done-button">{this.props.doneButtonText}</TourButton> : "";
		let tourButtonContainer;
		if (!this.props.hideButtons) {
			tourButtonContainer = (
				<div className="react-user-tour-button-container">
					{nextButton}
					{doneButton}
					{backButton}
				</div>
			);
		}

		const xStyle = {
			"float": "right",
			"cursor": "pointer",
			"paddingRight": 10,
			"paddingTop": 10
		};

		return (
			<div className="react-user-tour-container">
				<Motion style={{x: spring(position.left), y: spring(position.top)}}>
					{({x, y}) =>
						<div style={Object.assign({}, style, {transform: `translate3d(${x}px, ${y}px, 0)`})}>
							{arrow}
							<span style={xStyle} onClick={this.props.onCancel}>Close</span>
							{currentTourStep.title}
							{currentTourStep.body}
							{tourButtonContainer}
						</div>
					}
				</Motion>
			</div>
		);
	}
}

ReactUserTour.defaultProps = {
	style: {
		height: 100,
		width: 300,
		position: "absolute",
		zIndex: 9999,
		backgroundColor: "#fff",
		color: "#494949",
		boxShadow: "0 6px 8px 0 rgba(0, 0, 0, 0.24)"
	},
	onCancel: () => {},
	onNext: () => {},
	onBack: () => {},
	nextButtonText: "Next",
	backButtonText: "Back",
	doneButtonText: "Done",
	hideButtons: false
};
