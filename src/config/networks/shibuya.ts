import { generateGradientColor } from '@/utils/color'
import { Chain } from './template'

export const shibuya: Chain = {
  id: 'shibuya',
  nativeTokenUniqueId: 'SBY',
  name: 'Shibuya',
  type: 'testnet',
  theme: {
    colors: ['#4C68D8', '#A2B0E8', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#4C68D8', 6),
  },
  gtag: 'G-81F03NPDEK',
  api: 'https://shibuya.webapi.subscan.io',
  domain: 'https://shibuya.subscan.io',
  subdomain: ['shibuya'],
  social: {
    telegram: 'https://t.me/PlasmOfficial',
    twitter: 'https://twitter.com/AstarNetwork',
    github: 'https://github.com/AstarNetwork/Astar',
  },
  donate: 'ZMqsV8Tm3XVB8NthAD8N4q9rR7ZuGWsJJhZqMtDyz5CXyX7',
  modules: {
    SYSTEM_ACCOUNT: false,
    VESTING: true,
    GRANDPA_VOTE: false,
    BOUNTY: false,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: false,
    PARACHAIN: false,
    POLKASSEMBLY_LINK: false,
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    V2_REWARD: false,
    MULTISIG_TOOL: false,
    EVM_NETWORK: false,
    CONTRACT: true,
    CONTRACT_SOURCIFY: true,
    ETH_ADDRESS: true,
    EVM: true,
    ASSETS_MODULE: true,
    PARATHREAD: false,
    REFERENDA_V2: false,
    FELLOWSHIP: false,
    V2_API: true,
    WASM_CONTRACT: true,
    WASM_CONTRACT_SOURCIFY: true,
    // has hide prefix before
    TREASURY_CHART: false,
    VALIDATOR: false,
    SS58: true,
  },
}
