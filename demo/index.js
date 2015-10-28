import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tour from "../dist/index";

class Demo extends Component {
	constructor() {
		super();
		this.state = {
			isTourActive: false,
			tourStep: 1
		}
	}
	componentDidMount() {
		this.setState({
			isTourActive: true
		});
	}
 	render() {
		const tourTitleStyle = {
			fontWeight: 700,
			fontSize: 16,
			paddingTop: 10,
			paddingBottom: 10,
			paddingLeft: 10
		};

		const tourMessageStyle = {
			fontSize: 12,
			paddingLeft: 10
		};
		return (
			<div>
				<div
					style={{width: 200, height: 25, left: 0, top: 0, position: "absolute", backgroundColor: "blanchedalmond", textAlign: "center", paddingTop: 10, fontWeight: 700, cursor: "pointer"}}
					onClick={() => this.setState({isTourActive: true, tourStep: 1})}
				>
					Restart Tour
				</div>
				<div
					style={{width: 200, height: 100, left: "60%", top: 0, position: "absolute", backgroundColor: "red"}}
					className="stop-1"
				/>
				<div
					style={{width: 100, height: 200, left: 0, top: "40%", position: "absolute", backgroundColor: "blue"}}
					className="stop-2"
				/>
				<div
					style={{width: 200, height: 100, left: "50%", bottom: 0, position: "absolute", backgroundColor: "yellow"}}
					className="stop-3"
				/>
				<div
					style={{width: 200, height: 100, right: 0, top: "30%", position: "absolute", backgroundColor: "green"}}
					className="stop-4"
				/>
				<div
					style={{width: 200, height: 100, left: "40%", top: "34%", position: "absolute", backgroundColor: "orange"}}
					className="stop-5"
				/>
				<Tour
					active={this.state.isTourActive}
					step={this.state.tourStep}
					onNext={(step) => this.setState({tourStep: step})}
					onBack={(step) => this.setState({tourStep: step})}
					onCancel={() => this.setState({isTourActive: false})}
					steps={[
						{
							step: 1,
							selector: ".stop-1",
							title: <div style={tourTitleStyle}>My Web</div>,
							message: <div style={tourMessageStyle}>Site</div>
						},
						{
							step: 2,
							selector: ".stop-2",
							title: <div style={tourTitleStyle}>Wow</div>,
							message: <div style={tourMessageStyle}>so good</div>
						},
						{
							step: 3,
							selector: ".stop-3",
							title: <div style={tourTitleStyle}>Wowow</div>,
							message: <div style={tourMessageStyle}>so good, i love it.</div>
						},
						{
							step: 4,
							selector: ".stop-4",
							title: <div style={tourTitleStyle}>Another</div>,
							message: <div style={tourMessageStyle}>your site is very good.</div>
						},
						{
							step: 5,
							selector: ".stop-5",
							title: <div style={tourTitleStyle}>Everyone Off</div>,
							message: <div style={tourMessageStyle}>final stop, hope you enjoyed the tour.</div>
						}


					]}
				/>
			</div>
		);
	}
}

ReactDOM.render(<Demo />, document.getElementById("app"));
