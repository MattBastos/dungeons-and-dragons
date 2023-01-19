import Battle from './Battle';
import Character from '../Character';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(
    private _player1: Character | Fighter,
    private _player2: Character | Fighter,
  ) {
    super(_player1);
    super.fight();
  }

  public fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
