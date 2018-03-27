var React = require('react');
var PropType = require('prop-types');
var NavLink = require('react-router-dom').NavLink;

function TranscriptionNav (props) {
	var speakers = {};
	return(
			<div  className = 'transcriptionNav' id = {props.lang}>
				<ul>
					{props.transcripts.map(function(item){
						if (speakers[item.speakerName] == null) {
							speakers[item.speakerName] = 1;
						} else {
							speakers[item.speakerName] += 1;
						}
						var transcript_name = item.speakerName + ' ' + speakers[item.speakerName];
						return (
							<li  key = {transcript_name}>
								<NavLink activeClassName  = 'active' to = {'/'+ props.lang + '/' + transcript_name + '/' + item.id}>
								{transcript_name}
								</NavLink>
							</li>)
						}
					)}
				</ul>
			</div>
	)
}

TranscriptionNav.propTypes = {
	transcripts: PropType.array.isRequired,
	lang: PropType.string.isRequired
}

module.exports = TranscriptionNav;