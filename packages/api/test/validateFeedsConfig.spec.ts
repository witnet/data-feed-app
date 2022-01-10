import fs from 'fs'
import path from 'path'
import { normalizeConfig } from '../src/utils/index'

describe('validateDataFeedsConfig', () => {
  it('check if the structure is correct', async () => {
    const dataFeedsRouterConfig = JSON.parse(
      fs.readFileSync(path.resolve('./src/dataFeedsRouter.json'), 'utf-8')
    )

    const feeds = normalizeConfig(dataFeedsRouterConfig)
    const expected = [
      {
        feedFullName: 'boba-rinkeby_boba-usdt_6',
        id: 'Price-BOBA/USDT-6',
        address: '0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a',
        network: 'boba-rinkeby',
        name: 'boba/usdt',
        label: '₮',
        pollingPeriod: 15000,
        color: '#1cd83d',
        blockExplorer:
          'https://blockexplorer.rinkeby.boba.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'boba-rinkeby_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a',
        network: 'boba-rinkeby',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#1cd83d',
        blockExplorer:
          'https://blockexplorer.rinkeby.boba.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'boba-rinkeby_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a',
        network: 'boba-rinkeby',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#1cd83d',
        blockExplorer:
          'https://blockexplorer.rinkeby.boba.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'boba-rinkeby_omg-btc_9',
        id: 'Price-OMG/BTC-9',
        address: '0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a',
        network: 'boba-rinkeby',
        name: 'omg/btc',
        label: 'BTC',
        pollingPeriod: 15000,
        color: '#1cd83d',
        blockExplorer:
          'https://blockexplorer.rinkeby.boba.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'boba-rinkeby_omg-eth_9',
        id: 'Price-OMG/ETH-9',
        address: '0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a',
        network: 'boba-rinkeby',
        name: 'omg/eth',
        label: 'ETH',
        pollingPeriod: 15000,
        color: '#1cd83d',
        blockExplorer:
          'https://blockexplorer.rinkeby.boba.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'boba-rinkeby_omg-usdt_6',
        id: 'Price-OMG/USDT-6',
        address: '0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a',
        network: 'boba-rinkeby',
        name: 'omg/usdt',
        label: '₮',
        pollingPeriod: 15000,
        color: '#1cd83d',
        blockExplorer:
          'https://blockexplorer.rinkeby.boba.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'celo-alfajores_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x6f8A7E2bBc1eDb8782145cD1089251f6e2C738AE',
        network: 'celo-alfajores',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#1cd8d2',
        blockExplorer:
          'https://alfajores-blockscout.celo-testnet.org/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'celo-alfajores_celo-eur_6',
        id: 'Price-CELO/EUR-6',
        address: '0x6f8A7E2bBc1eDb8782145cD1089251f6e2C738AE',
        network: 'celo-alfajores',
        name: 'celo/eur',
        label: '€',
        pollingPeriod: 15000,
        color: '#1cd8d2',
        blockExplorer:
          'https://alfajores-blockscout.celo-testnet.org/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'celo-alfajores_celo-usd_6',
        id: 'Price-CELO/USD-6',
        address: '0x6f8A7E2bBc1eDb8782145cD1089251f6e2C738AE',
        network: 'celo-alfajores',
        name: 'celo/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#1cd8d2',
        blockExplorer:
          'https://alfajores-blockscout.celo-testnet.org/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'celo-alfajores_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x6f8A7E2bBc1eDb8782145cD1089251f6e2C738AE',
        network: 'celo-alfajores',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#1cd8d2',
        blockExplorer:
          'https://alfajores-blockscout.celo-testnet.org/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'conflux-testnet_cfx-usdt_6',
        id: 'Price-CFX/USDT-6',
        address: '0x8F61C7b18F69bB87D6151B8a5D733E1945ea6c25',
        network: 'conflux-testnet',
        name: 'cfx/usdt',
        label: '₮',
        pollingPeriod: 15000,
        color: '#6600ff',
        blockExplorer: 'https://testnet.confluxscan.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'conflux-testnet_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x8F61C7b18F69bB87D6151B8a5D733E1945ea6c25',
        network: 'conflux-testnet',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#6600ff',
        blockExplorer: 'https://testnet.confluxscan.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'conflux-testnet_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x8F61C7b18F69bB87D6151B8a5D733E1945ea6c25',
        network: 'conflux-testnet',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#6600ff',
        blockExplorer: 'https://testnet.confluxscan.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'ethereum-goerli_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x1cF3Aa9DBF4880d797945726B94B9d29164211BE',
        network: 'ethereum-goerli',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#ff5599',
        blockExplorer: 'https://goerli.etherscan.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'ethereum-goerli_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x1cF3Aa9DBF4880d797945726B94B9d29164211BE',
        network: 'ethereum-goerli',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#ff5599',
        blockExplorer: 'https://goerli.etherscan.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'harmony-testnet_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x08d479a544b05B297454e5CAc133abA3a584AB8E',
        network: 'harmony-testnet',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#f6006f',
        blockExplorer: 'https://explorer.pops.one/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'harmony-testnet_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x08d479a544b05B297454e5CAc133abA3a584AB8E',
        network: 'harmony-testnet',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#f6006f',
        blockExplorer: 'https://explorer.pops.one/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'kcc-testnet_kcs-usdt_6',
        id: 'Price-KCS/USDT-6',
        address: '0xba7CF62498340fa3734EC51Ca8A69928F0d9E03a',
        network: 'kcc-testnet',
        name: 'kcs/usdt',
        label: '₮',
        pollingPeriod: 15000,
        color: '#ff0066',
        blockExplorer: 'https://scan-testnet.kcc.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'kcc-testnet_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0xba7CF62498340fa3734EC51Ca8A69928F0d9E03a',
        network: 'kcc-testnet',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#ff0066',
        blockExplorer: 'https://scan-testnet.kcc.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'kcc-testnet_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0xba7CF62498340fa3734EC51Ca8A69928F0d9E03a',
        network: 'kcc-testnet',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#ff0066',
        blockExplorer: 'https://scan-testnet.kcc.network/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'metis-rinkeby_metis-usdt_6',
        id: 'Price-METIS/USDT-6',
        address: '0x5134EAF08bcf8cE1922991150AAad1774e93751f',
        network: 'metis-rinkeby',
        name: 'metis/usdt',
        label: '₮',
        pollingPeriod: 15000,
        color: '#ff6600',
        blockExplorer: 'https://stardust-explorer.metis.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'metis-rinkeby_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x5134EAF08bcf8cE1922991150AAad1774e93751f',
        network: 'metis-rinkeby',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#ff6600',
        blockExplorer: 'https://stardust-explorer.metis.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'metis-rinkeby_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x5134EAF08bcf8cE1922991150AAad1774e93751f',
        network: 'metis-rinkeby',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#ff6600',
        blockExplorer: 'https://stardust-explorer.metis.io/address/{address}',
        deviation: 1,
        heartbeat: '3600000',
        finality: 900000
      },
      {
        feedFullName: 'polygon-goerli_btc-usd_6',
        id: 'Price-BTC/USD-6',
        address: '0x6d5544ca5b35bf2e7a78ace4E7B8d191fe5C9FAb',
        network: 'polygon-goerli',
        name: 'btc/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#66ff00',
        blockExplorer: 'https://mumbai.polygonscan.com/address/{address}',
        deviation: 3.5,
        heartbeat: '86400000',
        finality: 900000
      },
      {
        feedFullName: 'polygon-goerli_eth-usd_6',
        id: 'Price-ETH/USD-6',
        address: '0x6d5544ca5b35bf2e7a78ace4E7B8d191fe5C9FAb',
        network: 'polygon-goerli',
        name: 'eth/usd',
        label: '$',
        pollingPeriod: 15000,
        color: '#66ff00',
        blockExplorer: 'https://mumbai.polygonscan.com/address/{address}',
        deviation: 3.5,
        heartbeat: '86400000',
        finality: 900000
      }
    ]
    expect(feeds).toStrictEqual(expected)
  })
})
