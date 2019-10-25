import faker from 'faker';
import { MdBrightnessLow } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { TiFlash } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';

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

export const flagIconsMap = {
  [FlagTypes.FLOWER]: MdBrightnessLow,
  [FlagTypes.SUN]: FiSun,
  [FlagTypes.FLASH]: TiFlash,
  [FlagTypes.HEART]: FaHeart
}

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

