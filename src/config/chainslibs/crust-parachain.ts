import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const CrustParachain: Chain = {
  id: 'crust-parachain',
  nativeTokenUniqueId: 'CRU',
  name: 'Crust Parachain',
  type: 'mainnet',
  theme: {
    colors: ['#ED6E2D', '#F3B393', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#ED6E2D', 6),
  },
  gtag: 'G-S5BBXL1G76',
  api: 'https://crust-parachain.webapi.subscan.io',
  domain: 'https://crust-parachain.subscan.io',
  subdomain: ['crust-parachain'],
  social: {
    telegram: 'https://t.me/CrustNetwork',
    twitter: 'https://twitter.com/CrustNetwork',
    github: 'https://github.com/crustio',
    price: 'https://www.coingecko.com/en/coins/crust-network',
  },
  donate: 'espBwNTdpAxMkx9vck1ivqzbRVghtxE3TFYXYiveSV9819dUm',
  parachain: {
    id: 2008,
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
