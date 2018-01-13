import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getItems, deleteItem} from '../actions/';
import ListItem from './list_item';

class List extends Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }


  componentDidMount(){
    this.props.getItems();
  }

  handleDelete(id){
    console.log('in handleDelete',this.props);
    this.props.deleteItem(id).then(()=>{
      this.props.getItems();
    })
  }

  render() {
    const listItems = this.props.list.map((item, index)=>{
      return <ListItem key={index} {...item} delete={this.handleDelete}/>
    })

    return (
      <div>
        <div className="row my-4 justify-content-end">
           <Link to="/add-item" className="btn btn-outline-primary">Add To Do Item</Link>
        </div>
        <h1 className='text-center'>To Do list</h1>
        <ul className="list-group">{listItems}</ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    list: state.todo.list
  }
}

export default connect(mapStateToProps, {getItems,deleteItem})(List);
