import Vue from 'vue';
import Scan from '@/views/Scan';

describe('Scan.vue', () => {
	it('should render correct contents', () => {
		const ScanComponent = Vue.extend(Scan);
		const vm = new ScanComponent().$mount();
		expect(vm.$options.data().fullscreenActive).to.equal(false);
		/* eslint-disable no-console */
		console.log(vm.$el);
		/* eslint-enable no-console */
		//expect(vm.$el.querySelector('[title=Fullscreen]')).to.not.equal(null);
	});
});
