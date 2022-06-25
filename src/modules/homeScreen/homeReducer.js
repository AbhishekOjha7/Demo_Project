const intialState={
    Women_Section:[],
    Men_Section:[],
    Kids_Section:[],


}
 const HomeReducer=(state=intialState,action)=>{
      const {type,payload}=action;
      switch(type){
          case "women":
              return {...state,Women_Section:payload}

         case "men":
             return {...state,Men_Section:payload}

         case "kids":
             return {...state,Kids_Section:payload}
             default:
                 return{...state}
      }



 }

 export default HomeReducer