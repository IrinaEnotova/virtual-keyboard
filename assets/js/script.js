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
      element.className = `keyboard--key key Key${this.keyName}`;
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

  class Symbol extends Key {
    render() {
      const element = document.createElement('div');
      element.className = `keyboard--key key ${this.keyName}`;
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

  // second row
  new KeyControl(1, 'Tab').render();
  new Key(1, 'Q', 'й', 'Й', 'q', 'Q').render();
  new Key(1, 'W', 'ц', 'Ц', 'w', 'W').render();
  new Key(1, 'E', 'у', 'У', 'e', 'E').render();
  new Key(1, 'R', 'к', 'К', 'r', 'R').render();
  new Key(1, 'T', 'е', 'Е', 't', 'T').render();
  new Key(1, 'Y', 'н', 'Н', 'y', 'Y').render();
  new Key(1, 'U', 'г', 'Г', 'u', 'U').render();
  new Key(1, 'I', 'ш', 'Ш', 'i', 'I').render();
  new Key(1, 'O', 'щ', 'Щ', 'o', 'O').render();
  new Key(1, 'P', 'з', 'З', 'p', 'P').render();
  new Key(1, '', 'ц', 'Ц', 'w', 'W').render();
  new KeySymbol(1, 'BraketLeft', 'х', 'Х', '[', '{').render();
  new KeySymbol(1, 'BraketRight', 'ъ', 'Ъ', ']', '}').render();
  new Symbol(1, 'Backslash', '\\', '/', '\\', '|').render();
  new KeyControl(1, 'Del').render();

  // third row
  new KeyControl(2, 'CapsLock').render();
  new Key(2, 'A', 'ф', 'Ф', 'a', 'A').render();
  new Key(2, 'S', 'ы', 'Ы', 's', 'S').render();
  new Key(2, 'D', 'в', 'В', 'd', 'D').render();
  new Key(2, 'F', 'а', 'А', 'f', 'F').render();
  new Key(2, 'G', 'п', 'П', 'g', 'G').render();
  new Key(2, 'H', 'р', 'Р', 'h', 'H').render();
  new Key(2, 'J', 'о', 'О', 'j', 'J').render();
  new Key(2, 'K', 'л', 'Л', 'k', 'K').render();
  new Key(2, 'L', 'д', 'Д', 'l', 'L').render();
  new KeySymbol(2, 'Semicolon', 'ж', 'Ж', ';', ':').render();
  new KeySymbol(2, 'Quote', 'э', 'Э', '\'', '"').render();
  new KeyControl(2, 'Enter').render();
});