const positions = {
	right: ({position, horizontalOffset}) => {
		return {
			left: position.right + horizontalOffset,
			top: position.top + window.pageYOffset,
			positioned: "right"
		};
	},
	left: ({position, tourElWidth, horizontalOffset}) => {
		return {
			left: (position.left - horizontalOffset) - tourElWidth,
			top: position.top + window.pageYOffset,
			positioned: "left"
		};
	},
	top: ({position, tourElHeight, arrowSize, horizontalOffset}) => {
		return {
			left: position.left,
			top: (position.top + window.pageYOffset) - tourElHeight - arrowSize,
			positioned: "top"
		};
	},
	topLeft: ({position, tourElWidth, tourElHeight, arrowSize, horizontalOffset}) => {
		return {
			left: (position.left + horizontalOffset) - tourElWidth,
			top: (position.top + window.pageYOffset) - tourElHeight - arrowSize,
			positioned: "topLeft"
		};
	},
	bottom: ({position, arrowSize, offsetHeight, horizontalOffset}) => {
		return {
			left: position.left,
			top: (position.top + window.pageYOffset) + offsetHeight + arrowSize,
			positioned: "bottom"
		};
	},
	bottomLeft: ({position, tourElWidth, arrowSize, offsetHeight, horizontalOffset}) => {
		return {
			left: (position.left + horizontalOffset) - tourElWidth,
			top: (position.top + window.pageYOffset) + offsetHeight + arrowSize,
			positioned: "bottomLeft"
		};
	}
}

export default positions;
