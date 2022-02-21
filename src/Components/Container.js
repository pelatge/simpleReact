import React from 'react';

function Container({children}){
	return(
		<>
		<div>
		<h1>{Container.name}</h1>
		{children}
		<h1> banyak elemen children:{children.length} buah</h1>
		<h1>{Container}</h1>
		<h1>ini batas {Container.name}</h1>
		</div>
		</>
	);
}


export default Container;