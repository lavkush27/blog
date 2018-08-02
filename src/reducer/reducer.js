
 function blogReducer(state=[],action){
    switch(action.type){
        case "ADDPOST":
        return([...state,action.data])
        default:
        console.log(state);
    }
}


export default blogReducer;