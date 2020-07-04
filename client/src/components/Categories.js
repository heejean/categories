import React, {Component} from 'react';
import '../App.css';
import '@progress/kendo-theme-default/dist/all.css';
import { TreeView } from '@progress/kendo-react-treeview';

const tree = [{
	text: 'Furniture', expanded: true, items: [
		{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
}, {
	text: 'Decor', items: [
		{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}];

class Categories extends React.Component {
	render() {
		return (
			<TreeView
				data={tree}
				expandIcons={true}
				onExpandChange={this.onExpandChange}
				onItemClick={this.onItemClick}
				aria-multiselectable={true}
			/>
		);
	}
	onItemClick = (event) => {
		event.item.selected = !event.item.selected;
		this.forceUpdate();
	}
	onExpandChange = (event) => {
		event.item.expanded = !event.item.expanded;
		this.forceUpdate();
	}
}


/*
class Categories extends Component{

	render(){
		return (
			<div className="Categories">
				<h1>Hello Categories</h1>
			</div>
		);
	}
}
*/

export default Categories;
