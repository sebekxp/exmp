'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadAsset } from '../redux/slices/assets';

export function HeroAsset() {
  const dispatch = useAppDispatch();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const id = 'hero';
  return (
    <Image
      id={id}
      className="imgaes-buffer invisible z-10"
      ref={imgRef}
      src={'/sprites.png'}
      alt="Hero"
      fill={true}
      onLoad={() => dispatch(loadAsset({ key: 'HeroAsset', url: '/hero.webp', id: id }))}
    />
  );
}
