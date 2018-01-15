import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { addItem } from '../actions/';
import { connect } from 'react-redux';

class AddForm extends Component {

  renderInput({label, input, meta: {touched, error, active}}){
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} type="text" className="form-control"/>
        <p className='text-danger'>{touched && !active && error}</p>
      </div>
    )
  }

  handleAddItem(values){


    this.props.addItem(values).then( ()=> {
      this.props.history.push('/');
    });
  }



  render() {

    return (
      <div>
        <div className="row my-4 justify-content-end">
          <Link className="btn btn-outline-primary" to='/'>Back</Link>
        </div>
        <h1 className="text-center">Add To Do Item</h1>

        <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
          <Field name='title' label='Title' component={this.renderInput}/>
          <Field name='details' label='Details' component={this.renderInput} />
          <button className="btn btn-outline-info">Add To Do Item</button>
          <button type='button' onClick={this.props.reset} className="btn btn-outline-danger ml-3">Reset Form</button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'Please enter a title';
  }

  if(!values.details){
    errors.details = 'Please enter some details'
  }

  return errors;
}

AddForm = reduxForm({
  form: 'add-item',
  validate: validate
})(AddForm)



export default connect(null, {addItem})(AddForm);










