import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Darwinia: Chain = {
  id: 'darwinia',
  nativeTokenUniqueId: 'RING',
  name: 'Darwinia',
  type: 'mainnet',
  theme: {
    colors: ['#EA3382', '#F499C0', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#EA3382', 6),
  },
  gtag: 'G-45ZXR89JPN',
  api: 'https://darwinia1.webapi.subscan.io',
  domain: 'https://darwinia1.subscan.io',
  subdomain: ['darwinia1'],
  social: {
    telegram: 'https://t.me/DarwiniaNetwork',
    twitter: 'https://twitter.com/DarwiniaNetwork',
    github: 'https://github.com/darwinia-network',
    price: 'https://www.coingecko.com/en/coins/darwinia-network-native-token',
    website: 'https://darwinia.network/',
    whitePaper: '',
  },
  donate: '2rbREPAhkptwCtdvU5eSGnHgFiyPcehdkXuGqFF916oYCJ7s',
  modules: {
    BOUNTY: true,
    CONTRACT: true,
    CONTRACT_SOURCIFY: true,
    ETH_ADDRESS: false,
    EVM: true,
    EVM_NETWORK: false,
    FELLOWSHIP: false,
    GRANDPA_VOTE: true,
    MULTISIG_TOOL: true,
    NOMINATION_POOL: false,
    NOMINATE_FEATURE: true,
    PARACHAIN: false,
    PARATHREAD: false,
    POLKASSEMBLY_LINK: false,
    PRICE: true,
    PRICE_HISTORY: true,
    PRICE_CONVERT: true,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: true,
    V2_API: true,
    V2_REWARD: false,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: true,
  },
}
