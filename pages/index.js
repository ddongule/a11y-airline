import Link from 'next/link';
import React from 'react';

const Index = () => {
  return (
    <div>
      <h1>그루밍의 deploy book</h1>
      <Link href='/introduction'>
        <a>Introduction page</a>
      </Link>
      <Link href='/a11y'>
        <a>A11y Mission</a>
      </Link>
      <Link href='/apple'>
        <a>Apple Clone Mission</a>
      </Link>
    </div>
  );
};

export default Index;
