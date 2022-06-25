import axios from "axios";

const getHomeAction=(name)=>{
     return (dispatch,getState)=>{
        axios.get(`https://mobilecdn.6thstreet.com/resources/20190121/en-ae/${name}.json`) 
        .then((resp)=>{
            console.log(('action heat',resp.data.data));
            dispatch({type:name,payload:resp.data.data })
        })
     }
}

export default getHomeAction
