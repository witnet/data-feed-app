import { describe, it, expect } from 'vitest'
import { getSupportedChains } from '../../utils/supportedChains'

const feeds = [
  { chain: 'Arbitrum' },
  { chain: 'Arbitrum' },
  { chain: 'Avalanche' },
  { chain: 'Boba' },
  { chain: 'Boba' },
  { chain: 'Boba' },
  { chain: 'Boba' },
  { chain: 'Celo' },
  { chain: 'Celo' },
  { chain: 'Celo' },
  { chain: 'Celo' },
  { chain: 'Conflux' },
  { chain: 'Conflux' },
  { chain: 'Conflux' },
  { chain: 'Conflux' },
  { chain: 'Conflux' },
  { chain: 'Conflux' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cronos' },
  { chain: 'Cube' },
  { chain: 'Cube' },
  { chain: 'Cube' },
  { chain: 'Cube' },
  { chain: 'Dogechain' },
  { chain: 'Dogechain' },
  { chain: 'Elastos' },
  { chain: 'Elastos' },
  { chain: 'Elastos' },
  { chain: 'Elastos' },
  { chain: 'Elastos' },
  { chain: 'Elastos' },
  { chain: 'Ethereum' },
  { chain: 'Ethereum' },
  { chain: 'Ethereum' },
  { chain: 'Fuse' },
  { chain: 'Fuse' },
  { chain: 'Fuse' },
  { chain: 'Gnosis' },
  { chain: 'Gnosis' },
  { chain: 'Kava' },
  { chain: 'Kava' },
  { chain: 'Kava' },
  { chain: 'KCC' },
  { chain: 'KCC' },
  { chain: 'KCC' },
  { chain: 'KCC' },
  { chain: 'Klaytn' },
  { chain: 'Klaytn' },
  { chain: 'Klaytn' },
  { chain: 'Metis' },
  { chain: 'Meter' },
  { chain: 'Moonbeam' },
  { chain: 'OKXChain' },
  { chain: 'OKXChain' },
  { chain: 'Optimism' },
  { chain: 'Optimism' },
  { chain: 'Polygon' },
  { chain: 'Polygon' },
  { chain: 'Reef' },
  { chain: 'Reef' },
  { chain: 'Scroll' },
  { chain: 'Scroll' },
  { chain: 'Scroll' },
  { chain: 'SmartBCH' },
  { chain: 'Syscoin' },
  { chain: 'Syscoin' },
  { chain: 'Ultron' },
  { chain: 'Ultron' },
]

const networks = [
  {
    label: 'Arbitrum ONE',
    key: 'arbitrum-one',
    chain: 'Arbitrum',
    logo: '<svg>Arbitrum</svg>',
  },
  {
    label: 'Avalanche Mainnet',
    key: 'avalanche-mainnet',
    chain: 'Avalanche',
    logo: '<svg>Avalanche</svg>',
  },
  {
    label: 'Boba BNB/L2 Mainnet',
    key: 'boba-bnb-mainnet',
    chain: 'Boba',
    logo: '<svg>Boba</svg>',
  },
  {
    label: 'Boba ETH/L2 Mainnet',
    key: 'boba-ethereum-mainnet',
    chain: 'Boba',
    logo: '<svg>Boba</svg>',
  },
  {
    label: 'Celo Mainnet',
    key: 'celo-mainnet',
    chain: 'Celo',
    logo: '<svg>Celo</svg>',
  },
  {
    label: 'Conflux eSpace (Hydra)',
    key: 'conflux-espace-mainnet',
    chain: 'Conflux',
    logo: '<svg>Conflux</svg>',
  },
  {
    label: 'Cronos Mainnet',
    key: 'cronos-mainnet',
    chain: 'Cronos',
    logo: '<svg>Cronos</svg>',
  },
  {
    label: 'Elastos Mainnet',
    key: 'elastos-mainnet',
    chain: 'Elastos',
    logo: '<svg>Elastos</svg>',
  },
  {
    label: 'Ethereum Mainnet',
    key: 'ethereum-mainnet',
    chain: 'Ethereum',
    logo: '<svg>Ethereum</svg>',
  },
  {
    label: 'Kava EVM Mainnet',
    key: 'kava-mainnet',
    chain: 'Kava',
    logo: '<svg>Kava</svg>',
  },
  {
    label: 'KCC Mainnet',
    key: 'kcc-mainnet',
    chain: 'KCC',
    logo: '<svg>KCC</svg>',
  },
  {
    label: 'Klaytn Cypress (Mainnet)',
    key: 'klaytn-mainnet',
    chain: 'Klaytn',
    logo: '<svg>Klaytn</svg>',
  },
  {
    label: 'Meter Mainnet',
    key: 'meter-mainnet',
    chain: 'Meter',
    logo: '<svg>Meter</svg>',
  },
  {
    label: 'Moonbeam Mainnet',
    key: 'moonbeam-mainnet',
    chain: 'Moonbeam',
    logo: '<svg>Moonbeam</svg>',
  },
  {
    label: 'Optimism Mainnet',
    key: 'optimism-mainnet',
    chain: 'Optimism',
    logo: '<svg>Optimism</svg>',
  },
  {
    label: 'Polygon Mainnet',
    key: 'polygon-mainnet',
    chain: 'Polygon',
    logo: '<svg>Polygon</svg>',
  },
  {
    label: 'Syscoin NEVM Mainnet',
    key: 'syscoin-mainnet',
    chain: 'Syscoin',
    logo: '<svg>Syscoin</svg>',
  },
  {
    label: 'Ultron Mainnet',
    key: 'ultron-mainnet',
    chain: 'Ultron',
    logo: '<svg>Ultron</svg>',
  },
  {
    label: 'Arbitrum Nitro Goerli',
    key: 'arbitrum-goerli',
    chain: 'Arbitrum',
    logo: '<svg>Arbitrum</svg>',
  },
  {
    label: 'Avalanche Fuji',
    key: 'avalanche-fuji',
    chain: 'Avalanche',
    logo: '<svg>Avalanche</svg>',
  },
  {
    label: 'Boba BNB/L2 Testnet',
    key: 'boba-bnb-testnet',
    chain: 'Boba',
    logo: '<svg>Boba</svg>',
  },
  {
    label: 'Boba DEV/L2 Bobabase',
    key: 'boba-moonbeam-bobabase',
    chain: 'Boba',
    logo: '<svg>Boba</svg>',
  },
  {
    label: 'Boba ETH/L2 Goerli',
    key: 'boba-ethereum-goerli',
    chain: 'Boba',
    logo: '<svg>Boba</svg>',
  },
  {
    label: 'Celo Alfajores',
    key: 'celo-alfajores',
    chain: 'Celo',
    logo: '<svg>Celo</svg>',
  },
  {
    label: 'Conflux Core (Hydra)',
    key: 'conflux-core-mainnet',
    chain: 'Conflux',
    logo: '<svg>Conflux</svg>',
  },
  {
    label: 'Conflux Core (Testnet)',
    key: 'conflux-core-testnet',
    chain: 'Conflux',
    logo: '<svg>Conflux</svg>',
  },
  {
    label: 'Conflux eSpace (Testnet)',
    key: 'conflux-espace-testnet',
    chain: 'Conflux',
    logo: '<svg>Conflux</svg>',
  },
  {
    label: 'Cronos Testnet',
    key: 'cronos-testnet',
    chain: 'Cronos',
    logo: '<svg>Cronos</svg>',
  },
  {
    label: 'Cube EVM Testnet',
    key: 'cube-testnet',
    chain: 'Cube',
    logo: '<svg>Cube</svg>',
  },
  {
    label: 'Dogechain Mainnet',
    key: 'dogechain-mainnet',
    chain: 'Dogechain',
    logo: '<svg>Dogechain</svg>',
  },
  {
    label: 'Dogechain Testnet',
    key: 'dogechain-testnet',
    chain: 'Dogechain',
    logo: '<svg>Dogechain</svg>',
  },
  {
    label: 'Elastos Testnet',
    key: 'elastos-testnet',
    chain: 'Elastos',
    logo: '<svg>Elastos</svg>',
  },
  {
    label: 'Ethereum Goerli',
    key: 'ethereum-goerli',
    chain: 'Ethereum',
    logo: '<svg>Ethereum</svg>',
  },
  {
    label: 'Fuse Sparknet (Testnet)',
    key: 'fuse-testnet',
    chain: 'Fuse',
    logo: '<svg>Fuse</svg>',
  },
  {
    label: 'Gnosis Testnet',
    key: 'gnosis-testnet',
    chain: 'Gnosis',
    logo: '<svg>Gnosis</svg>',
  },
  {
    label: 'Kava EVM Testnet',
    key: 'kava-testnet',
    chain: 'Kava',
    logo: '<svg>Kava</svg>',
  },
  {
    label: 'KCC Testnet',
    key: 'kcc-testnet',
    chain: 'KCC',
    logo: '<svg>KCC</svg>',
  },
  {
    label: 'Klaytn Baobab (Testnet)',
    key: 'klaytn-testnet',
    chain: 'Klaytn',
    logo: '<svg>Klaytn</svg>',
  },
  {
    label: 'Meter Testnet',
    key: 'meter-testnet',
    chain: 'Meter',
    logo: '<svg>Meter</svg>',
  },
  {
    label: 'Metis Goerli',
    key: 'metis-goerli',
    chain: 'Metis',
    logo: '<svg>Metis</svg>',
  },
  {
    label: 'Moonbase Alpha',
    key: 'moonbeam-moonbase',
    chain: 'Moonbeam',
    logo: '<svg>Moonbase</svg>',
  },
  {
    label: 'Moonriver',
    key: 'moonbeam-moonriver',
    chain: 'Moonbeam',
    logo: '<svg>Moonriver</svg>',
  },
  {
    label: 'OKXChain Testnet',
    key: 'okxchain-testnet',
    chain: 'OKXChain',
    logo: '<svg>OKXChain</svg>',
  },
  {
    label: 'Optimism Goerli (testnet)',
    key: 'optimism-goerli',
    chain: 'Optimism',
    logo: '<svg>Optimism</svg>',
  },
  {
    label: 'Polygon Mumbai',
    key: 'polygon-goerli',
    chain: 'Polygon',
    logo: '<svg>Polygon</svg>',
  },
  {
    label: 'Polygon zkEVM Testnet',
    key: 'polygon-zkevm-goerli',
    chain: 'Polygon',
    logo: '<svg>Polygon</svg>',
  },
  {
    label: 'Reef Mainnet',
    key: 'reef-mainnet',
    chain: 'Reef',
    logo: '<svg>Reef</svg>',
  },
  {
    label: 'Reef Testnet',
    key: 'reef-testnet',
    chain: 'Reef',
    logo: '<svg>Reef</svg>',
  },
  {
    label: 'Scroll Alpha (Testnet)',
    key: 'scroll-goerli',
    chain: 'Scroll',
    logo: '<svg>Scroll</svg>',
  },
  {
    label: 'SmartBCH Amber (testnet)',
    key: 'smartbch-amber',
    chain: 'SmartBCH',
    logo: '<svg>SmartBCH</svg>',
  },
  {
    label: 'Syscoin NEVM Tanenbaum (testnet)',
    key: 'syscoin-testnet',
    chain: 'Syscoin',
    logo: '<svg>Syscoin</svg>',
  },
  {
    label: 'Ultron Testnet',
    key: 'ultron-testnet',
    chain: 'Ultron',
    logo: '<svg>Ultron</svg>',
  },
]

describe('supprtedChains.js', () => {
  it('should generate a list with the supported chains', () => {
    const supportedChains = getSupportedChains(networks, feeds)

    const expected = [
      {
        name: 'Arbitrum',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'arbitrum' } },
        svg: '<svg>Arbitrum</svg>',
      },
      {
        name: 'Avalanche',
        count: 1,
        detailsPath: { name: 'network', params: { network: 'avalanche' } },
        svg: '<svg>Avalanche</svg>',
      },
      {
        name: 'Boba',
        count: 4,
        detailsPath: { name: 'network', params: { network: 'boba' } },
        svg: '<svg>Boba</svg>',
      },
      {
        name: 'Celo',
        count: 4,
        detailsPath: { name: 'network', params: { network: 'celo' } },
        svg: '<svg>Celo</svg>',
      },
      {
        name: 'Conflux',
        count: 6,
        detailsPath: { name: 'network', params: { network: 'conflux' } },
        svg: '<svg>Conflux</svg>',
      },
      {
        name: 'Cronos',
        count: 8,
        detailsPath: { name: 'network', params: { network: 'cronos' } },
        svg: '<svg>Cronos</svg>',
      },
      {
        name: 'Cube',
        count: 4,
        detailsPath: { name: 'network', params: { network: 'cube' } },
        svg: '<svg>Cube</svg>',
      },
      {
        name: 'Dogechain',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'dogechain' } },
        svg: '<svg>Dogechain</svg>',
      },
      {
        name: 'Elastos',
        count: 6,
        detailsPath: { name: 'network', params: { network: 'elastos' } },
        svg: '<svg>Elastos</svg>',
      },
      {
        name: 'Ethereum',
        count: 3,
        detailsPath: { name: 'network', params: { network: 'ethereum' } },
        svg: '<svg>Ethereum</svg>',
      },
      {
        name: 'Fuse',
        count: 3,
        detailsPath: { name: 'network', params: { network: 'fuse' } },
        svg: '<svg>Fuse</svg>',
      },
      {
        name: 'Gnosis',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'gnosis' } },
        svg: '<svg>Gnosis</svg>',
      },
      {
        name: 'Kava',
        count: 3,
        detailsPath: { name: 'network', params: { network: 'kava' } },
        svg: '<svg>Kava</svg>',
      },
      {
        name: 'KCC',
        count: 4,
        detailsPath: { name: 'network', params: { network: 'kcc' } },
        svg: '<svg>KCC</svg>',
      },
      {
        name: 'Klaytn',
        count: 3,
        detailsPath: { name: 'network', params: { network: 'klaytn' } },
        svg: '<svg>Klaytn</svg>',
      },
      {
        name: 'Meter',
        count: 1,
        detailsPath: { name: 'network', params: { network: 'meter' } },
        svg: '<svg>Meter</svg>',
      },
      {
        name: 'Metis',
        count: 1,
        detailsPath: { name: 'network', params: { network: 'metis' } },
        svg: '<svg>Metis</svg>',
      },
      {
        name: 'Moonbeam',
        count: 1,
        detailsPath: { name: 'network', params: { network: 'moonbeam' } },
        svg: '<svg>Moonbeam</svg>',
      },
      {
        name: 'OKXChain',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'okxchain' } },
        svg: '<svg>OKXChain</svg>',
      },
      {
        name: 'Optimism',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'optimism' } },
        svg: '<svg>Optimism</svg>',
      },
      {
        name: 'Polygon',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'polygon' } },
        svg: '<svg>Polygon</svg>',
      },
      {
        name: 'Reef',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'reef' } },
        svg: '<svg>Reef</svg>',
      },
      {
        name: 'Scroll',
        count: 3,
        detailsPath: { name: 'network', params: { network: 'scroll' } },
        svg: '<svg>Scroll</svg>',
      },
      {
        name: 'SmartBCH',
        count: 1,
        detailsPath: { name: 'network', params: { network: 'smartbch' } },
        svg: '<svg>SmartBCH</svg>',
      },
      {
        name: 'Syscoin',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'syscoin' } },
        svg: '<svg>Syscoin</svg>',
      },
      {
        name: 'Ultron',
        count: 2,
        detailsPath: { name: 'network', params: { network: 'ultron' } },
        "svg": "<svg>Ultron</svg>",
      },
    ]

    expect(supportedChains).toStrictEqual(expected)
  })
})