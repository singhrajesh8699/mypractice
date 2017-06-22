export default function reducer(state = {
  jsonData:[],
  fetching: false,
  fetched: false,
},action){

    switch(action.type){

        
      case "FETCH_DATA":
      {
       return {...state,jsonData:action.payload,fetching:action.fetching};
       break;
      }

    }

  return state;
}