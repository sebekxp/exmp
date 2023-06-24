'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadAsset } from '../redux/slices/assets';
import { MAP_DIMENSIONS } from './constans';

export function HeroAsset() {
  const dispatch = useAppDispatch();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const id = 'hero';
  return (
    <Image
      id={id}
      className="imgaes-buffer invisible"
      ref={imgRef}
      src={'/hero.webp'}
      alt="Hero"
      width={MAP_DIMENSIONS.TILE_SIZE}
      height={MAP_DIMENSIONS.TILE_SIZE}
      onLoad={() => dispatch(loadAsset({ key: 'HeroAsset', url: '/hero.webp', id: id }))}
    />
  );
}
