var React = require('react');

class Home extends React.Component {
	render (){
		return (
			<div>
				<div className = 'about'>
					<h2>About Us</h2>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida est quis dapibus ultrices. Orci varius natoque penatibus et magnis dis
					parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida placerat. Nulla facilisi. Nulla ultricies sed mauris id hendrerit. 
					Proin dui magna, dignissim nec vulputate ac, viverra in metus. Vivamus lobortis ligula quam, id feugiat mauris aliquam at. Nunc nibh nisl, rhoncus 
					eu rhoncus ut, bibendum vel lorem. Etiam congue, lacus a rhoncus laoreet, orci ligula volutpat augue, non semper eros ex quis felis. Praesent eros erat, 
					dapibus et varius eu, finibus volutpat lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
					Nulla hendrerit feugiat feugiat. Maecenas dictum gravida odio, ac tincidunt tortor maximus ac. Mauris posuere, ex eget dapibus tempor, 
					dui magna bibendum orci, et tincidunt lectus leo vel elit. Nam augue neque, lacinia eget sem ac, pharetra fermentum nulla. In et congue nulla.</p>

					<p>Nullam viverra dui non urna tincidunt ullamcorper. Suspendisse vel turpis ut diam rhoncus tincidunt sed commodo felis. Pellentesque habitant 
					morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dapibus non dui sed malesuada. Ut tristique lacinia interdum. 
					Praesent volutpat varius felis, a porta nisi aliquet vel. Donec vel fringilla velit.</p>

					<p>Vivamus quis tristique orci. Pellentesque eu odio feugiat justo placerat egestas et sit amet odio. Quisque sed placerat eros. Suspendisse libero mi, 
					blandit quis congue eu, tincidunt eget tellus. Vivamus vulputate, neque quis egestas auctor, nunc ante imperdiet nisl, a eleifend lorem ipsum pellentesque 
					velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse efficitur eros leo, sit amet mattis est 
					cursus id. Sed ut libero eros. Sed faucibus tristique enim. Morbi vitae mi ante. Aenean consequat est non pharetra viverra. Suspendisse luctus, orci vel 
					tincidunt vehicula, ligula arcu scelerisque urna, non hendrerit nisi dui ut purus. Cras purus neque, malesuada eu diam ac, lobortis pharetra nulla. P
					raesent mollis arcu eu tellus pretium sodales. Aliquam hendrerit gravida bibendum.</p>
				</div>
				<div className = 'help'>
					<h2>How to Get Started</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida est quis dapibus ultrices. Orci varius natoque penatibus et magnis dis
					parturient montes, nascetur ridiculus mus. Maecenas tincidunt gravida placerat. Nulla facilisi. Nulla ultricies sed mauris id hendrerit. 
					Proin dui magna, dignissim nec vulputate ac, viverra in metus. Vivamus lobortis ligula quam, id feugiat mauris aliquam at. Nunc nibh nisl, rhoncus 
					eu rhoncus ut, bibendum vel lorem. Etiam congue, lacus a rhoncus laoreet, orci ligula volutpat augue, non semper eros ex quis felis. Praesent eros erat, 
					dapibus et varius eu, finibus volutpat lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
					Nulla hendrerit feugiat feugiat. Maecenas dictum gravida odio, ac tincidunt tortor maximus ac. Mauris posuere, ex eget dapibus tempor, 
					dui magna bibendum orci, et tincidunt lectus leo vel elit. Nam augue neque, lacinia eget sem ac, pharetra fermentum nulla. In et congue nulla.</li>
						
						<li>Nullam viverra dui non urna tincidunt ullamcorper. Suspendisse vel turpis ut diam rhoncus tincidunt sed commodo felis. Pellentesque habitant 
					morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dapibus non dui sed malesuada. Ut tristique lacinia interdum. 
					Praesent volutpat varius felis, a porta nisi aliquet vel. Donec vel fringilla velit</li>
					</ul>
				</div>
			</div>
		)
	}
}

module.exports = Home;