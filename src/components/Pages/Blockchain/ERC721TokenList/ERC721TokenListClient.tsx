'use client'

import React from 'react'
import { BareProps } from '@/types/page'
import { Token, Account } from '@/types/api'
import { unwrap, useEvmTokens } from '@/utils/api'
import { Empty } from '@/components/Empty'
import { Loading } from '@/components/Loading'
import { TAB_ROW } from '@/config/constants'
import { ERC721TokenList } from '.'
import { ERC721TokenListLink } from '@/components/Links'
import { Button } from '@/ui'

type UseEvmTokensArgs = Parameters<typeof useEvmTokens>[1]
interface Props extends BareProps, UseEvmTokensArgs {
  host: string
  page: number
  row: number
  useDecimal?: boolean
}

const ERC20TokenListClient: React.FC<Props> = ({ host, useDecimal, page = 0, row = TAB_ROW }) => {
  const { data, error, isLoading } = useEvmTokens(host, {
    page,
    row,
    category: 'erc721',
  })
  const asset = unwrap(data)

  if (isLoading) return <Loading />
  if (!asset) return <Empty />

  return (
    <div>
      <ERC721TokenList tokens={asset.list} useDecimal={useDecimal} />
      {asset.count - TAB_ROW > 0 ? (
        <ERC721TokenListLink query={{}}>
          <Button outline className="mt-4">
            View Other {asset.count - TAB_ROW} ERC-20 Token
          </Button>
        </ERC721TokenListLink>
      ) : null}
    </div>
  )
}
export default ERC20TokenListClient
