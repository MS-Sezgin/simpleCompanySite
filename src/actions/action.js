import axios from 'axios'
import { store } from '../index'
export const UPDATE_DATA='UPDATE_DATA'


export const dispatchData=(data)=>{
    return{
        type:UPDATE_DATA,
        payload:data
    }
}
// export function getData() {
//     return dispatch => {
//         console.log("asd");
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.data)
//             .then(resDis => dispatch(dispatchData(resDis)))
//             .catch(err => console.log(err))
//     }
// }

export const getData = () => async dispatch => {
    
    console.log("fetchpost actison")
    try {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url);
      const responseBody = await response.json();
      store.dispatch(dispatchData(responseBody));
    } catch (error) {
      console.error(error);
    }
  }

// export function getData() {
//     return async dispatch => {
//         try {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//             let responseData= await response.data;
//             console.log(responseData);
//             dispatch(dispatchData(responseData));
//         } catch (error) {
//             console.log("err");
//         }
//     }
// }