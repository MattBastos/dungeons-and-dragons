import Race from './Race';

export default class Elf extends Race {
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
  }

  public get maxLifePoints(): number {
    return this.maxLifePoints;
  }
}
