import { FeedInfo, Network, AbiItem } from '../../src/types'
import BtcUsdAbi from './abi/BtcUsd.json'
import WitnetRequestBoardProxy from './abi/WitnetRequestBoardProxy.json'

export const dataFeeds: Array<FeedInfo> = [
  {
    abi: BtcUsdAbi as Array<AbiItem>,
    address: '0xa3AFD68122a21c7D21Ddd95E5c077f958dA46662',
    network: Network.Goerli,
    name: 'btc/usd',
    label: '$',
    pollingPeriod: 1000,
    witnetRequestBoard: {
      address: '0x0C4be6AA667df48de54BA174bE7948875fdf152B',
      abi: WitnetRequestBoardProxy as Array<AbiItem>
    }
  },
  {
    abi: BtcUsdAbi as Array<AbiItem>,
    address: '0x56834Ff8D4b27db647Da97CA3bd8540f7fA0e89D',
    network: Network.Kovan,
    name: 'btc/usd',
    label: '$',
    pollingPeriod: 1000,
    witnetRequestBoard: {
      address: '0xD9a6d1Ea0d0f4795985725C7Bd40C31a667c033d',
      abi: WitnetRequestBoardProxy as Array<AbiItem>
    }
  }
  // {
  //   abi: BtcUsdAbi as Array<AbiItem>,
  //   address: '0x49C0BCce51a8B28f92d008394F06d5B259657F33',
  //   witnetRequestBoard: {
  //     address: '0x9b42b0D80C428B17A5828dF5C2c96454ca54bD04',
  //     abi: WitnetRequestBoardProxy as Array<AbiItem>,
  //   },
  //   network: Network.Rinkeby,
  //   name: 'btc/usd',
  //   label: '$',
  //   pollingPeriod: 5000
  // }
]