import React from 'react';
import {wrapper} from '../redux/store';

import '../styles/globals.scss';
import '../styles/pages/rooms.sass'


function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(App)