import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import {connect, ReactRedux} from 'react-redux';
import BarChart from '../Chart/BarChart.jsx'

class MainContainer extends React.Component {

componentWillMount() {
  
  
 }
  render() {
      var data=[
  {
    "salesperson": "Bob",
    "sales": 33
  },
  {
    "salesperson": "Robin",
    "sales": 12
  },
  {
    "salesperson": "Anne",
    "sales": 41
  },
  {
    "salesperson": "Mark",
    "sales": 16
  },
  {
    "salesperson": "Joe",
    "sales": 59
  },
  {
    "salesperson": "Eve",
    "sales": 38
  },
  {
    "salesperson": "Karen",
    "sales": 21
  },
  {
    "salesperson": "Kirsty",
    "sales": 25
  },
  {
    "salesperson": "Chris",
    "sales": 30
  }
];

  return (
       <div>
        <BarChart data={data} id="barChart"/>
       </div>
       
      );
   }
}


function mapStatetoProps(store) {
    return {
        getData: store.reducerData,
        }
};

export default connect(mapStatetoProps)(MainContainer);