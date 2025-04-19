'use client';

import styles from '@/components/gridlayout.module.scss';
import { ReactNode } from 'react';

type GridLayoutProps = {
  children: ReactNode;
};

export default function GridLayout({ children }: GridLayoutProps) {
  return <div className={styles.gridContainer}>{children}</div>;
}
