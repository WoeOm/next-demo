import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Polymesh: Chain = {
  id: 'polymesh',
  nativeTokenUniqueId: 'POLYX',
  name: 'Polymesh',
  type: 'mainnet',
  theme: {
    colors: ['#EC4673', '#F5A2B9', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#EC4673', 6),
  },
  gtag: 'G-42KWXWPGBF',
  api: 'https://polymesh.webapi.subscan.io',
  domain: 'https://polymesh.subscan.io',
  subdomain: ['polymesh'],
  social: {
    telegram: '',
    twitter: 'https://twitter.com/PolymeshNetwork',
    github: 'https://github.com/PolymeshAssociation',
    price: 'https://www.coingecko.com/en/coins/polymesh',
    website: 'https://polymesh.network/',
    whitePaper: '',
  },
  donate: '2FsTgRvHT5eaGYD92tNJ1Nh8Np7dHYvWctaV99PLDyEcWAVc',
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
    PARATHREAD: false,
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
    VALIDATOR: true,
  },
}
