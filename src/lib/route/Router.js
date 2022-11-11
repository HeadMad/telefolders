class Router {
  constructor() {
    this.routes = new Map();
  }
  
  /**
   * 
   * @param {string} path 
   * @param {any} result
   * @returns {Router}
   */
  add(path, result) {
    this.routes.set(path, result);
    return this;
  }
  
  /**
   * 
   * @param {string} path 
   * @returns {object} Like {page, params}
   */
  run(path) {
    if (path.length > 1 && path.endsWith('/'))
      path = path.substring(0, path.length - 1);

    if (this.routes.has(path))
      return { page: this.routes.get(path) };

    for (const [route, page] of this.routes.entries()) {
      if (!/\[[\w\.]+\]/.test(route))
        continue;

      const routeMatch = [];

      const reString = route.replace(/\[([\w\.]+)\]/g, (match, inner) => {
        if (/^\.{3}\w+$/.test(inner)) {
          routeMatch.push(inner.substring(3))
          return '(.+)?';

        } else if (/^\w+$/.test(inner)) {
          routeMatch.push(inner);
          return '(\\w+)';
        }
      });
      const re = new RegExp(`^${reString}$`);
      const pathMatch = path.match(re);
      if (pathMatch === null)
        continue;

      const [_, ...values] = pathMatch;


      const params = routeMatch.reduce((res, key, i) => {
        res[key] = values[i];
        return res;
      }, {});

      const result = { page, params };

      return result;
    }

    return { page: '404' };
  }
}

export default Router;