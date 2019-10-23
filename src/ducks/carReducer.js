import axios from "axios";

import { GET_CARS, ADD_CAR, DELETE_CAR, EDIT_CAR } from "./actionTypes";
const initialState = {
  cars: []
};

export const getCars = () => {
  const data = axios.get("/api/cars").then(res => res.data);
  return {
    type: GET_CARS,
    payload: data
  };
};

export const addCar = (name, img) => {
  let data = axios.post("/api/cars", { name, img }).then(res => res.data);
  return {
    type: GET_CARS,
    payload: data
  };
};

export const deleteCar = id => {
  let data = axios.delete(`/api/cars/${id}`).then(res => res.data);
  return {
    type: DELETE_CAR,
    payload: data
  };
};

export const editCar = (name, img, id) => {
  let data = axios.put(`/api/cars/${id}`, { name, img }).then(res => res.data);
  return {
    type: EDIT_CAR,
    payload: data
  };
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CARS + "_FULFILLED":
      return { cars: payload };
    case ADD_CAR + "_FULFILLED":
      return { cars: payload };
    case DELETE_CAR + "_FULFILLED":
      return { cars: payload };
    case EDIT_CAR + "_FULFILLED":
      return { cars: payload };
    default:
      return state;
  }
}
