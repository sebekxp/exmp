'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadAsset } from '../redux/slices/assets';
import { HEIGHT, WIDTH } from './constans';

export function MapAsset() {
  const dispatch = useAppDispatch();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const id = 'map';

  return (
    <Image
      id={id}
      ref={imgRef}
      src="/map.png"
      alt="Map"
      width={WIDTH}
      height={HEIGHT}
      onLoad={() => dispatch(loadAsset({ key: 'MapAsset', url: '/map.png', id: id }))}
    />
  );
}