import Race from './Race';

export default class Orc extends Race {
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
