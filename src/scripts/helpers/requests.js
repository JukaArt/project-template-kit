import 'whatwg-fetch';
import Cookies from 'universal-cookie';
import { encodeQueryData } from 'Util/encodeQueryData';
import { sessionId } from 'Util/session';
import ls from 'Util/localStorage';

const isDev = process.env.NODE_ENV === 'development';
const path = isDev ? '/api' : '';

const getRequestFn = () => {
  return (url, params={}, toJSON=true) => {
    const requestUrl = `${path}${url}${encodeQueryData(params)}`;
    const request = new Request(requestUrl, {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Accept-Language': `${ls.get('locale')}`,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ls.get('jwt')}`,
      }),
    });

    const fetchReq = fetch(request);

    if (toJSON) {
      return fetchReq.then(response => {
        return response.json();
      });
    }
    return fetchReq;
  }
};

const universalRequest = (url, params, method, toJSON) => {
  const requestUrl = `${path}${url}`;

  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': `${ls.get('locale')}`,
  };

  const jwt = ls.get('jwt');
  if (jwt) {
    headers.Authorization = `Bearer ${jwt}`
  }

  const request = new Request(requestUrl, {
    method,
    headers: new Headers(headers),
    body: JSON.stringify(
      method !== 'POST' ? {
        ...params
      } : {
      data: params
    }),
  })

  const fetchReq = fetch(request);

  if (toJSON) {
    return fetchReq
      .then(async response => {
        const { status, ok } = response;

        const data = await response.json();

        if (!ok) {
          return new Promise(resolve => resolve({
            status, data
          }));
        }

        try {
          return data;
        } catch (err) {
          return new Promise(resolve => resolve({
            ok: 'ok'
          }));
        }
      })
      .catch(err => {
        return new Promise(resolve => resolve({
          ok: 'ok',
          err,
        }));
      })
  }
  return fetchReq;
}

const postRequestFn = () => {
  return (url, params={}, toJSON=true) => {
    return universalRequest(url, params, 'POST', toJSON);
  }
}

const deleteRequestFn = () => {
  return (url, params={}, toJSON=true) => {
    return universalRequest(url, params, 'DELETE', toJSON);
  }
}


const patchRequestFn = () => {
  return (url, params={}, toJSON=true) => {
    return universalRequest(url, params, 'PATCH', toJSON);
  }
}

const putRequestFn = () => {
  return (url, params = {}, toJSON = true) => {
    return universalRequest(url, params, 'PUT', toJSON);
  }
}

export const getRequest = getRequestFn();
export const putRequest = putRequestFn();
export const postRequest = postRequestFn();
export const patchRequest = patchRequestFn();
export const deleteRequest = deleteRequestFn();
