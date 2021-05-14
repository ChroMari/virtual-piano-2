/*
  У меня есть класс. Данный класс будет создавать мне одну клавишу. Так как клавиши имеют одну структуру, разница только в классе
  Также клавиши могут менять подсказки с клавиатурного обозначения на ноту.
*/

class Key {
  typeKey: string; // white || black

  gameMode: string; // notes || letters

  divKey: HTMLElement; // создаём обёртку для клавиши, чтобы потом с ней делать манипуляции

  constructor (typeKey: string, gameMode: string) {
    this.typeKey = typeKey;
    this.gameMode = gameMode;
    this.divKey = document.createElement('div');
  }

  setgameMode (newGameMode: string) { // изменяет тип отображения на клавишах
    this.gameMode = newGameMode;
    this.divKey.textContent = this.gameMode;
  }

  onDownKey () { // срабатывает когда нажимаем на клавишу
    this.divKey.classList.add('piano__key--active');

    // проигрываем музыку


  }

  render () { // отрисовываем клавишу пианино
    /* <div class="pianokey">
        <div class="white">C2</div>
      </div>
    */
    const div = document.createElement('div');
    div.classList.add('piano__key');

    this.divKey.classList.add(this.typeKey);
    this.divKey.textContent = this.gameMode;
    div.appendChild(this.divKey);

    this.divKey.onmousedown = () => this.onDownKey();
    this.divKey.onmouseup = () => this.divKey.classList.remove('piano__key--active');

    return div;
  }
}

export default Key;
