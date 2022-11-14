export default function headroom(node, params) {
  const {duration} = params ?? {duration: 200};
  node.style.top = '0';
  node.style.position = 'fixed';
  node.style.transition = `top ${duration/1000}s`;
  
  const nodeHeight = node.offsetHeight;
  let currentY = 0;
  let lastY = 0;
  let dirrection;
  
  function windowScroll(event) {
    currentY = window.pageYOffset;
    const newDirrection = currentY > lastY ? 'down' : 'up';
    lastY = currentY - 1;
    if (newDirrection !== dirrection) {
      dirrection = newDirrection;
      node.style.top = dirrection === 'up' ? 0 : -nodeHeight + 'px';
    }
  }

  window.addEventListener('scroll', windowScroll);
  
  return {
    update() {},
    destroy() {
      window.removeEventListener('scroll', windowScroll);
    }
  }
}