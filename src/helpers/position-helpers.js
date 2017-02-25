const positions = {
	right: ({position, margin}) => {
		return {
			left: Math.floor(position.right + margin),
			top: Math.floor(position.top + window.pageYOffset),
			positioned: "right"
		};
	},
	left: ({position, tourElWidth, margin}) => {
		return {
			left: Math.floor((position.left - margin) - tourElWidth),
			top: Math.floor(position.top + window.pageYOffset),
			positioned: "left"
		};
	},
	top: ({position, tourElHeight, arrowSize, margin}) => {
		return {
			left: Math.floor(position.left),
			top: Math.floor((position.top + window.pageYOffset) - tourElHeight - arrowSize),
			positioned: "top"
		};
	},
	topLeft: ({position, tourElWidth, tourElHeight, arrowSize, margin}) => {
		return {
			left: Math.floor((position.left + margin) - tourElWidth),
			top: Math.floor((position.top + window.pageYOffset) - tourElHeight - arrowSize),
			positioned: "topLeft"
		};
	},
	bottom: ({position, arrowSize, offsetHeight, margin}) => {
		return {
			left: Math.floor(position.left),
			top: Math.floor((position.top + window.pageYOffset) + offsetHeight + arrowSize),
			positioned: "bottom"
		};
	},
	bottomLeft: ({position, tourElWidth, arrowSize, offsetHeight, margin}) => {
		return {
			left: Math.floor((position.left + margin) - tourElWidth),
			top: Math.floor((position.top + window.pageYOffset) + offsetHeight + arrowSize),
			positioned: "bottomLeft"
		};
	}
}

export default positions;
