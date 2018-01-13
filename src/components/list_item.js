import React from 'react';
import { Link } from 'react-router-dom';




export default class ListItem extends React.Component{



  render(){
    console.log('List Item Props:', this.props);
    return(
      <div>
        <li className='list-group-item'>
          <Link to={`/item/${this.props._id}`}>
            {this.props.title}
          </Link>
          <button
            className="btn btn-outline-warning ml-5"
            onClick={()=>this.props.delete(this.props._id)}
            toggle='this.props.complete'
            >
            Delete
            </button>
        </li>
      </div>

    )
  }
}







