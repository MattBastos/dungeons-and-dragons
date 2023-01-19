import Monster from './Monster';
import { SimpleFighter } from './Fighter';

export default class Dragon extends Monster {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 80;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
