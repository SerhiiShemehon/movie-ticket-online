import axios from "axios";

import {
  ROOM_LOADING,
  ROOM_DATA,
  ROOM_ERROR,
  URL_ROOM
} from "../constants";

const RoomLoading = () => ({
  type: ROOM_LOADING
});

const RoomData = (payload) => ({
  type: ROOM_DATA,
  payload
});

const RoomError = () => ({
  type: ROOM_ERROR
});

export const getRoom = () => {
  return (dispatch) => {
    dispatch(RoomLoading());
    axios.get(URL_ROOM)
      .then(({ data }) => {
        dispatch(RoomData(data.rooms));
      })
      .catch((error) => {
        dispatch(RoomError());
      })
  };
}