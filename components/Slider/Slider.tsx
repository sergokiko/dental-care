import React, { FC, ReactNode } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

interface Props {
  content: ReactNode[];
}

export const Slider: FC<Props> = ({ content }) => {
  return (
    <Splide options={{
      type: 'loop',
      arrows: false,
      easing: 'ease-out',
      autoplay: true,
      interval: 2000
    }}>
      {content.map((el, i) => {
        return (
          <SplideSlide key={i}>
            {el}
          </SplideSlide>
        )
      })}
    </Splide>
  );
};
