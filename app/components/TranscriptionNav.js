var React = require('react');
var PropType = require('prop-types');

function TranscriptionNav (props) {
	return(
			<div  className = 'transcriptionNav'>
				<ul>
					{props.transcripts.map(function(item, index){
						return (<li  key = {props.lang + index}><a href = '#'>{item}</a></li>)
						}
					)}
				</ul>
			</div>
	)
}

module.exports = TranscriptionNav;