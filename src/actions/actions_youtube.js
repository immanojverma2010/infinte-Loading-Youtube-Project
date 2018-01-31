import axios from "axios";

export const FETCH_VIDEOS = "fetch_videos";
export const FETCH_VIDEO = "fetch_video";


const ROOT_URL = "https://www.googleapis.com/youtube/v3/videos";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchVideos(pageToken="") {

return (dispatch)=>{
  console.log("calling youtube api");
  let params ={'chart': 'mostPopular',
'regionCode': 'US',
'part': 'snippet,contentDetails,statistics',
'key':'AIzaSyAuNHSC1Aib4ulGAmq_qpQZSwzltBe3gA0',
'pageToken':pageToken,
'videoCategoryId': ''}
  return axios.get(ROOT_URL,{
              params:params
                })
              .then((response)=>{
                dispatch(getVideos(response.data));
              })
              .catch((error)=>{
                console.log(error,"error")
              })
}


  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  //
  // return {
  //   type: FETCH_POSTS,
  //   payload: request
  // };
}
export function getVideos(videoData){
    console.log("2")
    return{
        type:FETCH_VIDEOS,
        payload:videoData
    }
  }
export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
