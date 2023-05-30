import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getTokenDetail, GetTokenDetailProps } from '@/utils/api'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import Image from 'next/image'
import { BlockInfo } from '@/components/Pages/Blockchain/BlockInfo'
import { AccountListClient } from '@/components/Pages/Blockchain/AccountList'
import { HolderListClient } from '@/components/Pages/Blockchain/HolderList'
import { TransferListClient } from '@/components/Pages/Blockchain/TransferList'
import { TAB_ROW } from '@/config/constants'
import { BlockLogs } from '@/components/Pages/Blockchain/BlockLogs'
import defaultTokenIcon from '@/styles/images/default-token.png'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
    data: GetTokenDetailProps
    tab: string
    unique_id: string
  } & BareServerSideProps,
  { id: string }
> = async (context) => {
  const host = context.req.headers.host || ''
  const tab = (context.query.tab || '')?.toString()
  const unique_id = (context.query.customTokenId || '')?.toString()

  if (typeof unique_id === 'undefined') {
    return {
      notFound: true,
    }
  }

  const data = await getTokenDetail(host, {
    include_extends: true,
    unique_ids: [unique_id],
  })
  const chainProps = await getChainProps(context.req.headers.host)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host,
      data: data.data,
      tab,
      unique_id,
      chain: chainProps,
    },
  }
}

export default function Page({ host, data, chain, unique_id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const provider = unique_id?.split('/')[0] || 'system'
  const system = data[provider]?.[0]
  const holders = system?.['extends']?.['holders'] || 0
  return (
    <PageContent>
      <Container className="flex-1">
        <Boundary className="lg:px-7 lg:py-7 flex items-start">
          <div className="symbol-img mr-7">
            <Image src={defaultTokenIcon} width={70} height={70} alt={'token'} />
            {/* <div className="asset-name">
            <span className="symbol">{system?.symbol}</span>
            {system?.name}
            </div> */}
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="flex items-center">
                <div className="text-xl mr-[60px]">{system?.symbol}</div>
              </div>
              <div className="w-px h-[70px] bg-[#e7eaf3] ml-12 mr-7"></div>
              <div className="flex flex-col justify-between mr-12">
                <div className="label text-sm font-semibold">Decimals</div>
                <div className="text-sm">{system?.decimals || '-'}</div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="label text-sm font-semibold">Holders</div>
                <div className="text-sm">{holders > 0 ? ` ${holders}` : '-'}</div>
              </div>
            </div>
          </div>
        </Boundary>

        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Holders</Tab>
              <Tab>{`${system?.symbol} Transfers`}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <HolderListClient id={system?.unique_id || ''} host={host} page={0} row={TAB_ROW} />
                {/* <AccountListClient useDecimal id={system?.symbol || ''} chain={chain} host={host} page={0} row={TAB_ROW} /> */}
              </TabPanel>
              <TabPanel>
                <TransferListClient host={host} chain={chain} page={0} row={TAB_ROW} asset_unique_id={system?.unique_id} token={system} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
