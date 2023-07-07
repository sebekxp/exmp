'use client';
import Image from 'next/image';
import { useAppDispatch } from '../hooks/redux';
import { loadAsset } from '../redux/slices/assets';

export function MapAsset() {
  const dispatch = useAppDispatch();
  const id = 'map';
  return (
    <div className="relative h-screen">
      <Image
        className="relative p-5"
        id={id}
        src="/map.png"
        alt="Map"
        fill={true}
        onLoad={() => dispatch(loadAsset({ key: 'MapAsset', url: '/map.png', id: id }))}
      />
    </div>
  );
}
