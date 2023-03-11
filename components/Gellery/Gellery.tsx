import React from 'react';
import { Slider } from '../Slider/Slider';

const assets = [
  '/upload-700f8e8e-a4b1-4512-b088-a2a662cac799.webp',
  '/upload-d327fbe5-7159-4f78-82c8-94078901cf4b.webp',
  '/upload-d60520a2-ff60-4908-a0ec-834ecdc6eefc.webp',
  '/upload-e609e7a5-a552-4908-8ce0-2569c081065a.webp',
  '/upload-f081275e-1451-4a71-b659-a598037fcb28.webp'
];

export const Gellery = () => {
  return (
    <>
      <Slider
        content={
        assets.map(a => <div key={a} className={'slider-wrapper'}><img src={a} className={'slider-img'} /></div>)
        }
      />
      <style jsx>{`
        .slider-wrapper {
          width: 100%;
          height: 100%;
        }
        .slider-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
