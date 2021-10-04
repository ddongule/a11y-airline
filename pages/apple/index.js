import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <>
      <div>
        <h1>Apple Clone 사이트</h1>
        <h2>S3 + CloudFront로 배포해보았습니다!</h2>
        <a href='https://d1mebyiq9on4aw.cloudfront.net'>🍎애플 사이트 구경가기</a>
      </div>
      <Link href='/'>
        <a>메인으로 돌아가기</a>
      </Link>
    </>
  );
};

export default index;
