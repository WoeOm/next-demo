import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Astar: Chain = {
  id: 'astar',
  nativeTokenUniqueId: 'ASTR',
  name: 'Astar',
  type: 'mainnet',
  theme: {
    colors: ['#694EA4', '#B1A3CE', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#694EA4', 6),
  },
  gtag: 'G-XLNQ8TH3D2',
  api: 'https://astar.webapi.subscan.io',
  domain: 'https://astar.subscan.io',
  subdomain: ['astar'],
  social: {
    telegram: 'https://t.me/PlasmOfficial ',
    twitter: 'https://twitter.com/AstarNetwork ',
    github: 'https://github.com/AstarNetwork/Astar ',
    price: 'https://www.coingecko.com/en/coins/astar',
  },
  donate: 'ZMqsV8Tm3XVB8NthAD8N4q9rR7ZuGWsJJhZqMtDyz5CXyX7',
  modules: {
    BOUNTY: false,
    CONTRACT: true,
    CONTRACT_SOURCIFY: true,
    ETH_ADDRESS: true,
    EVM: true,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: true,
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
    VESTING: true,
    WASM_CONTRACT: true,
    WASM_CONTRACT_SOURCIFY: true,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: false,
    VALIDATOR: false,
  },
}