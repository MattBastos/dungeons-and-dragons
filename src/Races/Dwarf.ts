import Race from './Race';

export default class Dwarf extends Race {
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
