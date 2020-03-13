import waitForStyleSheetsLoaded from './utils/waitForStyleSheetsLoaded';
import initComponents from './utils/initComponents';

export default function bootstrap(appRoot) {
  const handleMouseDown = () => {
    const body = document.querySelector('body');

    body.classList.add('mode-mouse');
  };

  const handleKeyDown = () => {
    const body = document.querySelector('body');

    body.classList.remove('mode-mouse');
  };

  document.addEventListener('DOMContentLoaded', () => {
    waitForStyleSheetsLoaded(document).then(() => {
      initComponents(appRoot);

      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('keydown', handleKeyDown);
    });
  });
}
