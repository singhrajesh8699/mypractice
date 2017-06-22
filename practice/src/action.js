import axios from "axios";

export function getJsonData()
{

      return function(dispatch) {

            axios.get("http://localhost:8081/getJson").then((result)=>
            {
            
              dispatch({type: "FETCH_DATA", payload:result.data ,fetching:true});
                           
            }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })
        
      }

};