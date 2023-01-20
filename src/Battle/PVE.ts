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
  }

  public fight(): number {
    this._monster.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });
    
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
