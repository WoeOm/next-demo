import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Statemint: Chain = {
  id: 'statemint',
  nativeTokenUniqueId: 'DOT',
  name: 'Statemint',
  type: 'mainnet',
  theme: {
    colors: ['#000000', '#7C7C7C', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#000000', 6),
  },
  gtag: 'G-WF38918VL6',
  api: 'https://statemint.webapi.subscan.io',
  domain: 'https://statemint.subscan.io',
  subdomain: ['statemint'],
  social: {
    telegram: '',
    twitter: '',
    github: '',
    price: 'https://www.coingecko.com/en/coins/polkadot',
  },
  donate: '14RYaXRSqb9rPqMaAVp1UZW2czQ6dMNGMbvukwfifi6m8ZgZ',
  parachain: {
    id: 1000,
    relaychain: 'polkadot',
  },
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
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: false,
    V2_REWARD: false,
    VESTING: false,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}
