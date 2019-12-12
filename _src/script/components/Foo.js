import AbstractComponent from './AbstractComponent';

export default class Foo extends AbstractComponent {
  constructor(element) {
    super(element);

    console.log('- init component');
    console.log(this.element);
  }
}
