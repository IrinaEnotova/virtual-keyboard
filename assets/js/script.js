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
  textarea.placeholder = 'Введите текст';
  // textarea.focus();
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
    constructor(numRow, keyName, engDown) {
      this.numRow = numRow;
      this.keyName = keyName;
      this.engDown = engDown;
    }
    render() {
      const element = document.createElement('div');
      element.className = `keyboard--key control ${this.keyName.toLowerCase()}`;
      element.innerHTML = `
      <span class="rus hidden">
        <span class="caseDown hidden">${this.engDown}</span>
        <span class="caseUp hidden">${this.engDown}</span>
        <span class="caps hidden">${this.engDown}</span>
        <span class="shiftCaps hidden">${this.engDown}</span>
      </span>
      <span class="eng">
        <span class="caseDown">${this.engDown}</span>
        <span class="caseUp hidden">${this.engDown}</span>
        <span class="caps hidden">${this.engDown}</span>
        <span class="shiftCaps hidden">${this.engDown}</span>
      </span>
      `;
      keyboardRows[this.numRow].append(element);
    }
  }

  // first row
  new KeySymbol(0, 'Backquote', 'ё', 'Ё', '`', '~').render();
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
  new KeyControl(0, 'Backspace', 'Backspace').render();

  // second row
  new KeyControl(1, 'Tab', 'Tab').render();
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
  new KeySymbol(1, 'BraketLeft', 'х', 'Х', '[', '{').render();
  new KeySymbol(1, 'BraketRight', 'ъ', 'Ъ', ']', '}').render();
  new Symbol(1, 'Backslash', '\\', '/', '\\', '|').render();
  new KeyControl(1, 'Del', 'Del').render();

  // third row
  new KeyControl(2, 'CapsLock', 'CapsLock').render();
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
  new KeyControl(2, 'Enter', 'Enter').render();

  // fourth row
  new KeyControl(3, 'ShiftLeft', 'Shift').render();
  new Key(3, 'Z', 'я', 'Я', 'z', 'Z').render();
  new Key(3, 'X', 'ч', 'Ч', 'x', 'X').render();
  new Key(3, 'C', 'с', 'С', 'c', 'C').render();
  new Key(3, 'V', 'м', 'М', 'v', 'V').render();
  new Key(3, 'B', 'и', 'И', 'b', 'B').render();
  new Key(3, 'N', 'т', 'Т', 'n', 'N').render();
  new Key(3, 'M', 'ь', 'Ь', 'm', 'M').render();
  new KeySymbol(3, 'Comma', 'б', 'Б', ',', '<').render();
  new KeySymbol(3, 'Period', 'ю', 'Ю', '.', '>').render();
  new Symbol(3, 'Slash', '.', ',', '/', '?').render();
  new KeyControl(3, 'ArrowUp', '▲').render();
  new KeyControl(3, 'ShiftRight', 'Shift').render();

  // fifth row
  new KeyControl(4, 'CtrlRight', 'Ctrl').render();
  new KeyControl(4, 'Win', 'Win').render();
  new KeyControl(4, 'Alt', 'Alt').render();
  new KeyControl(4, 'Space', ' ').render();
  new KeyControl(4, 'Alt', 'Alt').render();
  new KeyControl(4, 'ArrowLeft', '◄').render();
  new KeyControl(4, 'ArrowDown', '▼').render();
  new KeyControl(4, 'ArrowRight', '►').render();
  new KeyControl(4, 'CtrlLeft', 'Ctrl').render();

  const keys = document.querySelectorAll('.key');
  
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      const keysVar = key.querySelectorAll('span span');
      keysVar.forEach((span) => {
        if(!span.classList.contains('hidden')) {
          textarea.value += span.textContent;
        }
      });
    });
  });

  document.addEventListener('keydown', (event) => {
    keys.forEach((key) => {
      textarea.focus();
      const keysVar = key.querySelectorAll('span span');
      keysVar.forEach((span) => {
        let keysValue = [];
        keysValue.push(span.textContent);
        if(keysValue.indexOf(event.key) != -1) {
          key.classList.add('active-key');
        }
      });
    });
  });

  document.addEventListener('keyup', () => {
    keys.forEach((key) => {
      key.classList.remove('active-key');
    });
  });

  let langStr;

  document.addEventListener("keydown", function(event) {
    // CAPSLOCK
    if(event.key === 'CapsLock') {
      applyCaps();
    }

    // CTRL + ALT
    if(event.ctrlKey) {
      langStr = 'ctrl';
    }
    if(event.altKey && langStr) {
      keys.forEach((key) => {
        const keyLangVar = key.children;
        if(!keyLangVar[0].classList.contains('hidden')) {
          keyLangVar[0].classList.add('hidden');
          for(let k = 0; k < keyLangVar[0].children.length; k++) {
            keyLangVar[0].children[k].classList.add('hidden');
          }
          keyLangVar[1].children[0].classList.remove('hidden');
          keyLangVar[1].classList.remove('hidden');
        } else {
          keyLangVar[1].classList.add('hidden');
          for(let k = 0; k < keyLangVar[1].children.length; k++) {
            keyLangVar[1].children[k].classList.add('hidden');
          }
          keyLangVar[0].children[0].classList.remove('hidden');
          keyLangVar[0].classList.remove('hidden');
        }
      })
    }
  });


  function applyCaps() {
    keys.forEach((key) => {
      for(let j = 0; j < key.children.length; j++) {
        if(!key.children[j].classList.contains('hidden')) {
          for(let s = 0; s < key.children[j].children.length; s++) {
            if(key.children[j].children[s].classList.contains('caseDown')) {
              key.children[j].children[s].classList.toggle('hidden');
              document.querySelector('.capslock').classList.toggle('active-caps');
            } 
            if(key.children[j].children[s].classList.contains('caps')) {
              key.children[j].children[s].classList.toggle('hidden');
              // document.querySelector('.capslock').classList.add('active-caps');
            } 
          }
        }
      }
    })
  }

  document.querySelector('.capslock').addEventListener('click', applyCaps);

})