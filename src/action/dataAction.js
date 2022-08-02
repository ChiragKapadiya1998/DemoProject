import {APIKEY, AUTHORISATION, BASEURL, GET, URL} from '../helper/apiConstants';
import {makeApiRequest} from '../helper/global';
import {GET_DATA} from './types';

// export const getDataAction = data => {
//   return dispatch => {
//     dispatch({
//       type: GET_DATA,
//       payload: data,
//     });
//   };
// };

export const getDataRequest = request => async dispatch => {
  await makeApiRequest({
    method: GET,
    baseURL: BASEURL,
    url: URL,
    params: {
      category: request?.data?.query,
      apiKey: APIKEY,
    },
  })
    .then(response => {
      console.log('response ', response);
      const data = response.articles;
      if (response.totalResults <= 0) {
        request?.onFail('no data found');
      } else {
        request?.onSuccess(data);
        dispatch({type: GET_DATA, payload: data});
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
    });
};
