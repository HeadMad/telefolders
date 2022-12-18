import ErrorComponent from './ErrorComponent.svelte'
export default class errorBoundary extends ErrorComponent {
	 constructor(config) {
		 var error = null
		 config.props.$$slots.default = config.props.$$slots.default.map(x => (...args) => { try { return x(...args) } catch (e) { error = e }})
		 super(config);
		 if (error) {
			 this.$set({error: error})
		 }
	 }
}