import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

const Introduction = () => {
  return (
    <>
      <div className={styles.introduce}>
        안녕하세요! 그루밍입니다! 😆
        <p>Next JS와 EC2로 배포해보았습니다!</p>
      </div>
      <Link href='/'>
        <a>메인으로 돌아가기</a>
      </Link>
    </>
  );
};

export default Introduction;
