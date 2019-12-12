export default class AbstractComponent {
  constructor(element) {
    this.element = element;
  }

  getElement(selector, container = this.element) {
    return container.querySelector(selector);
  }

  getElements(selector, container = this.element) {
    return Array.from(container.querySelectorAll(selector));
  }

  dispose() {
    this.element = null;
  }
}
