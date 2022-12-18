/**
 * 
 * @param {*} value Initial value of store 
 * @returns {object}
 */
function simpleStore(value, start) {

  let subscribers = new Set();
  let first = true;

  function subscribe(subscriber) {
    if (typeof subscriber === 'function')
      subscribers.add(subscriber);

    if (!first)
      return;

    first = false;
    let stop;

    if (start)
      stop = start(set);

    return {
      unsubscribe() {
        if (typeof stop === 'function')
          stop();
      }
    };
  }

  function set(newValue) {
    value = newValue;
    for (let subscriber of subscribers)
      subscriber(newValue);
  }

  function update(handler) {
    value = set(handler(value))
  }

  return { set, update, subscribe };
  
}

export default simpleStore;