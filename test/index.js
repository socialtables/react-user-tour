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

test("is React Component", (assert) => {
	const component = <Tour {...props} />

	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.isElement(component), "ReactUserTour is a react component");
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should return a single span if active is false", (assert) => {
	const component = <Tour {...props} active={false} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithTag(result, "span"));
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should have the container className if active is true", (assert) => {
	const component = <Tour {...props} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-container"));
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should have a next button but no back or done button when step is 1 and there are 3 steps", (assert) => {
	const component = <Tour {...props} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button"));
	assert.throws(() => throwNoClass(result, "react-user-tour-back-button"), /found: 0/);
	assert.throws(() => throwNoClass(result, "react-user-tour-done-button"), /found: 0/);
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should have a next button and a back button but no done button when step is 2 and there are 3 steps", (assert) => {
	const component = <Tour {...props} step={2} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button"));
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button"));
	assert.throws(() => throwNoClass(result, "react-user-tour-done-button"), /found: 0/);
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should have a back button and a done button but no next button when step is 3 and there are 3 steps", (assert) => {
	const component = <Tour {...props} step={3} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-done-button"));
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button"));
	assert.throws(() => throwNoClass(result, "react-user-tour-next-button"), /found: 0/);
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should return a single span if the passed in step does not exist in the steps prop", (assert) => {
	const component = <Tour {...props} step={10} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithTag(result, "span"));
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should have a default arrow that will point to selected dom class if no arrow prop is passed in", (assert) => {
	const component = <Tour {...props} step={3} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-arrow"));
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should not have a default arrow that will point to selected dom class if an arrow prop is passed in", (assert) => {
	const component = <Tour {...props} step={3} arrow={<span />}/>
	const result = TestUtils.renderIntoDocument(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-arrow"));
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("should not any buttons or the associated button container if hideButtons is true", (assert) => {
	const component = <Tour {...props} step={3} hideButtons={true}/>
	const result = TestUtils.renderIntoDocument(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-button-container"));
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("onNext should be called once when the user clicks the next button", (assert) => {
	const component = <Tour {...props} />
	const result = TestUtils.renderIntoDocument(component);
	const nextButton = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button");
	TestUtils.Simulate.click(nextButton);
	assert.ok(onNext.calledOnce);
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("onBack should be called once when the user clicks the back button", (assert) => {
	const component = <Tour {...props} step={2}/>
	const result = TestUtils.renderIntoDocument(component);
	const backButton = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button");
	TestUtils.Simulate.click(backButton);
	assert.ok(onBack.calledOnce);
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});

test("onCancel should be called once when the user clicks the done button", (assert) => {
	const component = <Tour {...props} step={3}/>
	const result = TestUtils.renderIntoDocument(component);
	const doneButton = TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-done-button");
	TestUtils.Simulate.click(doneButton);
	assert.ok(onCancel.calledOnce);
	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(result));
	assert.end();
});





