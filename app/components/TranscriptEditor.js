var React = require('react');
var ApproveEdits = require('./ApproveEdits.js');

const TranscriptEditor = ({match}) => (
	<div>
		<div className = 'transcriptEditor'>
			<h2>{match.params.lang}: {match.params.name}</h2>
			<audio controls>
				<source src = {'../../app/utils/audio/' + retrieveAudio(match.params.name).file} type = 'audio/mpeg' />
			</audio>
			<p id = 'transcript' onClick = {makeEditable}>{retrieveAudio(match.params.name).transcript}</p>
			<button type = 'submit' onClick = {submitChanges}>SUBMIT CHANGES</button>
		</div>
		<ApproveEdits file_id = {match.params.id} />
	</div> 
)

function makeEditable() {
	var transcript = document.getElementById('transcript');
	transcript.setAttribute('contentEditable', true);
}

function retrieveAudio(name){
	//datbase blah blah blha
	return {
		file: 'Auntie _Lily _4.mp3',
		transcript: 'transcript'
	}
}

function submitChanges(){
	var edit = document.getElementById('transcript').innerHTML;
	//post
}

module.exports = TranscriptEditor;