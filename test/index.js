import React from "react";
import TestUtils from "react-addons-test-utils";
import test from "tape-catch";

import Tour from "../dist/index";
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
	]

}
const throwNoClass = (dom, className) => {
	TestUtils.findRenderedDOMComponentWithClass(dom, className);
}

test("is React Component", (assert) => {
	const component = <Tour {...props} />

	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.isElement(component), "ReactUserTour is a react component");
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should return a single span if active is false", (assert) => {
	const component = <Tour {...props} active={false} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithTag(result, "span"));
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should have the container className if active is true", (assert) => {
	const component = <Tour {...props} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-container"));
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should have a next button but no back or done button when step is 1 and there are 3 steps", (assert) => {
	const component = <Tour {...props} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button"));
	assert.throws(() => throwNoClass(result, "react-user-tour-back-button"), /found: 0/);
	assert.throws(() => throwNoClass(result, "react-user-tour-done-button"), /found: 0/);
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should have a next button and a back button but no done button when step is 2 and there are 3 steps", (assert) => {
	const component = <Tour {...props} step={2} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-next-button"));
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button"));
	assert.throws(() => throwNoClass(result, "react-user-tour-done-button"), /found: 0/);
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should have a back button and a done button but no next button when step is 3 and there are 3 steps", (assert) => {
	const component = <Tour {...props} step={3} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-done-button"));
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-back-button"));
	assert.throws(() => throwNoClass(result, "react-user-tour-next-button"), /found: 0/);
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should return a single span if the passed in step does not exist in the steps prop", (assert) => {
	const component = <Tour {...props} step={10} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithTag(result, "span"));
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should have a default arrow that will point to selected dom class if no arrow prop is passed in", (assert) => {
	const component = <Tour {...props} step={3} />
	const result = TestUtils.renderIntoDocument(component);
	assert.ok(TestUtils.findRenderedDOMComponentWithClass(result, "react-user-tour-arrow"));
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});

test("should not have a default arrow that will point to selected dom class if an arrow prop is passed in", (assert) => {
	const component = <Tour {...props} step={3} arrow={<span />}/>
	const result = TestUtils.renderIntoDocument(component);
	assert.throws(() => throwNoClass(result, "react-user-tour-arrow"));
	React.unmountComponentAtNode(React.findDOMNode(result));
	assert.end();
});
