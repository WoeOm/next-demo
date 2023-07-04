import React from 'react'
import { BareProps, BareServerSideProps } from '@/types/page'
import { Table, Td, Th, Tr, Text } from '@/ui'
import { Identicon } from '@/components/Identicon'
import { ExtrinsicLink } from '@/components/Links'
import { ReferendaVotesV2 } from '@/types/api'
import { Time } from '@/components/Time'
import { ReplyV2Status } from '@/components/Status'
import { Balance } from '@/components/Balance'

interface Props extends BareProps, BareServerSideProps {
  votes: ReferendaVotesV2[]
}

const ReferendaV2Votes: React.FC<Props> = ({ votes, chain }) => {
  return (
    <Table className="w-full">
      <tbody>
        <Tr>
          <Th>Extrinsic ID</Th>
          <Th>Account</Th>
          <Th>Locked Value</Th>
          <Th>Time</Th>
          <Th>Voted</Th>
        </Tr>

        {votes?.map((item, index) => {
          return (
            <Tr key={item.extrinsic_index}>
              <Td>
                <ExtrinsicLink extrinsicIndex={item.extrinsic_index} />
              </Td>
              <Td>
                <Identicon account={item.account} />
              </Td>
              <Td>
                <Text className="whitespace-nowrap">
                  {item.conviction} x <Balance value={item.amount} token={chain?.nativeTokenConf} />
                </Text>
              </Td>
              <Td>
                <Time date={item.voting_time} />
              </Td>
              <Td>
                <ReplyV2Status type={item.status} valid={item.valid} />
              </Td>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ReferendaV2Votes