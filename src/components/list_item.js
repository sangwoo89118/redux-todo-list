import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './modal';




export default class ListItem extends React.Component{



  render(){


    const complete = {
      'color': 'grey',
      'textDecoration': 'line-through'
    }

    return(
      <div className='row'>
        <li className='list-group-item'>

          <Link to={`/item/${this.props._id}`} style={this.props.complete ? complete : {}}>
            {this.props.title}
          </Link>


          <button
          className="btn btn-outline-danger"
          onClick={()=>this.props.delete(this.props._id)}
          >
          Delete
          </button>
          <button className={`btn ${this.props.complete? 'btn-outline-warning' : 'btn-outline-success'}`} onClick={()=>this.props.toggle(this.props._id)}>
          {this.props.complete ? 'Uncomplete': 'Complete'}
          </button>

        </li>
      </div>

    )
  }
}







