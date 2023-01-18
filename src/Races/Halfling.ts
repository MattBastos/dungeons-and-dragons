import Race from './Race';

export default class Halfling extends Race {
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
