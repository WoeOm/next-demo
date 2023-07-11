import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Nodle: Chain = {
  id: 'nodle',
  nativeTokenUniqueId: 'NODL',
  name: 'Nodle',
  type: 'mainnet',
  theme: {
    colors: ['#51AB85', '#A8D5C1', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#51AB85', 6),
  },
  gtag: 'G-2YKHBMMJ1K',
  api: 'https://nodle.webapi.subscan.io',
  domain: 'https://nodle.subscan.io',
  subdomain: ['nodle'],
  social: {
    telegram: 'https://telegram.me/nodlecommunity/',
    twitter: 'https://twitter.com/NodleNetwork',
    github: 'https://github.com/NodleCode',
    price: 'https://www.coingecko.com/en/coins/nodle-network',
    website: 'https://www.nodle.com/',
    whitePaper: '',
  },
  parachain: {
    id: 2026,
    relaychain: 'polkadot',
  },
  donate: '4kYx9ETN4MWkB1KjgCMtSuLkXwgyf8fXLQRmXETroM6oYFqJ',
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
    TREASURY_CHART: false,
    VALIDATOR: false,
  },
}
