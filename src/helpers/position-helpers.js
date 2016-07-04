const positions = {
	right: ({position, margin}) => {
		return {
			left: position.right + margin,
			top: position.top + window.pageYOffset,
			positioned: "right"
		};
	},
	left: ({position, tourElWidth, margin}) => {
		return {
			left: (position.left - margin) - tourElWidth,
			top: position.top + window.pageYOffset,
			positioned: "left"
		};
	},
	top: ({position, tourElHeight, arrowSize, margin}) => {
		return {
			left: position.left,
			top: (position.top + window.pageYOffset) - tourElHeight - arrowSize,
			positioned: "top"
		};
	},
	topLeft: ({position, tourElWidth, tourElHeight, arrowSize, margin}) => {
		return {
			left: (position.left + margin) - tourElWidth,
			top: (position.top + window.pageYOffset) - tourElHeight - arrowSize,
			positioned: "topLeft"
		};
	},
	bottom: ({position, arrowSize, offsetHeight, margin}) => {
		return {
			left: position.left,
			top: (position.top + window.pageYOffset) + offsetHeight + arrowSize,
			positioned: "bottom"
		};
	},
	bottomLeft: ({position, tourElWidth, arrowSize, offsetHeight, margin}) => {
		return {
			left: (position.left + margin) - tourElWidth,
			top: (position.top + window.pageYOffset) + offsetHeight + arrowSize,
			positioned: "bottomLeft"
		};
	}
}

export default positions;
