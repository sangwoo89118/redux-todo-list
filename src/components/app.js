
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Route } from 'react-router-dom';
import AddForm from './add_form';
import List from './list';
import ViewItem from './view_item';

const App = () => (
    <div className='container'>

      <Route path='/' exact component={List}/>
      <Route path='/add-item' component={AddForm}/>
      <Route path='/item/:id' component={ViewItem}/>
    </div>
);

export default App;
