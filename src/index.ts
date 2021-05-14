// @ts-ignore
import Key from './js/Key.ts'; // подключаем класс, который будет отрисовывать нам клавиши

import keyData from './js/db/key-data'; // база данных для клавиш, которые будут формировать пианино

import './styles/style.sass';

const { body } = document;

class Piano {
  text: string;

  constructor () {
    this.text = 'hi';
  }

  render () {
    const piano: HTMLElement =  document.createElement('div');
    piano.classList.add('piano');
    piano.textContent = this.text;

    interface KeyDataItem {
      typeKey: string;
      notes: string;
      letters: string;
    }

    keyData.forEach((item: KeyDataItem) => {
      const key = new Key(item.typeKey, item.notes); // рисует, но при этом остаётся ошибка
      piano.appendChild(key.render());
      return item;
    });

    return piano;
  }
}

const pianoSelect = new Piano ();

body.appendChild(pianoSelect.render());
