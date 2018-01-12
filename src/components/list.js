import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class List extends Component {
  render() {

    console.log('List Props: ', this.props);

    const listItems = this.props.list.map((item, index)=>{
      return <li key={index} className="list-group-item">{item.title}</li>
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

export default connect(mapStateToProps)(List);
