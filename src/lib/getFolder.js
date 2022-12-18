import send  from "./send.js";

export default async function(initData, path, id) {
  const localData = localStorage[id]
    ? JSON.parse(localStorage[id])
    : {};

  const last = localData.last ?? 0; 

  const response = await send(
    'getFolder',
    [initData, { path, id, last }]
    );


  if (response === null) {
    console.log('Load local data');
    return localData.data;
  }
  
  console.log('Load remote data');
  localStorage[id] = JSON.stringify(response);
  return response.data;
}