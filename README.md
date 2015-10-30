# React User Tour

A component that allows you to give a user a guided tour around your application

[![Circle CI](https://circleci.com/gh/socialtables/react-user-tour.svg?style=svg&circle-token=914785eeca4d096e0303a857f52f20a646013124)](https://circleci.com/gh/socialtables/react-user-tour)

### Install
` npm install react-user-tour`

###  Props

#### `active`
A boolean value representing whether or not the tour should currently be displayed

#### `step`
An integer representing the current active step of the tour

#### `onNext`
function that fires when user clicks the Next button. Receives the next step integer as a callback. For example, if current step is 1 and user clicks the Next button, onNext(2) will be called.

#### `onBack`
function that fires when user clicks the Back button. Receives the previous step integer as a callback. For example, if current step is 2 and user clicks the Back button, onBack(1) will be called.

#### `onCancel`
function that fires when user clicks the X button or the Done Button.

#### `steps`
An array of steps. Each step object takes: step (integer), selector (css selector to be passed to document.querySelector()), title (a react element representing the header of the current step), and body (a react element representing the main body message of the tour step).

#### `style`
Optional style object.

#### `buttonStyle`
Optional style object for buttons displayed on component.

#### `buttonContainerStyle`
Optional style object for the container div around the buttons.

#### `arrow`
We provide an arrow that points to the selector, but you may optionally pass in your own React element in the place of the arrow provided.

#### `arrowSize`
If you choose to use the provided arrow, you can set the pixel size here with an integer value.

#### `arrowColor`
If you choose to use the provided arrow, you can set the color here by passing in a hex value.

#### `nextButtonText`
Text that will appear on the button that moves the tour forward. Defaults to `Next`

#### `backButtonText`
Text that will appear on the button that moves the tour backwards. Defaults to `Back`

#### `doneButtonText`
Text that will appear on the button that finishes the tour. Defaults to `Done`

#### `hideButtons`
Boolean to disable the showing of next/back/done buttons. Set this to true if you want to insert your own buttons in the body.

#### `hideClose`
Boolean to disable the showing of the close text in the upper left of the component. Set this to true if you want to insert your own close functionality or if you would like to disable the ability for the user to prematurely exit the tour.

### Use

```js
import React, { Component } From "react";
import Tour from "react-user-tour";
export default class UserTour extends Component {
	constructor() {
		super();
		this.state = {
			isTourActive: true,
			tourStep: 1
		};
	}
	render() {
		return (
			<div>
				<Tour
					active={this.state.isTourActive}
					step={this.state.tourStep}
					onNext={(step) => this.setState({tourStep: step})}
					onBack={(step) => this.setState({tourStep: step})}
					onCancel={() => this.setState({isTourActive: false})}
					steps={[
						{
							step: 1,
							selector: ".my-fun-website",
							title: <div style={tourTitleStyle}>My Web</div>,
							body: <div style={tourMessageStyle}>Site</div>
						},
						{
							step: 2,
							selector: ".my-website-is-amazing",
							title: <div style={tourTitleStyle}>Wow</div>,
							body: <div style={tourMessageStyle}>so good</div>
						}
					]}
				/>
			</div>
		);
	}
}
```

- - -

Copyright (C) 2015 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
