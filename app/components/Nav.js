var React = require('react');
var PropTypes = require('prop-types');
var TranscriptionNav = require('./TranscriptionNav.js');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.languages = this.getLanguages();
		this.language_info = {};
		this.languages.map(function(item) {
			this.language_info[item] = this.getAudioFiles(item);
		}, this)
		this.onSelect = props.onSelect;
	}

	getLanguages() {
		//databse call to get languages
		return ['French', 'English', 'Russian', 'Chinese (Mandarin)', 'Portugese', 'Italian', 'Japanese', 'Onondagan', 'Persian', 'Quechua',
		'Arabic (Standard)', 'Spanish (Mexican)', 'Spanish (Spain)', 'French (Canadian)', 'Indonesian', 'Sinhala', 'Okinawan (Shuri)', 
		'Swahili', 'Irish', 'Hungarian', 'Yiddish', 'English (British)', 'Berber'];
	}

	getAudioFiles(lang){
	//database call for audio files details, parameter lang is the language group the audio file belongs to
		return [
		    {
		        "id": 0,
		        "speakerName": "John Travolta",
		        "language": "English",
		        "timeCreated": "1997-07-16T19:20:30"
		    },
		    {
		    	"id": 1,
		    	"speakerName": "Dave Bump",
		    	"language": "English",
		    	"timeCreated": "1998-09-23"
		    }
        ];
 	}

	render(){ 
		return (
			<div className = 'nav-wrapper'>
				<div className = 'nav'>
					<ul className = 'languages'>
						<li className = 'title'><NavLink exact activeClassName = 'active' to = '/'>Home</NavLink></li>	
						<li className = 'title'><a onClick = {this.onSelect.bind(null, 'langNav')}>Languages</a></li>
						<div id = 'langNav'>
							{this.languages.map(function(key, index){
								{var str = key.replace(/\s/g, '')}
								return (
									<div className = 'langList' key = {key}>
										<ul>
											<li key = {str + index}>
												<a onClick = {this.onSelect.bind(null, str)}>
												{key}
												</a>
											</li>
											<TranscriptionNav transcripts = {this.language_info[key]} lang = {str} />
											<hr />
										</ul>
									</div>
								)
							}, this)}
						</div>
						<li className = 'title'><NavLink activeClassName = 'active' to = '/contact'>Contact Us</NavLink></li>
						<li className = 'login'><NavLink activeClassName = 'active' to = '/login'>Log In</NavLink></li>
					</ul>
				</div>
			</div>

		)
	}
}


Nav.propTypes = {
	onSelect: PropTypes.func.isRequired
}

module.exports = Nav;