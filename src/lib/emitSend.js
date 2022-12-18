const childs = Array.from(Array(22), (_, i) => ({
  thumb: `https://picsum.photos/id/${230 + i}/200/320`,
  type: "photo",
}));

childs[5] = {
  type: 'folder',
  name: 'Новая папка',
  id: 'dweuiwehjg'
};

const folder = {
  name: 'Новая папака 2'
}


/**
 * 
 */
const foldersList = [
  {
    name: "Новая папка",
    isCurrent: true,
    path: "123"
  },
  {
    name: "Внутренняя папка",
    isCurrent: false,
    path: "123/456"
  },
  {
    name: "Вторая внутренняя папка",
    isCurrent: false,
    path: "123/789"
  },
  {
    name: "Папка третьего уровня",
    isCurrent: false,
    path: "123/456/105"
  }
]



export default async () => ({
  childs,
  folder
})