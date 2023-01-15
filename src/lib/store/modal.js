import store from './createSimpleStore';
const {set, update, subscribe} = store();
const content = new Map()
export default {
  update, subscribe,
  set
  // set: async (value) => {
  //   const path = `../../components/${value}.svelte`;
  //   if (content.has(path))
  //     return set(content.get(`../../components/${value}.svelte`))
    
    
  //   const result = (await import(path)).default;
  //   content.set(path, result);
  //   return set(result);
  // }
};