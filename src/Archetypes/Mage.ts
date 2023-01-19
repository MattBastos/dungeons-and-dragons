import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _numberOfInstances = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
    private _mana: EnergyType,
  ) {
    super(name, special, cost);
  }

  public get energyType(): EnergyType {
    return this._mana;
  }

  public static createdArchetypeInstances(): number {
    this._numberOfInstances += 1;
    return this._numberOfInstances;
  }
}
