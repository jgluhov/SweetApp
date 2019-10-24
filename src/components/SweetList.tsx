import React from 'react';
import { Item } from 'src/helpers';

interface SweetListProps {
  items?: Item[];
}

const defaultProps = {
  items: []
}

const SweetList: React.FC<SweetListProps> = () => {
  return (
    <div className="SweetList">
      Hello
    </div>
  )
}

Object.assign(SweetList, { defaultProps });

export default SweetList;