import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import app from './app.jsx'
import {Provider} from 'react-redux';
import store from './store.js';


const CustomRouter = React.createClass({

    render() {
        
        return (
            <Provider store={store}>
                 <BrowserRouter>
                  <Switch>
                   <Route exact path="/" component={app}></Route>
                  </Switch>
                </BrowserRouter>
              </Provider>
           
           
        );
    }

});
export default CustomRouter;

