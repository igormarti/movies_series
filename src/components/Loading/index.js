import React from 'react';

import { LoadingFull, LoadingSmall } from './styles';

function Loading({ size = 'full' }) {
  return (
    <>
      {size === 'full' ? (
        <LoadingFull>
          <img
            src={`/assets/img/spinner-full.svg?d=${new Date()}`}
            alt="Loading"
          />
        </LoadingFull>
      ) : (
        <LoadingSmall>
          <img
            src={`/assets/img/spinner-small.svg?d=${new Date()}`}
            alt="Loading"
          />
        </LoadingSmall>
      )}
    </>
  );
}

export default Loading;
