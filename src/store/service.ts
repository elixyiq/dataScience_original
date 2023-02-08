/*
* 所有与后端交互的请求
*/
import axios from 'axios';
import { baseApi } from '../config';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': '',
};

// const getAnomalyService = (params) => {
//   const paramsStr = parseParamsStr(params);
//   const api = !paramsStr ? baseApi + 'anomaly' : baseApi + 'anomaly?' + paramsStr;
//   return axios.get(api, { headers });
// };
//
// const getCorrelationService = () => axios.get(baseApi + 'correlation', { headers });

const setETHAddress = (params: Object) =>
    axios.post(baseApi + 'correlation/', params, { headers });

const setETHAddress2 = (params: Object) =>
    axios.post(baseApi + 'correlation/', params, { headers });

const setAliOSS = (params: Object) =>
    axios.post(baseApi + 'correlation/', params, { headers });

const systemStop = (params: Object) =>
    axios.post(baseApi + 'correlation/', params, { headers });

const systemStart = (params: Object) =>
    axios.post(baseApi + 'correlation/', params, { headers });

const getRealtimeSpeedService = () =>
    axios.get(baseApi + '/api/v1/speed', { headers });

const getHistorySpeedService = () =>
    axios.get(baseApi + '/api/v1/speed', { headers });

export {
  setETHAddress,
  setETHAddress2,
  setAliOSS,
  systemStop,
  systemStart,
  getRealtimeSpeedService,
  getHistorySpeedService,
}
