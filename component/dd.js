import React from 'react'
import '../css/sty.css'



class Dd extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				
				<h1 className='tit'>hello</h1>
				<h1 className='tit'>heseeeeeeeello</h1>
				<img src={require('../img/logo2.png')} />
				
				
			</div>
		)
	}
}


export default Dd