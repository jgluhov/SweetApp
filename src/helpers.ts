import faker from 'faker';

export enum FlagTypes {
  FLOWER, HEART, SUN, FLASH
}

export type Flag =
  FlagTypes.FLOWER |
  FlagTypes.HEART |
  FlagTypes.SUN |
  FlagTypes.FLASH;

export const flags = [
  FlagTypes.FLOWER,
  FlagTypes.HEART,
  FlagTypes.SUN,
  FlagTypes.FLASH
]

export class Item {
  id: string;
  constructor(
    public name = '',
    public flags: Flag[] = []
  ) {
    this.id = Math.random().toString(36).substring(2, 15)
  }
}

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateItems = (max: number) => {
  return new Array(max)
    .fill(0)
    .reduce((items) => {
      const flagsCount = randomNumber(0, flags.length);
      return items.concat( new Item(faker.random.word(), flags.slice(0, flagsCount)));
    }, []);
}

