import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const OrigintrailParachain: Chain = {
  id: 'origintrail-parachain',
  nativeTokenUniqueId: 'OTP',
  name: 'OriginTrail Parachain',
  type: 'mainnet',
  theme: {
    colors: ['#FB5DEB', '#FDAEF5', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#FB5DEB', 6),
  },
  gtag: 'G-RETV5MRB44',
  api: 'https://origintrail.webapi.subscan.io',
  domain: 'https://origintrail.subscan.io',
  subdomain: ['origintrail'],
  social: {
    telegram: 'https://t.me/OriginTrail ',
    twitter: 'https://twitter.com/origin_trail ',
    github: ' ',
    price: '',
  },
  donate: 'gJqAkRt7Fw22UtzWaJyeh1jryDPgYchvWC7SnbbiwiZqhJhX2',
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
    PRICE: false,
    PRICE_HISTORY: false,
    PRICE_CONVERT: false,
    REFERENDA_V2: false,
    SYSTEM_ACCOUNT: false,
    V2_API: false,
    V2_REWARD: false,
    VESTING: true,
    WASM_CONTRACT: false,
    WASM_CONTRACT_SOURCIFY: false,
    // has hide prefix before
    SS58: true,
    TREASURY_CHART: true,
    VALIDATOR: false,
  },
}