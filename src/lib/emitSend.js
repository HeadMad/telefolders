const items = Array.from(Array(24), (_, i) => ({
  thumb: `https://picsum.photos/id/${230 + i}/200/320`,
  type: "photo",
}));



  items[5] = {
    type: 'folder',
    name: 'Новая папка',
    id: 'dweuiwehjg'
  };



export default (id) => ({
  name: 'My Photos',
  items,
  id
})