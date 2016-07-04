import React, { Component } from "react";
import {Motion, spring} from "react-motion";
import TourButton from "./tour-button";
import TourButtonContainer from "./tour-button-container";
import Arrow from "./arrow";
import positions from "./helpers/position-helpers";
import * as viewBoxHelpers from "./helpers/viewbox-helpers";
import scrollToPosition from "./helpers/scroll-to-position";

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

	getStepPosition(selector, tourElWidth, tourElHeight, overridePos, tourElHorizontalOffset = 25, tourElVerticalOffset = 0) {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		const el = document.querySelector(selector);
		if (el) {
			let position = el ? el.getBoundingClientRect() : {};
			const isElementBelowViewBox = viewBoxHelpers.isElementBelowViewBox(windowHeight, position.top);
			const isElementAboveViewBox = viewBoxHelpers.isElementBelowViewBox(position.bottom);
			if (isElementBelowViewBox) {
				position = scrollToPosition(el, position.bottom);
			}
			else if (isElementAboveViewBox) {
				position = scrollToPosition(el, window.pageYOffset + position.top);
			}
			const shouldPositionLeft = viewBoxHelpers.shouldPositionLeft(windowWidth, position.left);
			const shouldPositionAbove = viewBoxHelpers.shouldPositionAbove(windowHeight, position.bottom);
			const shouldPositionBelow = viewBoxHelpers.shouldPositionBelow(position.top);
			let elPos;
			if (overridePos && positions[overridePos]) {
				elPos = positions[overridePos]({
					position,
					tourElWidth,
					tourElHeight,
					arrowSize: this.props.arrowSize,
					offsetHeight: el.offsetHeight,
					horizontalOffset: tourElHorizontalOffset
				});
			}
			else if (shouldPositionLeft && !shouldPositionAbove && !shouldPositionBelow) {
				elPos = positions.left({
					position,
					tourElWidth,
					horizontalOffset: tourElHorizontalOffset
				});
			}
			else if (shouldPositionAbove) {
				elPos = shouldPositionLeft ? positions.topLeft({
					position,
					tourElWidth,
					tourElHeight,
					arrowSize: this.props.arrowSize,
					horizontalOffset: tourElHorizontalOffset
				}) :
				positions.top({
					position,
					tourElHeight,
					arrowSize: this.props.arrowSize,
					horizontalOffset: tourElHorizontalOffset
				});
			}
			else if (shouldPositionBelow) {
				elPos = shouldPositionLeft ? positions.bottomLeft({
					position,
					tourElWidth,
					arrowSize: this.props.arrowSize,
					offsetHeight: el.offsetHeight,
					horizontalOffset: tourElHorizontalOffset
				}) :
				positions.bottom({
					position,
					arrowSize: this.props.arrowSize,
					offsetHeight: el.offsetHeight,
					horizontalOffset: tourElHorizontalOffset
				});
			}
			else {
				elPos = positions.right({
					position,
					horizontalOffset: tourElHorizontalOffset
				});
			}

			elPos.top += tourElVerticalOffset;

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
			currentTourStep.position,
			currentTourStep.horizontalOffset,
			currentTourStep.verticalOffset
		);
		const style = {...this.props.style};
		const useCustomArrow = (customArrow) =>
			"function" === typeof customArrow ?
				customArrow({
					position: position.positioned,
					width: this.props.style.width,
					height: this.props.style.height,
					size: this.props.arrowSize,
					color: this.props.arrowColor
				})
				: customArrow;
		const arrow = (
			this.props.arrow ?
				useCustomArrow(this.props.arrow)
			: <Arrow
				position={position.positioned}
				width={this.props.style.width}
				height={this.props.style.height}
				size={this.props.arrowSize}
				color={this.props.arrowColor}
			/>
		);

		const extraButtonProps = this.props.buttonStyle ? {style: this.props.buttonStyle} : {};

		const nextButton = (
			this.props.step !== this.props.steps.length ?
				<TourButton
					onClick={() => this.props.onNext(this.props.step + 1)}
					onTouchTap={() => this.props.onNext(this.props.step + 1)}
					{...extraButtonProps}
					className="react-user-tour-next-button">
						{this.props.nextButtonText}
				</TourButton> : ""
		);

		const backButton = (
			this.props.step !== 1 ?
				<TourButton
					onClick={() => this.props.onBack(this.props.step - 1)}
					onTouchTap={() => this.props.onBack(this.props.step - 1)}
					{...extraButtonProps}
					className="react-user-tour-back-button">
						{this.props.backButtonText}
				</TourButton> : ""
		);

		const doneButton = (
			this.props.step === this.props.steps.length ?
				<TourButton
					onClick={() => this.props.onCancel()}
					onTouchTap={() => this.props.onCancel}
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
					onClick={this.props.onCancel}
					onTouchTap={this.props.onCancel}>
						{this.props.closeButtonText}
				</span> : ""
		);

		return (
			<div className="react-user-tour-container">
				<Motion style={{x: spring(position.left), y: spring(position.top)}}>
					{({x, y}) =>

						<div style={{...style, transform: `translate3d(${x}px, ${y}px, 0)`}}>
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
	closeButtonText: "Close",
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
