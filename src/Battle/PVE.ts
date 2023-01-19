import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _monster: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(_player);
    super.fight();
  }

  public fight(): number {
    this._monster.forEach((monster) => this.player.attack(monster));
    this._monster.forEach((monster) => monster.attack(this._player));
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
