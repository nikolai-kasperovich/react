import axios from 'axios';
import _ from 'lodash';

function getHeaders(method, customHeaders = {}){
    let headers = {
        'Content-Type':'application/json',
        ...customHeaders
    }
    if (_.isEqual('post',_.lowerCase(method))) {
        headers['Accept'] = 'application/json'
    }
    
    return headers;
}
export default (paramsObj) => {
    const { dataPayload } = paramsObj;
    const { data } = dataPayload;
    return axios({
      data: data,
      method: dataPayload.method,
      headers: getHeaders(dataPayload.method, dataPayload.headers),
      url: dataPayload.url,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        const { statusText, status } = error.response || {};
        const errorObj = { statusText, status, response: error.response };
        console.error("paramsObj:", paramsObj, "errorObj:", errorObj);
        throw errorObj;
      });
  };