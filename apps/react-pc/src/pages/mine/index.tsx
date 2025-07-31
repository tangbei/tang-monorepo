import React from 'react';
import { Button } from 'antd';
import { proxyImage } from '@/utils/proxy/imageProxy';
import style from './style.module.scss';

const Mine = () => {

  const handleClick = () => {

    // 设置实际要加载的图片
    proxyImage.setSrc('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');
  };

  return (
    <div>
      <div className={style['mine-item']}>
        <Button onClick={() => handleClick()}>点击</Button>
      </div>
    </div>
  );
};

export default Mine;