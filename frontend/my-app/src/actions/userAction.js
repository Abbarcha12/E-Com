import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_DETAIL_REQUEST,
  USER_DETAIL_FAIL,
  USER_DETAIL_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userContants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const Register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserDetail = (id) => async (dispatch,getState) => {
  try {
    dispatch({
      type: USER_DETAIL_REQUEST,
    });
    const{userLogin:{userInfo}} =getState()
    console.log(userInfo.token)
    const config = {
      headers: {
        "content-Type": "application/json",
        token: `Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.get(
      `api/users/${id}`,
  
      config
    );
  
    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const userUpdateProfile = (user) => async (dispatch,getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    const{userLogin:{userInfo}} =getState()
    const config = {
      headers: {
        "content-Type": "application/json",
        token: `Bearer ${userInfo.token}`
      },
    };

    const { data } = await axios.put(
      `api/users/profile`,user,config
    );
  
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: USER_UPDATE_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
