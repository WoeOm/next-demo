import { Boundary, PageContent, Container, Text, Pagination, Flex } from '@/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getTreasuryTips, GetTreasuryTipsProps } from '@/utils/api';
import { PAGE_ROW } from '@/config/constants';
import { TreasuryTipsList } from '@/components/Governance';

export const getServerSideProps: GetServerSideProps<{
  data: GetTreasuryTipsProps,
  page: number,
}> = async (context) => {
  const page = parseInt(context.query.page as string) || 1;
  const data = await getTreasuryTips(context.req.headers.host || '', { "row": PAGE_ROW, "page": page - 1 });

  if (!data || data.code !== 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      page: page,
    },
  }
}

export default function Layout({ data, page }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageContent>
      <Container className='flex-1'>
        <Text block bold className='mb-2'>Treasury Tips</Text>
        <Boundary>
          <TreasuryTipsList proposals={data.list} />
        </Boundary>
        <Flex className='mt-5 flex-row-reverse'>
          <Pagination total={data.count} pageSize={PAGE_ROW} current={page} urlRender={(_page) => `/treasury_tip?page=${_page}`} />
        </Flex>
      </Container>
    </PageContent >
  );
}