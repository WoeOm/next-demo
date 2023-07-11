import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Manta: Chain = {
  id: 'manta',
  nativeTokenUniqueId: 'MANTA',
  name: 'Manta',
  type: 'mainnet',
  theme: {
    colors: ['#60A6E1', '#97C5EB', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#60A6E1', 6),
  },
  gtag: 'G-1NM9PT7G38',
  api: 'https://manta.webapi.subscan.io',
  domain: 'https://manta.subscan.io',
  subdomain: ['manta'],
  social: {
    telegram: 'https://t.me/mantanetworkofficial',
    twitter: 'https://twitter.com/mantanetwork',
    github: 'https://github.com/Manta-Network',
    price: '',
    website: 'https://manta.network/',
    whitePaper: '',
  },
  parachain: {
    id: 2104,
    relaychain: 'polkadot',
  },
  donate: 'dfZyZQ2Tyc8e4zq837CQD1bNGW62tKCm2TNX7bjtUXAWj2GuE',
  modules: {
    BOUNTY: false,
    CONTRACT: false,
    CONTRACT_SOURCIFY: false,
    ETH_ADDRESS: false,
    EVM: false,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: false,
    MULTISIG_TOOL: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    PARATHREAD: true,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: true,
    V2_API: false,
    V2_REWARD: false,
    VESTING: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
