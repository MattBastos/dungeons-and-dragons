import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _numberOfInstances = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name, special, cost);
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    this._numberOfInstances += 1;
    return this._numberOfInstances;
  }
}
