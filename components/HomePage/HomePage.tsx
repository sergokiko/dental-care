import React, { FC } from 'react';
import { Page, PageProps, cntrlSdkContext } from '@cntrl-site/sdk-nextjs';

export const HomePage: FC<PageProps> = (props) => {
  cntrlSdkContext.init(props);
  return (
    <>
      <Page {...props} />
    </>
  );
};
