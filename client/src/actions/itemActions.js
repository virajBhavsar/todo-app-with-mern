import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING  } from "./types";
import axios from "axios";


export const getItems = () => (dispatch) => {
  dispatch(itemsLoading());
  axios.get("http://localhost:5000/api/items").then((res) => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  });
};

export const addItem = item => dispatch => {
  axios
  .post("http://localhost:5000/api/items",item)
  .then((res) => {
    dispatch({
      type: ADD_ITEMS,
      payload: item,
    })
  }).then(()=>{
      setTimeout(()=>{
          dispatch(getItems())
      },1000)
      }
)
};

export const deleteItem = id => dispatch => {
  axios.delete(`http://localhost:5000/api/items/${id}`).then((res)=>{
    dispatch({
    type: DELETE_ITEMS,
    payload: id,
  })
  });
};
export const itemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
