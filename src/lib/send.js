export async function send(request) {
  const url = 'https://script.google.com/macros/s/AKfycbwX3I9fc0wLhM0XEKaH-3ur3hhM6L2upw4Q5EDcY2PpPNBHfWmx_Yv_xOUlPrK1nGUi/exec';
  // const request = { method, params };
  const requestJson = JSON.stringify(request);
  const response = await fetch(url + `?${encodeURI(requestJson)}`);
  const result = await response.json();
  
  if (result.ok)
    return result.result;
  else 
    throw 'Response is error'
}