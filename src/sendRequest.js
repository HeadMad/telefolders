const url = 'https://script.google.com/macros/s/AKfycbwX3I9fc0wLhM0XEKaH-3ur3hhM6L2upw4Q5EDcY2PpPNBHfWmx_Yv_xOUlPrK1nGUi/exec';


export default async function (method, params) {
  const request = { method, params };
  const requestJson = JSON.stringify(request);
  const response = await fetch(url + `?${encodeURI(requestJson)}`);
  const result = await response.json();
  return result;
}