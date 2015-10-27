# React User Tour

A component that allows you to give a user a guided tour around your application

### Install
` npm install react-user-tour`

###  Props

#### `active`
A boolean value representing whether or not the tour should currently be displayed

#### `step`
An integer representing the current active step of the tour

#### `onNext`
function that fires when user clicks the Next button. Recieves the next step integer as a callback. For example if current step is 1 and user clicks the Next button onNext(2) will be called.

#### `onBack`
function that fires when user clicks the Back button. Recieves the previous step integer as a callback. For example if current step is 2 and user clicks the Back button onBack(1) will be called.

#### `onCancel`
function that fires when user clicks the X button or the Done Button.

#### `steps`
An array of steps. takes step(integer), selector(css selector to be passed to document.querySelector()), title, a react element representing the header of the current step, message, a react element representing the main body mesasge of the tour step.

#### `style`
Optional style object.

#### `buttonStyle`
Optional style object for buttons displayed on component.

#### `buttonStyle`
Optional style object for buttons displayed on component.

#### `arrow`
We provide an arrow that points to the selector, but you may optionally pass in your own React element in the place of the arrow provided.
### Use

```js
import React, { Component } From "react";
import Tour from "react-user-tour";
export default class ShowImage extends Component {
	render() {
		return (
			<div>
				<Tour
					active={isTourActive}
					step={this.state.tourStep}
					onNext={(step) => this.setState({tourStep: step})}
					onBack={(step) => this.setState({tourStep: step})}
					onCancel={() => this.setState({isTourActive: false})}
					steps={[
						{
							step: 1,
							selector: ".my-fun-website",
							title: <div style={tourTitleStyle}>My Web</div>,
							message: <div style={tourMessageStyle}>Site</div>
						},
						{
							step: 2,
							selector: ".my-website-is-amazing",
							title: <div style={tourTitleStyle}>Wow</div>,
							message: <div style={tourMessageStyle}>so good</div>
						}
					]}
				/>
			</div>
		);
	}
}
```
