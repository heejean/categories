import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories';

class App extends Component{

	render(){
		return (
			<div className="App">
				<Categories/>
			</div>
		);
	}
}

export default App;
