import React from 'react';
import clsx from 'clsx';
import { BareProps } from '@/types/page';

interface Props extends BareProps {
  ayeAmount?: string;
  ayeWithoutConviction?: string;
  nayAmount?: string;
  nayWithoutConviction?: string;
  turnout?: string;
}


const SuperMajorityApprove: React.FC<Props> = ({ ayeAmount, nayAmount, className }) => (
  <div className={clsx('flex', className)}>
    aye:{ayeAmount}, nay:{nayAmount}
  </div>
);

export default SuperMajorityApprove;
