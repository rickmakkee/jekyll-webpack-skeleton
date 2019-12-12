import waitForStyleSheetsLoaded from './utils/waitForStyleSheetsLoaded';
import initComponents from './utils/initComponents';

export default function bootstrap(appRoot) {
  document.addEventListener('DOMContentLoaded', () => {
    waitForStyleSheetsLoaded(document).then(() => {
      initComponents(appRoot);
    });
  });
}
