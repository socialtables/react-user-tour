import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import test from "tape-catch";
import sinon from "sinon";

import Tour from "../dist/index";

const onNext = sinon.stub();
const onBack = sinon.stub();
const onCancel = sinon.stub();

const props = {
	active: true,
	step: 1,
	steps: [
		{
			step: 1,
			selector: ".my-fun-website",
			title: <div>My Web</div>,
			message: <div>Site</div>
		},
		{
			step: 2,
			selector: ".my-website-is-amazing",
			title: <div>Wow</div>,
			message: <div>so good</div>
		},
		{
			step: 3,
			selector: ".my-website-is-amazing-yeah-it-is",
			title: <div>Wow</div>,
			message: <div>so good</div>
		}
	],
	onNext: onNext,
	onBack: onBack,
	onCancel: onCancel
}

const throwNoClass = (dom, className) => {
	TestUtils.findRenderedDOMComponentWithClass(dom, className);
}

const node = document.createElement("div");
const renderComponent = (component) => ReactDOM.render(component, node);


test("is React Component", (assert) => {
	const component = <Tour {...props} />;
	assert.ok(TestUtils.isElement(component), "ReactUserTour is a react component");
	assert.end();
});

test("should return a single span if active is false", (assert) => {
	const component = <Tour {...props} active={false} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithTag(result, "span"), "when active is a false a span is returned");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should have the container className if active is true", (assert) => {
	const component = <Tour {...props} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-container"), "container element exists");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should have a next button but no back or done button when step is 1 and there are 3 steps", (assert) => {
	const component = <Tour {...props} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button"), "nexxt button exists");
	assert.throws(() => throwNoClass(result, "react-user-tour-back-button"), /found: 0/);
	assert.throws(() => throwNoClass(result, "react-user-tour-done-button"), /found: 0/);
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should have a next button and a back button but no done button when step is 2 and there are 3 steps", (assert) => {
	const component = <Tour {...props} step={2} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button"), "next button exists");
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button"), "back button exists");
	assert.throws(() => throwNoClass(result, "react-user-tour-done-button"), /found: 0/);
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should have a back button and a done button but no next button when step is 3 and there are 3 steps", (assert) => {
	const component = <Tour {...props} step={3} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-done-button"), "done button exists");
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button"), "back button exists");
	assert.throws(() => throwNoClass(result, "react-user-tour-next-button"), /found: 0/);
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should return a single span if the passed in step does not exist in the steps prop", (assert) => {
	const component = <Tour {...props} step={10} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithTag(result, "span"), "returns span");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should have a default arrow that will point to selected dom class if no arrow prop is passed in", (assert) => {
	const component = <Tour {...props} step={3} />
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-arrow"), "arrow exists");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should not have a default arrow that will point to selected dom class if an arrow prop is passed in", (assert) => {
	const component = <Tour {...props} step={3} arrow={<span />}/>
	const result = renderComponent(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-arrow"));
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should call render custom react component provided as arrow property", (assert) => {
	const component = <Tour {...props} step={3} arrow={<span className="my-custom-arrow"/>}/>
	const result = renderComponent(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-arrow"));
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "my-custom-arrow"), "arrow exists");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should call function provided as arrow property and render element returned by it", (assert) => {
	const component = <Tour {...props} step={3} arrow={() => <span className="my-custom-arrow"/>}/>
	const result = renderComponent(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-arrow"));
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "my-custom-arrow"), "arrow exists");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("should not any buttons or the associated button container if hideButtons is true", (assert) => {
	const component = <Tour {...props} step={3} hideButtons={true}/>
	const result = renderComponent(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-button-container"));
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("onNext should be called once when the user clicks the next button", (assert) => {
	const component = <Tour {...props} />
	const result = renderComponent(component);
	const nextButton = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button");
	TestUtils.Simulate.click(nextButton);
	assert.ok(onNext.calledOnce, "onNext function called once");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("onBack should be called once when the user clicks the back button", (assert) => {
	const component = <Tour {...props} step={2}/>
	const result = renderComponent(component);
	const backButton = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button");
	TestUtils.Simulate.click(backButton);
	assert.ok(onBack.calledOnce, "onBack function called once");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("onCancel should be called once when the user clicks the done button", (assert) => {
	const component = <Tour {...props} step={3}/>
	const result = renderComponent(component);
	const doneButton = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-done-button");
	TestUtils.Simulate.click(doneButton);
	assert.ok(onCancel.calledOnce, "onCancel called once");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("the close button should be there if hideClose is not true", (assert) => {
	const component = <Tour {...props} step={3}/>
	const result = renderComponent(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-close"), "close button exists");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
});

test("the close button should not be there if hideClose is true", (assert) => {
	const component = <Tour {...props} step={3}/>
	const result = renderComponent(component);
	assert.throws(() => throwNoClass("react-user-tour-close"));
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
})

test("user can assign custom style to a button", (assert) => {
	const component = <Tour {...props} buttonStyle={{color: "red"}} />
	const result = renderComponent(component);
	const button = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button");
	assert.ok(button.style.color === "red", "button color is red");
	ReactDOM.unmountComponentAtNode(node);
	assert.end();
})
