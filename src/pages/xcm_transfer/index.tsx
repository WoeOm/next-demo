import { Boundary, PageContent, Container, Flex, Pagination, Text } from '@/ui'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getXCMList, GetXCMListProps } from '@/utils/api'
import { PAGE_ROW } from '@/config/constants'
import { getChainProps } from '@/utils/chain'
import { BareServerSideProps } from '@/types/page'
import { MessageList } from '@/components/Pages/XCM/MessageList'
import { getSubdomainFromHeaders } from '@/utils/url'

export const getServerSideProps: GetServerSideProps<{ data: GetXCMListProps; page: number } & BareServerSideProps> = async (context) => {
  const subdomain = getSubdomainFromHeaders(context.req.headers)
  const page = parseInt(context.query.page as string) || 1
  let data = await getXCMList(subdomain, {
    row: PAGE_ROW,
    page: page - 1,
    message_type: 'transfer',
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
      chain: chainProps,
    },
  }
}

export default function Page({ data, chain, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className="flex-1">
        <Text block bold className="mb-4 break-all">
          XCM Transfers
        </Text>
        <Boundary>
          <MessageList transfers={data.list} chain={chain} token={chain.nativeTokenConf} disableColumn={{ version: true }} />
        </Boundary>
        <Flex className="mt-5 flex-row-reverse">
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/xcm_transfer?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent>
  )
}
