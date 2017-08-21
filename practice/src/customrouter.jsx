import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Reducer/store.js';
import pie from './Chart/pieChart';
import MainContainer from './Container/MainContainer.jsx'


const CustomRouter = React.createClass({

    render() {
        
        // <Route exact path="/" component={pie}></Route>
        return (
            <Provider store={store}>
                 <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={MainContainer}></Route>
                    
                  </Switch>
                </BrowserRouter>
              </Provider>
           
           
        );
    }

});
export default CustomRouter;

