import '../style/screen.scss';
import bootstrap from './bootstrap';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new ReferenceError('Could not find DOM element with id "app"');
}

bootstrap(appElement);
