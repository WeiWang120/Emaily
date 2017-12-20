import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}


export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values, history)  => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  console.log(res.data);
  if (!res.data.error) {
    dispatch({ type: FETCH_USER, payload: res.data });
    history.push('/surveys');
  } else {
    alert(res.data.error);
  }

}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
}
