const webHookUrl = 'https://script.google.com/macros/s/AKfycbw9biQ8mjTJSj1clIL30uqnSkLVKcfEveTm894pDuvXsp7IcPHPTe4GuaxO1D7yJLUF/exec?target=TeleFoldersBot';

let WebApp;
let query_id = null;


/**
 * 
 * @param {Object} Telegram Instance of Telegram web app script
 */
export function initWebApp (Telegram) {
  WebApp = Telegram.WebApp;
  query_id = WebApp.initDataUnsafe.quey_id;
  return WebApp;
}

/**
 * 
 * @param {any} data 
 * @returns 
 */
export async function sendWebAppQuery (data) {
  const user = WebApp.initDataUnsafe?.user ?? null;
  const chat =  WebApp.initDataUnsafe?.chat ??  user;
  const response = await fetch(webHookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'no-cors',
    body: JSON.stringify({
      update_id: null,
      web_app_query: {
        query_id,
        user,
        chat,
        data,
      }
    })
  });
  return response.json();
}