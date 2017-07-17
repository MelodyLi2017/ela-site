var React = require('react');
var Nav = require('./Nav.js');
var Header = require('./Header.js');
var Home = require('./Home.js');

class App extends React.Component {
	getLanguages() {
		//databse call to get languages
		return ['French', 'English', 'Russian', 'Chinese (Mandarin)', 'Portugese', 'Italian', 'Japanese', 'Onondagan', 'Persian', 'Quechua',
		'Arabic (Standard)', 'Spanish (Mexican)', 'Spanish (Spain)', 'French (Canadian)', 'Indonesian', 'Sinhala', 'Okinawan (Shuri)', 
		'Swahili', 'Irish', 'Hungarian', 'Yiddish', 'English (British)', 'Berber'];
	}
	render () {
		return(
			<div className = 'app'>
				<Nav content = {this.getLanguages()}/>
				<div className = 'main'>
					<Header logo = '' banner = ''/>
					<Home />
				</div>
			</div>
		)
	}
}

module.exports = App;