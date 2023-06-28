import { Boundary, PageContent, Container, Text, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TAB_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { getSubdomainFromHeaders } from '@/utils/url'
import { ValidatorListClient, WaitingListClient } from '@/components/Pages/Staking/ValidatorList'

export const getServerSideProps: GetServerSideProps<
  {
    host: string
  } & BareServerSideProps
> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const chainProps = await getChainProps(subdomain)
  if (!chainProps) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      host: subdomain,
      chain: chainProps,
      hostname: subdomain,
    },
  }
}

export default function Layout({ chain, host }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          Validator
        </Text>
        <Boundary>
          <TabGroup>
            <TabList>
              <Tab>Active</Tab>
              <Tab>Waiting</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ValidatorListClient
                  hostname={host}
                  args={{
                    order: 'desc',
                    order_field: 'bonded_total',
                    row: TAB_ROW,
                    page: 0,
                  }}
                  chain={chain}
                  viewAllQuery={{
                    status: 'validator',
                  }}
                  // row={TAB_ROW}
                  // page={0}
                />
              </TabPanel>
              <TabPanel>
                <WaitingListClient
                  hostname={host}
                  args={{
                    order: 'desc',
                    order_field: 'bonded_owner',
                  }}
                  chain={chain}
                  viewAllQuery={{
                    status: 'waiting',
                  }}
                  row={TAB_ROW}
                  page={1}
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Boundary>
      </Container>
    </PageContent>
  )
}