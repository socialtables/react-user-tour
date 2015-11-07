import React, { Component } from "react";
import {Motion, spring} from "react-motion";
import scrollTo from "scroll-to";

import TourButton from "./tour-button";
import TourButtonContainer from "./tour-button-container";
import Arrow from "./arrow";
import positions from "./position-helpers";

export default class ReactUserTour extends Component {

	constructor(props) {
		super(props);
		this.prevPos = {
			top: 0, 
			left: 0
		};
		this.getStepPosition = this.getStepPosition.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return this.props.step !== nextProps.step || this.props.active !== nextProps.active;
	}

	getStepPosition(selector, tourElWidth, tourElHeight, overridePos) {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		const el = document.querySelector(selector);
		if (el) {
			let position = el ? el.getBoundingClientRect() : {};
			const isElementCompletelyBelowViewBox = windowHeight - position.top < 0;
			const isElementCompletelyAboveViewBox = position.bottom < 0;
			if (isElementCompletelyBelowViewBox) {
				scrollTo(0, position.bottom, {
				  ease: "out-sine",
				  duration: 500
				});
				position = el.getBoundingClientRect();
			}
			else if (isElementCompletelyAboveViewBox) {
				scrollTo(0, window.pageYOffset + position.top, {
				  ease: "out-sine",
				  duration: 500
				});
				position = el.getBoundingClientRect();
			}
			const shouldPositionLeft = windowWidth - position.left < (windowWidth / 2);
			const shouldPositionAbove = windowHeight - position.bottom < 100;
			const shouldPositionBelow = position.top < 50;
			let elPos;
			if (overridePos && positions[overridePos]) {
				elPos = positions[overridePos]({
					position,
					tourElWidth,
					tourElHeight,
					arrowSize: this.props.arrowSize,
					offsetHeight: el.offsetHeight
				});
			}
			else if (shouldPositionLeft && !shouldPositionAbove && !shouldPositionBelow) {
				elPos = positions.left({position, tourElWidth});
			}
			else if (shouldPositionAbove) {
				elPos = shouldPositionLeft ? positions.topLeft({
					position,
					tourElWidth,
					tourElHeight,
					arrowSize: this.props.arrowSize
				}) :
				positions.top({
					position,
					tourElHeight,
					arrowSize: this.props.arrowSize
				});
			}
			else if (shouldPositionBelow) {
				elPos = shouldPositionLeft ? positions.bottomLeft({
					position,
					tourElWidth,
					arrowSize: this.props.arrowSize,
					offsetHeight: el.offsetHeight
				}) :
				positions.bottom({
					position,
					arrowSize: this.props.arrowSize,
					offsetHeight: el.offsetHeight
				});
			}
			else {
				elPos = positions.right({position});
			}
			this.prevPos = elPos;
			return elPos;
		}
		else {
			return this.prevPos;
		}
	}

	render() {
		const currentTourStep = this.props.steps.filter(step => step.step === this.props.step)[0];
		if (!this.props.active || !currentTourStep) {
			return <span />;
		}
		const position = this.getStepPosition(
			currentTourStep.selector,
			this.props.style.width,
			this.props.style.height,
			currentTourStep.position
		);
		const style = Object.assign({}, this.props.style);
		const arrow = (
			this.props.arrow || 
			<Arrow
				position={position.positioned}
				width={this.props.style.width}
				height={this.props.style.height}
				size={this.props.arrowSize}
				color={this.props.arrowColor}
			/>
		);
	
		const extraButtonProps = this.props.buttonStyle ? {style: this.props.buttonContainerStyle} : {};

		const nextButton = (
			this.props.step !== this.props.steps.length ?
				<TourButton 
					onClick={() => this.props.onNext(this.props.step + 1)} 
					{...extraButtonProps} 
					className="react-user-tour-next-button">
						{this.props.nextButtonText}
				</TourButton> : ""
		);

		const backButton = (
			this.props.step !== 1 ?
				<TourButton 
					onClick={() => this.props.onBack(this.props.step - 1)} 
					{...extraButtonProps} 
					className="react-user-tour-back-button">
						{this.props.backButtonText}
				</TourButton> : ""
		);

		const doneButton = (
			this.props.step === this.props.steps.length ?
				<TourButton 
					onClick={() => this.props.onCancel()} 
					{...extraButtonProps} 
					className="react-user-tour-done-button">
						{this.props.doneButtonText}
				</TourButton> : ""
		);

		const tourButtonContainer = (
			!this.props.hideButtons ?
				<TourButtonContainer style={this.props.buttonContainerStyle}>
					{nextButton}
					{doneButton}
					{backButton}
				</TourButtonContainer> : ""
		);

		const xStyle = {
			"float": "right",
			"cursor": "pointer",
			"paddingRight": 10,
			"paddingTop": 10
		};

		const closeButton = (
			!this.props.hideClose ? 
				<span className="react-user-tour-close" 
					style={xStyle} 
					onClick={this.props.onCancel}>
						Close
				</span> : ""
		);
		
		return (
			<div className="react-user-tour-container">
				<Motion style={{x: spring(position.left), y: spring(position.top)}}>
					{({x, y}) =>
						<div style={Object.assign({}, style, {transform: `translate3d(${x}px, ${y}px, 0)`})}>
							{arrow}
							{closeButton}
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
		height: 150,
		width: 350,
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
	buttonContainerStyle: {
		position: "absolute",
		bottom: 10,
		right: 0
	},
	hideButtons: false,
	hideClose: false,
	arrowColor: "#fff",
	arrowSize: 15
};
