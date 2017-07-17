var React = require('react');
var PropTypes = require('prop-types');
var TranscriptionNav = require('./TranscriptionNav.js');

function Nav(props) {
	return (
		<div className = 'nav-wrapper'>
			<div className = 'nav'>
				<ul className = 'languages'>
					<li className = 'title'> Home</li>	
					<li className = 'title'>Languages</li>
					{props.content.map(function(key){
						{var str = key.replace(/\s/g, '')}
						return (
							<nav className = 'langNav'>
								<ul>
									<li key = {str}><a href = '#' onClick = {showList()}>{key}</a></li>
									<TranscriptionNav transcripts = {getTranscripts()} lang = {str} />
									<hr />
								</ul>
							</nav>
						)
					})}
				</ul>
			</div>
		</div>
	)

}

function getTranscripts(){
	//database call for titles of audio files
	return ['Interview 1', 'Interview 2'];
}

function showList(id) {
	// var list = document.GetElementById(id);
	// list.style.display = 'flex';
}

Nav.propTypes = {
	content: PropTypes.array.isRequired
}

module.exports = Nav;