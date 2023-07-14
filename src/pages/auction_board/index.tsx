import { Boundary, PageContent, Container, TabGroup, TabList, Tab, TabPanels, TabPanel, Text, Button } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { unwrap } from '@/utils/api'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { MetaInfo } from '@/components/Pages/Parachain/MetaInfo'
import { CrowdloanListClient } from '@/components/Pages/Parachain/CrowdloanList'
import { AuctionCountdown } from '@/components/Pages/Parachain/Common'
import { BidListClient } from '@/components/Pages/Parachain/BidList'
import { GetParachainAuctionsProps, GetParachainMetaProps, getParachainAuctions, getParachainMeta } from '@/utils/api/parachain'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ParachainAuctionLink, ParachainAuctionListLink } from '@/components/Links'

export const getServerSideProps: GetServerSideProps<
  { data: GetParachainMetaProps; page: number; host: string; auctions: GetParachainAuctionsProps | null } & BareServerSideProps
> = async (context) => {
  const page = parseInt(context.query.page as string) || 1
  const subdomain = getSubdomainFromHeaders(context.req.headers)

  const data = await getParachainMeta(subdomain)
  const auctions = await getParachainAuctions(subdomain, {
    row: 1,
    page: 0,
  })
  const chainProps = await getChainProps(subdomain)

  if (!data || data.code !== 0 || !chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page,
      host: subdomain,
      chain: chainProps,
      auctions: unwrap(auctions),
    },
  }
}

export default function Page({ host, data, chain, auctions, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const currentAuction = auctions?.auctions[0]
  return (
    <PageContent>
      <Container className="flex-1">
        <MetaInfo metaInfo={data} chain={chain} />
        <div className="countdown">
          <div className="flex mb-4 mt-6 justify-between">
            <div className="flex items-center">
              {data.auction_active ? (
                <Text block bold className="break-all">
                  Auction #{currentAuction?.auction_index}
                </Text>
              ) : (
                <Text block bold className="break-all">
                  Auction
                </Text>
              )}
            </div>
            <div>
              <ParachainAuctionListLink>
                <Button outline>Auction History</Button>
              </ParachainAuctionListLink>
              {data.auction_count && currentAuction && (
                <ParachainAuctionLink index={currentAuction?.auction_index - 1 || 1}>
                  <Button outline className="ml-5">
                    Last Auction
                  </Button>
                </ParachainAuctionLink>
              )}
            </div>
          </div>
          <>
            {data.auction_active && currentAuction ? (
              <AuctionCountdown currentAuction={currentAuction} parachainMeta={data} chain={chain}></AuctionCountdown>
            ) : (
              <Boundary className="!py-7 flex justify-center items-center">
                <div>
                  <Text block bold className="text-[#98959f]">
                    No auctions in progress
                  </Text>
                  <Text block bold className="text-[#98959f]">
                    The next auction is in preparation
                  </Text>
                </div>
              </Boundary>
            )}
          </>
        </div>
        <Text block bold className="mb-4 mt-6 break-all">
          Auction #{currentAuction?.auction_index} Bidders
        </Text>
        <Boundary className="mt-5">
          <TabGroup>
            <TabList>
              <Tab>Crowdloan</Tab>
              <Tab>Bid</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CrowdloanListClient
                  chain={chain}
                  host={host}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    statuses: [1],
                  }}
                />
              </TabPanel>
              <TabPanel>
                <BidListClient
                  parachainMetadata={data}
                  auction={currentAuction}
                  host={host}
                  chain={chain}
                  args={{
                    page: 0,
                    row: TAB_ROW,
                    from_history: true,
                    latest: true,
                    auction_index: data.auction_count,
                  }}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}
