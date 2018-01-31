import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const FETCH_USER = "fetch_user";
export const CREATE_USER = "create_user";
export const DELETE_USER = "delete_user";


const ROOT_URL = "https://jsonplaceholder.typicode.com/users";


export function fetchUsers() {
  console.log("I am called")

// return (dispatch)=>{
//   return axios.get(ROOT_URL)
//               .then((response)=>{
//                 dispatch({
//                   type: FETCH_USERS,
//                   payload: response
//                 })
//               })
//               .catch((error)=>{
//                 console.log(error:error);
//               });
// }

const response = axios.get(ROOT_URL);
return {
  type: FETCH_USERS,
  payload: response
}

}

export function fetchUser(id) {

const response = axios.get(`${ROOT_URL}/${id}`);

return {
  type: FETCH_USER,
  payload: response
}

}

export function deleteUser(id,callback) {

const response = axios
                .delete(`${ROOT_URL}/${id}`)
                .then(() =>{ if(callback){callback()}});

return {
  type: DELETE_USER,
  payload: id
}

}

export function createUser(value,callback) {

const response = axios
                .post(ROOT_URL,value)
                .then(() =>{ if(callback){callback()}});

return {
  type: CREATE_USER,
  payload: value
}

}
