import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _numberOfInstances = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
    private _stamina: EnergyType,
  ) {
    super(name, special, cost);
  }

  public get energyType(): EnergyType {
    return this._stamina;
  }

  public static createdArchetypeInstances(): number {
    this._numberOfInstances += 1;
    return this._numberOfInstances;
  }
}
