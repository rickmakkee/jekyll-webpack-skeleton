/**
 * Waits until all css files are loaded before continuing
 *
 * @param document - the html document
 * @param dev - if in dev mode, it will only check 'blob' urls that are injected by style loaders
 */
export default (document, dev = false) =>
  new Promise(resolve => {
    const links = Array.from(document.querySelectorAll('link[rel=stylesheet]')).filter(
      l => !dev || (l.href && l.href.startsWith('blob:')),
    );

    let resolved = false;

    const checkAllLoaded = () => {
      if (resolved) return;

      const allLoaded = links.every(l => !!l.sheet);

      if (allLoaded) {
        resolved = true;
        resolve();
      }
    };

    // initial check
    checkAllLoaded();

    if (!resolved) {
      links.forEach(stylesheet => {
        /* eslint-disable no-param-reassign */
        stylesheet.onload = () => {
          checkAllLoaded();
        };
      });
    }
  });
