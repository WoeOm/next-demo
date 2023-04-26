import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

const Empty: React.FC<BareProps> = ({ children, className }) => (
  <div className={clsx('flex', className)}>
    Empty
  </div>
);

export default Empty;
