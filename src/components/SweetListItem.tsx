import React from 'react';
import { Item } from 'src/helpers';

type SweetListItemProps = { item: Item };

const SweetListItem: React.FC<SweetListItemProps> = ({ item }) => {
  return (
    <div className="SweetListItem">
      { item.name }
    </div>
  )
}

export default SweetListItem;