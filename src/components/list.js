import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getItems, deleteItem, toggleItem} from '../actions/';
import ListItem from './list_item';

class List extends Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }


  componentDidMount(){
    this.props.getItems();
  }

  handleDelete(id){

    this.props.deleteItem(id).then(()=>{
      this.props.getItems();
    })
  }

  handleToggle(id){

    this.props.toggleItem(id).then(()=>{
      this.props.getItems();
    })
  }

  render() {
    const listItems = this.props.list.map((item, index)=>{
      return <ListItem key={index} {...item} delete={this.handleDelete} toggle={this.handleToggle}/>
    })

    return (
      <div>
        <div className="row my-4 justify-content-end">
           <Link to="/add-item" className="btn btn-outline-primary ">Add To Do Item</Link>
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

export default connect(mapStateToProps, {getItems,deleteItem,toggleItem})(List);
