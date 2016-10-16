import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tour from "../dist/index";

class Demo extends Component {
	constructor() {
		super();
		this.state = {
			isTourActive: false,
			tourStep: 5
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
				<div
					style={{width: 200, height: 100, left: "120%", top: "19%", position: "absolute", backgroundColor: "orange"}}
					className="stop-6"
				/>
				<p style={{color: "white"}}>
				Dolores phaedrum pri eu. Ex sit quot commune, ut eam error elitr scribentur. Quis reprimique in eos, eum intellegat persequeris te, no mei quidam reformidans. Fugit dignissim no qui, ut equidem scaevola has. Per odio facilisis ei, sed tale ignota quodsi id.

				Te omnes saperet liberavisse eos, etiam oratio eam no, te tation tritani cotidieque nec. Suavitate interpretaris ei sed. Ei viderer scriptorem usu, cu mei numquam utroque. Vim eu commodo euripidis. Cetero alterum necessitatibus sed ei, dicunt aliquid definitiones et vim.

				Assueverit comprehensam duo ad. Usu nostro omnium ocurreret ad, vel ut quaeque singulis, ne cum adhuc partem. Te aperiam moderatius nec, veri dicunt voluptua id sea. At vix epicuri referrentur, et harum ceteros quaerendum vis. Est ferri adhuc equidem in, eu graeco feugiat hendrerit duo, malis accusata prodesset te duo. Eu erat corpora disputationi vel, pro soleat ceteros praesent no.

				Ceteros detracto vix ex. Cu oblique prompta inciderint vix, dicat ponderum inimicus no pri. Ne fugit audire eam, duo error soluta imperdiet at. Ius et habemus adversarium. Scripta blandit appareat ex cum, euismod appareat accusata qui an, mel ut hendrerit intellegam.

				Qui te commune corrumpit tincidunt, nec quot partiendo tincidunt no. Eam discere bonorum ne, paulo perfecto legendos at vis, voluptua accusamus liberavisse id quo. Sit cu noster intellegat. Eam mandamus voluptatum vituperatoribus ex, summo nulla an vix, mea ei molestie postulant imperdiet. No everti numquam tacimates cum, ex aeque tibique intellegat his. Vix et tollit graeco invidunt, minim verterem at pri.

				Essent verear urbanitas quo ne, harum lucilius mnesarchum ad has, verear torquatos ne nam. Vix latine nostrum no, est veritus omnesque ei. Mea ne diceret voluptaria. Eam aliquam postulant in, vis te civibus deterruisset. Eam justo legendos qualisque no. Ea fastidii liberavisse sea, nam eripuit sententiae definiebas et. Te corpora ocurreret similique mei, ne est soleat noster eripuit.

				Eum ea etiam tractatos, mea ut facer labore. Stet dissentiunt in cum. Eirmod consulatu mea ex, id vis nisl maiorum copiosae, pro odio labitur voluptua ex. Ei pri inermis convenire maiestatis, ullum iuvaret minimum in his. Facer maiestatis usu ex. In vel nulla probatus similique.

				Qui oportere sententiae cu, ut nec labores facilisi. At prima legere pertinacia mei, est cu diam viderer. Nam semper mandamus in, ei aliquip voluptua vel. Ad ius falli graece, lorem novum malorum et cum. Ne expetenda constituto constituam vis, te velit interpretaris sea, vis ubique meliore an.

				His prima quodsi scriptorem ad, an ius malis legere nostrum. Illum iudicabit intellegat ea ius. In duo adolescens consequuntur, duo everti patrioque repudiandae eu. At vim epicuri hendrerit conclusionemque, et dicta copiosae pro. Nec brute fabellas theophrastus cu.

				Habeo choro nec in. Prima conclusionemque est ei, ne eam graeco adipisci. Detraxit abhorreant vel te. Dolores deterruisset in quo.

				</p>
				<p style={{color: "white"}}>
				Dolores phaedrum pri eu. Ex sit quot commune, ut eam error elitr scribentur. Quis reprimique in eos, eum intellegat persequeris te, no mei quidam reformidans. Fugit dignissim no qui, ut equidem scaevola has. Per odio facilisis ei, sed tale ignota quodsi id.

				Te omnes saperet liberavisse eos, etiam oratio eam no, te tation tritani cotidieque nec. Suavitate interpretaris ei sed. Ei viderer scriptorem usu, cu mei numquam utroque. Vim eu commodo euripidis. Cetero alterum necessitatibus sed ei, dicunt aliquid definitiones et vim.

				Assueverit comprehensam duo ad. Usu nostro omnium ocurreret ad, vel ut quaeque singulis, ne cum adhuc partem. Te aperiam moderatius nec, veri dicunt voluptua id sea. At vix epicuri referrentur, et harum ceteros quaerendum vis. Est ferri adhuc equidem in, eu graeco feugiat hendrerit duo, malis accusata prodesset te duo. Eu erat corpora disputationi vel, pro soleat ceteros praesent no.

				Ceteros detracto vix ex. Cu oblique prompta inciderint vix, dicat ponderum inimicus no pri. Ne fugit audire eam, duo error soluta imperdiet at. Ius et habemus adversarium. Scripta blandit appareat ex cum, euismod appareat accusata qui an, mel ut hendrerit intellegam.

				Qui te commune corrumpit tincidunt, nec quot partiendo tincidunt no. Eam discere bonorum ne, paulo perfecto legendos at vis, voluptua accusamus liberavisse id quo. Sit cu noster intellegat. Eam mandamus voluptatum vituperatoribus ex, summo nulla an vix, mea ei molestie postulant imperdiet. No everti numquam tacimates cum, ex aeque tibique intellegat his. Vix et tollit graeco invidunt, minim verterem at pri.

				Essent verear urbanitas quo ne, harum lucilius mnesarchum ad has, verear torquatos ne nam. Vix latine nostrum no, est veritus omnesque ei. Mea ne diceret voluptaria. Eam aliquam postulant in, vis te civibus deterruisset. Eam justo legendos qualisque no. Ea fastidii liberavisse sea, nam eripuit sententiae definiebas et. Te corpora ocurreret similique mei, ne est soleat noster eripuit.

				Eum ea etiam tractatos, mea ut facer labore. Stet dissentiunt in cum. Eirmod consulatu mea ex, id vis nisl maiorum copiosae, pro odio labitur voluptua ex. Ei pri inermis convenire maiestatis, ullum iuvaret minimum in his. Facer maiestatis usu ex. In vel nulla probatus similique.

				Qui oportere sententiae cu, ut nec labores facilisi. At prima legere pertinacia mei, est cu diam viderer. Nam semper mandamus in, ei aliquip voluptua vel. Ad ius falli graece, lorem novum malorum et cum. Ne expetenda constituto constituam vis, te velit interpretaris sea, vis ubique meliore an.

				His prima quodsi scriptorem ad, an ius malis legere nostrum. Illum iudicabit intellegat ea ius. In duo adolescens consequuntur, duo everti patrioque repudiandae eu. At vim epicuri hendrerit conclusionemque, et dicta copiosae pro. Nec brute fabellas theophrastus cu.

				Habeo choro nec in. Prima conclusionemque est ei, ne eam graeco adipisci. Detraxit abhorreant vel te. Dolores deterruisset in quo.

				</p>
				<p style={{color: "white"}}>
				Dolores phaedrum pri eu. Ex sit quot commune, ut eam error elitr scribentur. Quis reprimique in eos, eum intellegat persequeris te, no mei quidam reformidans. Fugit dignissim no qui, ut equidem scaevola has. Per odio facilisis ei, sed tale ignota quodsi id.

				Te omnes saperet liberavisse eos, etiam oratio eam no, te tation tritani cotidieque nec. Suavitate interpretaris ei sed. Ei viderer scriptorem usu, cu mei numquam utroque. Vim eu commodo euripidis. Cetero alterum necessitatibus sed ei, dicunt aliquid definitiones et vim.

				Assueverit comprehensam duo ad. Usu nostro omnium ocurreret ad, vel ut quaeque singulis, ne cum adhuc partem. Te aperiam moderatius nec, veri dicunt voluptua id sea. At vix epicuri referrentur, et harum ceteros quaerendum vis. Est ferri adhuc equidem in, eu graeco feugiat hendrerit duo, malis accusata prodesset te duo. Eu erat corpora disputationi vel, pro soleat ceteros praesent no.

				Ceteros detracto vix ex. Cu oblique prompta inciderint vix, dicat ponderum inimicus no pri. Ne fugit audire eam, duo error soluta imperdiet at. Ius et habemus adversarium. Scripta blandit appareat ex cum, euismod appareat accusata qui an, mel ut hendrerit intellegam.

				Qui te commune corrumpit tincidunt, nec quot partiendo tincidunt no. Eam discere bonorum ne, paulo perfecto legendos at vis, voluptua accusamus liberavisse id quo. Sit cu noster intellegat. Eam mandamus voluptatum vituperatoribus ex, summo nulla an vix, mea ei molestie postulant imperdiet. No everti numquam tacimates cum, ex aeque tibique intellegat his. Vix et tollit graeco invidunt, minim verterem at pri.

				Essent verear urbanitas quo ne, harum lucilius mnesarchum ad has, verear torquatos ne nam. Vix latine nostrum no, est veritus omnesque ei. Mea ne diceret voluptaria. Eam aliquam postulant in, vis te civibus deterruisset. Eam justo legendos qualisque no. Ea fastidii liberavisse sea, nam eripuit sententiae definiebas et. Te corpora ocurreret similique mei, ne est soleat noster eripuit.

				Eum ea etiam tractatos, mea ut facer labore. Stet dissentiunt in cum. Eirmod consulatu mea ex, id vis nisl maiorum copiosae, pro odio labitur voluptua ex. Ei pri inermis convenire maiestatis, ullum iuvaret minimum in his. Facer maiestatis usu ex. In vel nulla probatus similique.

				Qui oportere sententiae cu, ut nec labores facilisi. At prima legere pertinacia mei, est cu diam viderer. Nam semper mandamus in, ei aliquip voluptua vel. Ad ius falli graece, lorem novum malorum et cum. Ne expetenda constituto constituam vis, te velit interpretaris sea, vis ubique meliore an.

				His prima quodsi scriptorem ad, an ius malis legere nostrum. Illum iudicabit intellegat ea ius. In duo adolescens consequuntur, duo everti patrioque repudiandae eu. At vim epicuri hendrerit conclusionemque, et dicta copiosae pro. Nec brute fabellas theophrastus cu.

				Habeo choro nec in. Prima conclusionemque est ei, ne eam graeco adipisci. Detraxit abhorreant vel te. Dolores deterruisset in quo.

				</p>
				<p className="stop-7" style={{color: "white"}}>
					so far away.
				</p>
				<div style={{position: "absolute", top: 0}}>
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
								title: <div style={tourTitleStyle}>React User Tour</div>,
								body: <div style={tourMessageStyle}>Provide a simple guided tour around a website utilizing css selectors.</div>,
								position: "bottom"
							},
							{
								step: 2,
								selector: ".stop-2",
								title: <div style={tourTitleStyle}>Simply</div>,
								body: <div style={tourMessageStyle}>pass in a class class prefixe with `.` or id prefixed with `#`</div>
							},
							{
								step: 3,
								selector: ".stop-3",
								title: <div style={tourTitleStyle}>And</div>,
								body: <div style={tourMessageStyle}>React User Tour will figure out where to position the element.</div>
							},
							{
								step: 4,
								selector: ".stop-4",
								title: <div style={tourTitleStyle}>Wow</div>,
								body: <div style={tourMessageStyle}>That sounds amazing, can it be true?</div>
							},
							{
								step: 5,
								selector: ".stop-5",
								title: <div style={tourTitleStyle}>Yes</div>,
								body: <div style={tourMessageStyle}>and guess what?</div>
							},
							{
								step: 6,
								selector: ".stop-6",
								title: <div style={tourTitleStyle}>A title</div>,
								body: <div style={tourMessageStyle}>please keep guessing, i added this step late for horizontal scrolling example. once again guess what?</div>
							},
							{
								step: 7,
								selector: ".stop-7",
								title: <div style={tourTitleStyle}>What?</div>,
								body: <div style={tourMessageStyle}>we'll even take care of scrolling to elements outside of the viewbox. Enjoy!</div>
							}
						]}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Demo />, document.getElementById("app"));
