'use client';
import Image from 'next/image';
import { useAppDispatch } from '../hooks/redux';
import { loadAsset } from '../redux/slices/assets';

export function HeroAsset() {
  const dispatch = useAppDispatch();
  const id = 'hero';
  return (
    <Image
      id={id}
      className="images-buffer invisible z-10"
      src={'/sprites.png'}
      alt="Hero"
      fill={true}
      onLoad={() => dispatch(loadAsset({ key: 'HeroAsset', url: '/sprites.png', id: id }))}
    />
  );
}
