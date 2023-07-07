'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { loadAsset } from '../redux/slices/assets';

export function MapAsset() {
  const dispatch = useAppDispatch();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const id = 'map';
  return (
    <div className="relative h-screen">
      <Image
        className="relative p-5"
        id={id}
        ref={imgRef}
        src="/map.png"
        alt="Map"
        fill={true}
        onLoad={() => dispatch(loadAsset({ key: 'MapAsset', url: '/map.png', id: id }))}
      />
    </div>
  );
}
