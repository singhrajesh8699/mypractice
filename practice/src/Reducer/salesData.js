export default function reducer(state = {
  jsonData:[],
  Data:'',
  fetching: false,
  fetched: false,
},action){

    switch(action.type){

        
      case "FETCH_DATA":
      {
       return {...state,jsonData:action.payload,fetching:action.fetching};
       
      }

       case "FETCH":
      {
       return {...state,Data:action.payload};
       
      }

      case "fetch_post_Data":
      {
         return {...state,jsonData:action.payload};
      }

    }

  return state;
}