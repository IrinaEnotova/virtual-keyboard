'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.createElement('div'),
        heading = document.createElement('h1'),
        textarea = document.createElement('textarea'),
        keyboard = document.createElement('div'),
        description = document.createElement('p'),
        language = document.createElement('p');

  let keyboardRows = [];

  const addElementToWrapper = (element, classNames) => {
    element.className = classNames;
    wrapper.append(element);
  };

  const addKeyboardRow = () => {
    const element = document.createElement('div');
    element.className = 'keyboard--row row';
    keyboard.append(element);
    keyboardRows.push(element);
  }

  wrapper.classList.add('wrapper');
  document.body.append(wrapper);

  addElementToWrapper(heading, 'heading');
  heading.textContent = 'Virtual keyboard';
  addElementToWrapper(textarea, 'textarea');
  addElementToWrapper(keyboard, 'keyboard');
  addElementToWrapper(description, 'description');
  description.textContent = 'Клавиатура создана в операционной системе Windows';
  addElementToWrapper(language, 'description');
  language.textContent = 'Для переключения языка используйте комбинацию - левые Ctrl + Alt';

  for(let i = 0; i < 5; i++) {
    addKeyboardRow();
  }

  class Key {
    constructor(numRow, keyName, rusDown, rusUp, engDown, engUp) {
      this.numRow = numRow;
      this.keyName = keyName;
      this.rusDown = rusDown;
      this.rusUp = rusUp;
      this.engDown = engDown;
      this.engUp = engUp;
    }
    render() {
      const element = document.createElement('div');
      element.className = `keyboard--key key ${this.keyName}`;
      element.innerHTML = `
      <span class="rus hidden">
        <span class="caseDown hidden">${this.rusDown}</span>
        <span class="caseUp hidden">${this.rusUp}</span>
        <span class="caps hidden">${this.rusUp}</span>
        <span class="shiftCaps hidden">${this.rusDown}</span>
      </span>
      <span class="eng">
        <span class="caseDown">${this.engDown}</span>
        <span class="caseUp hidden">${this.engUp}</span>
        <span class="caps hidden">${this.engUp}</span>
        <span class="shiftCaps hidden">${this.engDown}</span>
      </span>
      `;
      keyboardRows[this.numRow].append(element);
    }
  }

  class KeySymbol extends Key {
    render() {
      const element = document.createElement('div');
      element.className = `keyboard--key key ${this.keyName}`;
      element.innerHTML = `
      <span class="rus hidden">
        <span class="caseDown hidden">${this.rusDown}</span>
        <span class="caseUp hidden">${this.rusUp}</span>
        <span class="caps hidden">${this.rusUp}</span>
        <span class="shiftCaps hidden">${this.rusDown}</span>
      </span>
      <span class="eng">
        <span class="caseDown">${this.engDown}</span>
        <span class="caseUp hidden">${this.engUp}</span>
        <span class="caps hidden">${this.engDown}</span>
        <span class="shiftCaps hidden">${this.engUp}</span>
      </span>
      `;
      keyboardRows[this.numRow].append(element);
    }
  }

  class KeyDigit extends Key {
    render() {
      const element = document.createElement('div');
      element.className = `keyboard--key key Digit${this.keyName}`;
      element.innerHTML = `
      <span class="rus hidden">
        <span class="caseDown hidden">${this.rusDown}</span>
        <span class="caseUp hidden">${this.rusUp}</span>
        <span class="caps hidden">${this.rusDown}</span>
        <span class="shiftCaps hidden">${this.rusUp}</span>
      </span>
      <span class="eng">
        <span class="caseDown">${this.engDown}</span>
        <span class="caseUp hidden">${this.engUp}</span>
        <span class="caps hidden">${this.engDown}</span>
        <span class="shiftCaps hidden">${this.engUp}</span>
      </span>
      `;
      keyboardRows[this.numRow].append(element);
    }
  }

  class KeyControl {
    constructor(numRow, keyName) {
      this.numRow = numRow;
      this.keyName = keyName;
    }
    render() {
      const element = document.createElement('div');
      element.className = `keyboard--key key control ${this.keyName.toLowerCase()}`;
      element.innerHTML = `
      <span class="rus hidden">
        <span class="caseDown hidden">${this.keyName}</span>
        <span class="caseUp hidden">${this.keyName}</span>
        <span class="caps hidden">${this.keyName}</span>
        <span class="shiftCaps hidden">${this.keyName}</span>
      </span>
      <span class="eng">
        <span class="caseDown">${this.keyName}</span>
        <span class="caseUp hidden">${this.keyName}</span>
        <span class="caps hidden">${this.keyName}</span>
        <span class="shiftCaps hidden">${this.keyName}</span>
      </span>
      `;
      keyboardRows[this.numRow].append(element);
    }
  }

  // first row
  new KeySymbol(0, 'Backquote', 'ё', 'Ё', '\`', '~').render();
  new KeyDigit(0, 1, '1', '!', '1', '!').render();
  new KeyDigit(0, 2, '2', '"', '2', '@').render();
  new KeyDigit(0, 3, '3', '№', '3', '#').render();
  new KeyDigit(0, 4, '4', ';', '4', '$').render();
  new KeyDigit(0, 5, '5', '%', '5', '%').render();
  new KeyDigit(0, 6, '6', ':', '6', '^').render();
  new KeyDigit(0, 7, '7', '?', '7', '&').render();
  new KeyDigit(0, 8, '8', '*', '8', '*').render();
  new KeyDigit(0, 9, '9', '(', '9', '(').render();
  new KeyDigit(0, 0, '0', ')', '0', ')').render();
  new KeyDigit(0, 'Minus', '-', '_', '-', '_').render();
  new KeyDigit(0, 'Equal', '=', '+', '=', '+').render();
  new KeyControl(0, 'Backspace').render();


});