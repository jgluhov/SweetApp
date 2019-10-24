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
  constructor(public name = '', flags: Flag[] = []) {
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
      return items.concat( new Item('item', flags.slice(0, flagsCount)));
    }, []);
}

