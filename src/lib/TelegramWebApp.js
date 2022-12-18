const backendTelegramUrl = 'https://script.google.com/macros/s/AKfycbzt98FK5wXdiPIc7QKioisHiKIdVEE3Rl1fM128uSgmj9OK2es_vPJeJaFOQyInv5io/exec';
const backendWebUrl = 'https://script.google.com/macros/s/AKfycbxwc3I6mxH3-Pd6pfxVQNAIt034vRYSj9d0x0XNtiS7zyBint8aEIEgFXzP03pe7_k/exec';

let WebApp;

/**
 * 
 * @param {Object} Telegram Instance of Telegram web app script
 */
export function initWebApp () {
  WebApp = window.Telegram.WebApp;
  return WebApp;
}

export function dataCheckString() {
  const data = window.Telegram.WebApp.InitData;
  const initData = new URLSearchParams(data);
  initData.sort();
  let result = [];
  initData.forEach((val, key) => {
    if (key !== 'hash')
      result.push(key + '=' + val);
  });
  return result.join('\n');
}

/**
 * 
 * @param {any} data 
 * @returns 
 */
export async function sendWebAppQuery (method, payload) {
  return WebApp.sendData(JSON.stringify([method, payload]));
}