import faker from 'faker';
import { MdBrightnessLow } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { TiFlash } from 'react-icons/ti';
import { FaHeart } from 'react-icons/fa';
import { SortTypes } from './components/SweetListSieve';

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

export const sortItems = (items: Item[], sort: SortTypes) => {
  const sortBy = (sort: SortTypes) => {
    return sort === SortTypes.ASC ?
      (a: Item, b: Item) => b.name.localeCompare(a.name) :
      (a: Item, b: Item) => a.name.localeCompare(b.name)
  }
  const sortedItems = items.slice().sort(sortBy(sort));
  return sortedItems;
}

export const filterByFlag = (items: Item[], flag: Flag) => {
  return items.filter(item => {
    return item.flags.includes(flag);
  })
}

export const filterByTerm = (items: Item[], term: string) => {
  return items.filter(item => {
    return item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
  })
}

