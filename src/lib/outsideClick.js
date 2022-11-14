export default function (node, callback) {
	function onClick(event) {
		if (!node.contains(event.target))
			callback();
	}
	
	document.body.addEventListener('click', onClick);
	
	return {
		update(newCallback) {
			callback = newCallback;
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
};