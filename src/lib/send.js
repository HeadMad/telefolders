import {error} from './store';
export default async function send(method, params = []) {
  const url = 'https://script.google.com/macros/s/AKfycbwX3I9fc0wLhM0XEKaH-3ur3hhM6L2upw4Q5EDcY2PpPNBHfWmx_Yv_xOUlPrK1nGUi/exec';
  // const request = { method, params };
  if (!Array.isArray(params))
    params = [params];
    
  const requestJson = JSON.stringify({method, params});
  const response = await fetch(url + `?${encodeURI(requestJson)}`);
  const result = await response.json();

  console.log(result)
  
  if (result.ok)
    return result.result;
  else 
    error.set(result.message);
}