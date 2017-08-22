var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav.js');
var Header = require('./Header.js');
var Home = require('./Home.js');
var TranscriptEditor = require('./TranscriptEditor.js')
var Contact = require('./Contact.js')

class App extends React.Component {
	showList(id){
		var list = document.getElementById(id);
		if (list.style.display == 'flex'){
			list.style.display = 'none';
		} else {
			list.style.display = 'flex';
		}
	}
	render () {
		return(
			<Router>
				<div className = 'app'>
					<Nav onSelect = {this.showList} />
						<div className = 'main'>
							<Header logo = '' banner = ''/>
							<Switch>
								<Route exact path = '/' component = {Home} />
								<Route path = "/:lang/:name/:id" component = {TranscriptEditor} />
								<Route path = '/contact' component = {Contact} />
								<Route render = {function () {
									return (
										<div>
											404 Error.
										</div>
									)
								}} />
							</Switch>
						</div>
				</div>
			</Router>
			
		)
	}
}

module.exports = App;