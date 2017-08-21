import axios from "axios";

export function getJsonData()
{

      return function(dispatch) {

            axios.get("http://localhost:8081/routers").then((result)=>
            {
            
              dispatch({type: "FETCH_DATA", payload:result.data ,fetching:true});
                           
            }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })
        
      }

};


export function getData()
{

      return function(dispatch) {

            
              dispatch({type: "FETCH", payload:"hi raj" ,fetching:true});
                           
                   
      }

};

export function postRequest()
{

	var movies = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}];

    var  details=JSON.stringify(movies);

     return function(dispatch) {

	axios.post("http://localhost:8081/routers/movies",details,
            {
              headers:{"Content-Type":"application/json"}
            }

            ).then((result)=>
            {
            
               dispatch({type: "fetch_post_Data", payload:result.data ,fetching:true});
                          
            }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })

        }
};