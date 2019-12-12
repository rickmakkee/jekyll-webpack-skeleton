import Foo from '../components/Foo';

const componentMap = {
  foo: Foo,
};

const components = [];

export default function initComponents(rootElement) {
  const componentElements = Array.from(rootElement.querySelectorAll('[data-component]'));

  componentElements.forEach(element => {
    const name = element.getAttribute('data-component');

    if (componentMap[name]) {
      const BlockConstructor = componentMap[name];
      const instance = new BlockConstructor(element);

      components.push({
        instance,
        element,
      });
    } else {
      console.warn(`Could not find DOM element with 'data-component="${name}"'`);
    }
  });
}
