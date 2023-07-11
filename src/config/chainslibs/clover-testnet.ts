import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const CloverTestnet: Chain = {
  id: 'clover-testnet',
  nativeTokenUniqueId: 'CLV',
  name: 'Clover Testnet',
  type: 'testnet',
  theme: {
    colors: ['#25E5DA', '#92F2EC', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#25E5DA', 6),
  },
  gtag: 'G-C466PTP61F',
  api: 'https://clover-testnet.webapi.subscan.io',
  domain: 'https://clover-testnet.subscan.io',
  subdomain: ['clover-testnet'],
  social: {
    telegram: 'https://t.me/clover_en/',
    twitter: 'https://twitter.com/clover_finance',
    github: 'https://github.com/clover-network',
    price: '',
    website: 'https://clover.finance/',
    whitePaper: 'https://clover.finance/litepaper.pdf',
  },
  donate: '5FVFSCANyotNxJM4Crm1LQfsmNQSw3p8H7CRbegN7d5Ex91y',
  modules: {
    BOUNTY: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    PARATHREAD: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: true,
    V2_REWARD: false,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: false,
    VALIDATOR: true,
  },
}
