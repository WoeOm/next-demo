import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr } from '@/ui'
import { BlockLink, ExtrinsicLink } from '@/components/Links'
import { TimeFromNow } from '@/components/Time'
import { Transfer } from '@/types/api'
import { Identicon } from '@/components/Identicon'
import { Balance } from '@/components/Balance'
import { TransferStatus } from './TransferStatus'

interface Props extends BareProps, BareServerSideProps {
  transfers: Transfer[]
}

const Page: React.FC<Props> = ({ transfers, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Extrinsic Id</Th>
          <Th>Block</Th>
          <Th>Time</Th>
          <Th>From</Th>
          <Th>To</Th>
          <Th>Value</Th>
          <Th>Result</Th>
        </Tr>
        {transfers.map((transfer) => {
          return (
            <Tr key={transfer.extrinsic_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={transfer.extrinsic_index} />
              </Td>
              <Td>
                <BlockLink blockNumber={transfer.block_num} />
              </Td>
              <Td>
                <TimeFromNow date={transfer.block_timestamp} />
              </Td>
              <Td>
                <Identicon account={transfer.from_account_display} />
              </Td>
              <Td>
                <Identicon account={transfer.to_account_display} />
              </Td>
              <Td>
                <Balance value={transfer.amount_v2} token={chain.nativeTokenConf} />
              </Td>
              <Td>
                <TransferStatus success={transfer.success} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Page