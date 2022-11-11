const backendTelegramUrl = 'https://script.google.com/macros/s/AKfycbzt98FK5wXdiPIc7QKioisHiKIdVEE3Rl1fM128uSgmj9OK2es_vPJeJaFOQyInv5io/exec';
const backendWebUrl = 'https://script.google.com/macros/s/AKfycbxwc3I6mxH3-Pd6pfxVQNAIt034vRYSj9d0x0XNtiS7zyBint8aEIEgFXzP03pe7_k/exec';

let WebApp;

/**
 * 
 * @param {Object} Telegram Instance of Telegram web app script
 */
export function initWebApp (Telegram) {
  WebApp = Telegram.WebApp;
  return WebApp;
}

/**
 * 
 * @param {any} data 
 * @returns 
 */
export async function sendWebAppQuery (data) {
  const initData = WebApp.initDataUnsafe;
  const user = initData?.user ?? null;
  const chat =  initData?.chat ??  user;
  const query_id = initData?.query_id ?? null;

  const request = {
    method: 'getUser',
    params: [{
      id: user.id
    }]
  };

  const requestJson = JSON.stringify(request);

  const response = await fetch(backendWebUrl + `?${encodeURI(requestJson)}`);
  const result = await response.json();

  return result;
}