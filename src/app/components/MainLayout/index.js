'use client';

import Image from 'next/image';
import styles from './layout.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MainLayout({ children }) {
  const router = useRouter();

  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>
        <Image
          src='/vercel.svg'
          alt='logo'
          width={100}
          height={24}
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        HEADER

        <Link href="/login">
          To Login
        </Link>
      </header>
      {children}
    </div>
  );
}