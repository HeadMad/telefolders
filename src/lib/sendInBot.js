import send from './send.js';

export default function (initData, {method, payload}) {
  return send('sendInBot', [initData, {method, payload}]);
}