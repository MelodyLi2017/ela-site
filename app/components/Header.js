var React= require('react');
var PropType = require('prop-types');

function Header (props) {
	return (
		<div className = 'header'>
			<img className = 'logo' src = {props.logo} alt = 'logo' />
			<img className = 'banner' src = {props.banner} alt = 'banner' />
			<h1>Endangered Language Alliance Transcription Website</h1>
		</div>
	)
}

Header.propType = {
	logo: PropType.string.isRequired,
	banner: PropType.string.isRequired
}
module.exports = Header;