import Link from 'next/link';
import React from 'react';
import SpinButton from '../../src/components/SpinButton';

const a11y = () => {
  return (
    <div>
      <h1>그루밍의 접근성 미션 ꒰◍ॢ•ᴗ•◍ॢ꒱ 🧡</h1>
      <SpinButton />
      <Link href='/'>
        <a>메인으로 돌아가기</a>
      </Link>
    </div>
  );
};

export default a11y;
