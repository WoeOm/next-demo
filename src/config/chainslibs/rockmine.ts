import { generateGradientColor } from '@/utils/color'
import { Chain } from '../types'
export const Rockmine: Chain = {
  id: 'rockmine',
  nativeTokenUniqueId: 'ROC',
  name: 'Rockmine',
  type: 'testnet',
  theme: {
    colors: ['#000000', '#7C7C7C', '#d7d7d7'],
    gradient: generateGradientColor('#d7d7d7', '#000000', 6),
  },
  gtag: 'G-LTHZSGRQHH',
  api: 'https://rockmine.webapi.subscan.io',
  domain: 'https://rockmine.subscan.io',
  subdomain: ['rockmine'],
  social: {
    telegram: '',
    twitter: '',
    github: '',
    price: '',
    website: '',
    whitePaper: '',
  },
  donate: 'Fzs6WWFcAuJhxAVyZa4EN2suxggjidJjV3AzJxKbRHjh2Jc',
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
