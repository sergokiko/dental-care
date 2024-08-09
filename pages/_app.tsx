import '../styles/reset.scss';
import type { AppProps } from 'next/app';
import { CntrlProvider, cntrlSdkContext } from '@cntrl-site/sdk-nextjs';
import { Gellery } from '../components/Gellery/Gellery';

// place for your custom items definitions
// cntrlSdkContext.customItems.define('customItem1', CustomItem1);
cntrlSdkContext.customItems.define('gallery', Gellery);

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
