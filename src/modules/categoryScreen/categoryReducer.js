const intialState={
    Women_Category:[],
    Men_Category:[],
    Kids_Category:[],


}
 const CategoryReducer=(state=intialState,action)=>{
      const {type,payload}=action;
      switch(type){
          case "categories_women":
              return {...state,Women_Category:payload}

         case "categories_men":
             return {...state,Men_Category:payload}

         case "categories_kids":
             return {...state,Kids_Category:payload}
             default:
                 return{...state}
      }



 }

 export default CategoryReducer