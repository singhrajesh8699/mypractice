import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import {connect, ReactRedux} from 'react-redux';

class Barchart extends React.Component {


  componentDidMount(){
    const {id,data} = this.props;
    this.mountCart("#"+id,data)
  }

  mountCart(id,data) {    

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 700 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;


    var x = d3.scaleBand()
              .range([0, width])
              .padding(0.1);
    var y = d3.scaleLinear()
              .range([height, 0]);
              

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

      data.forEach(function(d) {
         d.sales = +d.sales;
        });

 
      x.domain(data.map(function(d) { return d.salesperson; }));
      y.domain([0, d3.max(data, function(d) { return d.sales; })]);

      

      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

     
      svg.append("g")
          .call(d3.axisLeft(y));

    var tooltip = d3.select(id).append("div").attr("class", "toolTip")
                    .style("position","absolute")
                    .style("display","none")
                    .style("min-width","80px")
                    .style("height","auto")
                    .style("background","none repeat scroll 0 0 #ffffff")
                    .style("border","1px solid #6F257F")
                    .style("padding","14px")
                    .style("text-align","left");
         

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.salesperson); })
          .attr("width", x.bandwidth())
          .attr("y", function(d) { return y(d.sales); })
          .attr("height", function(d) { return height - y(d.sales); })
          .style("fill","steelblue")
          .on("mousemove", function(d){
            var xPosition = d3.mouse(this)[0];
            var yPosition = d3.mouse(this)[1];
                tooltip
                  .style("left", xPosition + 45 + "px")
                  .style("top", yPosition - 25 + "px")
                  .style("display", "inline-block")
                  .html((d.salesperson) +  ":" + (d.sales));
            })
          .on("mouseout", function(d){ 
                console.log("raj out")
            tooltip.style("display", "none");});
            

  }


   render() {
      
  let {data,id}=this.props;

  return (
       <div>
        <div id={id}></div>
       </div>
       
      );
   }
}


function mapStatetoProps(store) {
    return {
        getData: store.reducerData,
        }
};

export default connect(mapStatetoProps)(Barchart);