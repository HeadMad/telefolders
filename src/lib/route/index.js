import Router from './Router.js';

const router = new Router();

router.add('/', 'main');
router.add('/about', 'about');
router.add('/contacts', 'contacts');
router.add('/faq', 'faq');
router.add('/files/[...path]', 'files');

export default (path) => router.run(path);