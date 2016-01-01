const positions = {
	right: ({position}) => {
		return {
			left: position.right + 25,
			top: position.top + window.pageYOffset,
			positioned: "right"
		};
	},
	left: ({position, tourElWidth}) => {
		return {
			left: (position.left - 25) - tourElWidth,
			top: position.top + window.pageYOffset,
			positioned: "left"
		};
	},
	top: ({position, tourElHeight, arrowSize}) => {
		return {
			left: position.left,
			top: (position.top + window.pageYOffset) - tourElHeight - arrowSize,
			positioned: "top"
		};
	},
	topLeft: ({position, tourElWidth, tourElHeight, arrowSize}) => {
		return {
			left: (position.left + 25) - tourElWidth,
			top: (position.top + window.pageYOffset) - tourElHeight - arrowSize,
			positioned: "topLeft"
		};
	},
	bottom: ({position, arrowSize, offsetHeight}) => {
		return {
			left: position.left,
			top: (position.top + window.pageYOffset) + offsetHeight + arrowSize,
			positioned: "bottom"
		};
	},
	bottomLeft: ({position, tourElWidth, arrowSize, offsetHeight}) => {
		return {
			left: (position.left + 25) - tourElWidth,
			top: (position.top + window.pageYOffset) + offsetHeight + arrowSize,
			positioned: "bottomLeft"
		};
	}
}

export default positions;
