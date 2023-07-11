import {
  APIWarpperProps,
  Block,
  BlockDetail,
  Event,
  Extrinsic,
  ExtrinsicDetail,
  TokenMetadata,
  Log,
  Transfer,
  Account,
  AccountDetail,
  Provider,
  Token,
  Asset,
  Holder,
  AssetHolder,
  AssetActivity,
  DailyStatistics,
  DataStatistics,
} from '@/types/api'
import { subscanFetch, swrFetcher } from './fetcher'
import useSWR from 'swr'

export interface GetTokenUniqueIdProps {
  detail: Record<string, TokenMetadata>
  token: string[]
  unique_id: string[]
}

export async function getTokenUniqueId(
  hostname = '',
  params: { t?: string; id?: string; q?: string }
): Promise<APIWarpperProps<GetTokenUniqueIdProps>> {
  return await subscanFetch(hostname, 'api/scan/token/unique_id', params)
}

export const useTokenUniqueId = (hostname = '', params: { t?: string; id?: string; q?: string }) => {
  return useSWR<APIWarpperProps<GetTokenUniqueIdProps>, Error>([hostname, 'api/scan/token/unique_id', params], swrFetcher)
}

/***** Metadata *****/
export interface GetMetadataProps {
  addressType: string
  avgBlockTime: string
  blockNum: string
  blockTime: string
  bootTime: string
  commissionAccuracy: string
  count_account: string
  count_event: string
  count_signed_extrinsic: string
  count_transfer: string
  currentPools: string
  current_era: string
  current_validator_count: string
  epochLength: string
  epochProcess: string
  eraLength: string
  eraProcess: string
  exist_roles: string
  finalized_blockNum: string
  history_depth: string
  implName: string
  maxNominatorRewardedPerValidator: string
  maxPools: string
  networkNode: string
  specVersion: string
  unbondDuration: string
  validator_count: string
  waiting_validator: string
}

export async function getMetadata(hostname = ''): Promise<APIWarpperProps<GetMetadataProps>> {
  return await subscanFetch(hostname, 'api/scan/metadata')
}

/***** Blocks *****/
export interface GetBlocksProps {
  count: number
  blocks: Block[]
}

export async function getBlocks(hostname = '', params: { page: number; row: number }): Promise<APIWarpperProps<GetBlocksProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/blocks', params)
}

/***** Block Detail *****/
export interface GetBlockProps extends BlockDetail {}

export async function getBlock(
  hostname = '',
  params: {
    block_num?: number
    block_hash?: string
    block_timestamp?: number
    only_head?: boolean
  }
): Promise<APIWarpperProps<GetBlockProps>> {
  return await subscanFetch(hostname, 'api/scan/block', params)
}

/***** Extrinsics *****/
export interface GetExtrinsicsProps {
  count: number
  extrinsics: Extrinsic[]
}

export async function getExtrinsics(
  hostname = '',
  params: {
    page: number
    row: number
    signed?: string
    address?: string
    module?: string
    call?: string
    block_num?: number
    block_range?: string
    success?: boolean
    after_id?: number
    order?: 'desc' | 'asc'
  }
): Promise<APIWarpperProps<GetExtrinsicsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/extrinsics', params)
}

export const useExtrinsics = (
  hostname = '',
  params: {
    page: number
    row: number
    signed?: string
    address?: string
    module?: string
    call?: string
    block_num?: number
    block_range?: string
    success?: boolean
    after_id?: number
    order?: 'desc' | 'asc'
  }
) => {
  return useSWR<APIWarpperProps<GetExtrinsicsProps>, Error>([hostname, 'api/v2/scan/extrinsics', params], swrFetcher)
}

export interface GetExtrinsicProps extends ExtrinsicDetail {}

export async function getExtrinsic(
  hostname = '',
  params: {
    extrinsic_index?: string
    hash?: string
    events_limit?: number
    focus?: string
  }
): Promise<APIWarpperProps<GetExtrinsicProps>> {
  return await subscanFetch(hostname, 'api/scan/extrinsic', params)
}

/***** Events *****/
export interface GetEventsProps {
  count: number
  events: Event[]
}

export async function getEvents(
  hostname = '',
  params: {
    page: number
    row: number
    module?: string
    event_id?: string
    block_num?: number
    extrinsic_index?: string
    block_range?: string
    finalized?: boolean
    phase?: 0 | 1 | 2
    address?: string
    after_id?: number
    order?: 'desc' | 'asc'
  }
): Promise<APIWarpperProps<GetEventsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/events', params)
}

export const useEvents = (
  hostname = '',
  params: {
    page: number
    row: number
    module?: string
    event_id?: string
    block_num?: number
    extrinsic_index?: string
    block_range?: string
    finalized?: boolean
    phase?: 0 | 1 | 2
    address?: string
    after_id?: number
    order?: 'desc' | 'asc'
  }
) => {
  return useSWR<APIWarpperProps<GetEventsProps>, Error>([hostname, 'api/v2/scan/events', params], swrFetcher)
}

/***** Logs *****/
export interface GetLogsProps {
  count: number
  logs: Log[]
}

export async function getLogs(
  hostname = '',
  params: { page: number; row: number; engine?: string; type?: string }
): Promise<APIWarpperProps<GetLogsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/logs', params)
}

/***** Transfers *****/
export interface GetTransfersProps {
  count: number
  transfers: Transfer[]
}

export async function getTransfers(
  hostname = '',
  params: {
    page: number
    row: number
    address?: string
    extrinsic_index?: string
    block_range?: string
    direction?: 'all' | 'sent' | 'received'
    min_amount?: string
    max_amount?: string
    currency?: 'token' | 'usd'
    success?: boolean
    asset_symbol?: string
    asset_unique_id?: string
    after_id?: number[]
  }
): Promise<APIWarpperProps<GetTransfersProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/transfers', params)
}

export const useTransfers = (hostname = '', params: Parameters<typeof getTransfers>[1]) => {
  return useSWR<APIWarpperProps<GetTransfersProps>, Error>([hostname, 'api/v2/scan/transfers', params], swrFetcher)
}

export async function getAssetTransfers(
  hostname = '',
  params: {
    page: number
    row: number
    asset_id?: string
  }
): Promise<APIWarpperProps<GetTransfersProps>> {
  return await subscanFetch(hostname, 'api/scan/assets/transfers', params)
}

export const useAssetTransfers = (
  hostname = '',
  params: {
    page: number
    row: number
    asset_id?: string
  }
) => {
  return useSWR<APIWarpperProps<GetTransfersProps>, Error>([hostname, 'api/scan/assets/transfers', params], swrFetcher)
}

/***** Account List *****/
export interface GetAccountsProps {
  count: number
  list: Account[]
}

export async function getAccounts(
  hostname = '',
  params: {
    page: number
    row: number
    order: 'desc' | 'asc'
    order_field: 'balance'
    address?: string | string[]
    min_balance?: string
    max_balance?: string
    filter?:
      | 'validator'
      | 'nominator'
      | 'councilMember'
      | 'techcomm'
      | 'registrar'
      | 'system'
      | 'module'
      | 'evm'
      | 'nominationPool'
      | 'proxy'
      | 'proxies'
      | 'multisig'
      | 'multisigMember'
      | 'fellowship'
      | 'onChainIdentity'
    token_unique_id?: string
  }
): Promise<APIWarpperProps<GetAccountsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/accounts', params)
}

/***** Search Account *****/
export interface GetSearchAccountProps {
  account: AccountDetail
}

export async function getSearchAccount(
  hostname = '',
  params: {
    key: string
  }
): Promise<APIWarpperProps<GetSearchAccountProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/search', params)
}

/***** Assets *****/

export interface GetAssetProps extends Asset {}
export interface GetAssetsProps {
  count: number
  list: Asset[]
}
export async function getAssetDetail(
  hostname = '',
  params: {
    asset_id: string
  }
): Promise<APIWarpperProps<GetAssetProps>> {
  return await subscanFetch(hostname, 'api/scan/assets/asset', params)
}
export async function getAssets(hostname = '', params: {}): Promise<APIWarpperProps<GetAssetsProps>> {
  return await subscanFetch(hostname, 'api/scan/assets/assets', params)
}

export const useAssets = (hostname = '', params: {}) => {
  return useSWR<APIWarpperProps<GetAssetsProps>, Error>([hostname, 'api/scan/assets/assets', params], swrFetcher)
}
export interface GetAssetActivitiesProps {
  count: number
  list: AssetActivity[]
}
export const useAssetActivities = (
  hostname = '',
  params: {
    asset_id: string
    row: number
    page: number
  }
) => {
  return useSWR<APIWarpperProps<GetAssetActivitiesProps>, Error>([hostname, 'api/scan/assets/activities', params], swrFetcher)
}

export interface GetAssetHoldersProps {
  count: number
  list: AssetHolder[]
}
export async function getAssetHolders(
  hostname = '',
  params: {
    asset_id?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetAssetHoldersProps>> {
  return await subscanFetch(hostname, 'api/scan/assets/asset/holders', params)
}
export const useAssetHolders = (hostname = '', params: Parameters<typeof getAssetHolders>[1]) => {
  return useSWR<APIWarpperProps<GetAssetHoldersProps>, Error>([hostname, 'api/scan/assets/asset/holders', params], swrFetcher)
}
export interface GetTokenProvidersProps {
  providers: Provider[]
}

export async function getTokenProviders(hostname = '', params: {}): Promise<APIWarpperProps<GetTokenProvidersProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/token/providers', params)
}

export const useTokenProviders = (hostname = '', params: {}) => {
  return useSWR<APIWarpperProps<GetTokenProvidersProps>, Error>([hostname, 'api/v2/scan/token/providers', params], swrFetcher)
}

export interface GetTokensProps {
  provider: string
  count: number
  tokens: Token[]
}

export async function getTokensFromProvider(
  hostname = '',
  params: {
    provider: string
    row: number
    page: number
    include_extends?: boolean
  }
): Promise<APIWarpperProps<GetTokensProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/tokens', params)
}

export const useTokensFromProvider = (
  hostname = '',
  params: {
    provider?: string
    row: number
    page: number
    include_extends?: boolean
  }
) => {
  return useSWR<APIWarpperProps<GetTokensProps>, Error>([hostname, 'api/v2/scan/tokens', params], swrFetcher)
}
export interface GetTokenDetailProps {
  [propName: string]: Token[]
}

export async function getTokenDetail(
  hostname = '',
  params: {
    unique_ids: string[]
    include_extends?: boolean
  }
): Promise<APIWarpperProps<GetTokenDetailProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/token/search', params)
}

export const useTokenDetail = (
  hostname = '',
  params: {
    unique_ids?: string[]
    include_extends?: boolean
  }
) => {
  return useSWR<APIWarpperProps<GetTokenDetailProps>, Error>([hostname, 'api/v2/scan/token/search', params], swrFetcher)
}

export interface GetTokenHoldersProps {
  count: number
  list: Account[]
}

export async function getTokenHolders(
  hostname = '',
  params: {
    token?: string
    unique_id?: string
    order?: 'desc' | 'asc'
    order_field?: string
    row: number
    page: number
  }
): Promise<APIWarpperProps<GetTokenHoldersProps>> {
  return await subscanFetch(hostname, 'api/scan/token/holders', params)
}

export const useTokenHolders = (
  hostname = '',
  params: {
    token?: string
    unique_id?: string
    order?: 'desc' | 'asc'
    order_field?: string
    row: number
    page: number
  }
) => {
  return useSWR<APIWarpperProps<GetTokenHoldersProps>, Error>([hostname, 'api/scan/token/holders', params], swrFetcher)
}
/***** Charts *****/
export interface GetDailyStatisticsProps {
  list: DailyStatistics[]
}
export async function getDailyStatistics(
  hostname = '',
  params: {
    /** transfer extrinsic NewAccount ActiveAccount Treasury TreasurySpend Unbond Fee Bonded AvgBlockTime AccountHolderTotal */
    category: string
    /** day hour 6hour */
    format: string
    start: string
    end: string
  }
): Promise<APIWarpperProps<GetDailyStatisticsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/daily', params)
}

export const useDailyStatistics = (hostname = '', params: Parameters<typeof getDailyStatistics>[1]) => {
  return useSWR<APIWarpperProps<GetDailyStatisticsProps>, Error>([hostname, 'api/v2/scan/daily', params], swrFetcher)
}

/***** Data Statistics *****/
export interface GetDataStatisticsProps extends DataStatistics {}

export async function getDataStatistics(
  hostname = '',
  params: {
    start: string
    end: string
  }
): Promise<APIWarpperProps<GetDataStatisticsProps>> {
  return await subscanFetch(hostname, 'api/v2/scan/data/statistics', params)
}

export const useDataStatistics = (hostname = '', params: Parameters<typeof getDataStatistics>[1]) => {
  return useSWR<APIWarpperProps<GetDataStatisticsProps>, Error>([hostname, 'api/v2/scan/data/statistics', params], swrFetcher)
}
