import React from 'react';
import {Container} from './../Components';
import About from './About';
function Blogs(){
	return(
		<div>
		<Container>
		<h1 className="bg-blue-400 text-red-600">Welcome to simpleReact Blogs</h1>
		<About />
		</Container>
		</div>

	);
}

export default Blogs;