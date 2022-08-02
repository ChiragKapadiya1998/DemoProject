import axios from 'axios';

export const makeApiRequest = ({method, url, data, headers, params, baseURL}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      url,
      data,
      headers,
      params,
      baseURL,
    };

    axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response?.data);
        } else {
          reject(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
