import Router from './Router.js';

const router = new Router();

router.add('/', 'main');
router.add('/about', 'about');
router.add('/contacts', 'contacts');
router.add('/faq', 'faq');
router.add('/folder/[...path]', 'folder');

export default (path) => router.run(path);