import React from 'react';
import { Header } from '@tang/components';
import style from './style.module.scss';

const Mine = () => {
  return (
    <div>
      <Header />

      <div className={style['mine-item']}>我是mine</div>
    </div>
  );
};

export default Mine;