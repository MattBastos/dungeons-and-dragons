export default abstract class Race {
  private static _numberOfInstances = 0;

  constructor(
    private _name: string,
    private _dexterity: number,
  ) { }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    try {
      this._numberOfInstances += 1;
      return this._numberOfInstances;
    } catch {
      throw new Error('Not implemented');
    }
  }
}
