import Race from './Race';

export default class Dwarf extends Race {
  private static _numberOfInstances = 0;

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

  public static createdRacesInstances(): number {
    this._numberOfInstances += 1;
    return this._numberOfInstances;
  }
}
