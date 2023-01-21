export interface TokenCollection {
  address: string // '0x0540E4EE0C5CdBA347C2f0E011ACF8651bB70Eb9'
  name: string // 'CryptoSeals'
  symbol: string // 'SEAL'
  detail: {
    alias: string // 'NFT'
    owner: string // 'Cryptoseals'
    type: string // 'erc721'
    supertype: string // 'T'
    icon?: any // null
    checkmark: number // 0
  }
}

export interface TokenInfo {
  chainId: string // '43114'
  tokenAddress: string // '0x0540E4EE0C5CdBA347C2f0E011ACF8651bB70Eb9'
  tokenId: string // '1'
  uriExternal: string // 'https://ipfs.infura.io/ipfs/QmRo4V2H7Uk1v6c4chsRv76E3uNt7ea9PeTKjcVNRZq2mz'
  uri256: string // 'https://imgproxy-mainnet.avascan.com/d5X7KfVGb2vRprsydaO_6gG1yLII4QidenATdMCaOmM/thumb_256/czM6Ly9hdmFzY2FuLW1haW5uZXQtbmZ0L2VyYzcyMS80MzExNC8wNS80MC9lNC9lZS8wYzVjZGJhMzQ3YzJmMGUwMTFhY2Y4NjUxYmI3MGViOS84MDA1LnBuZw'
  uri1024: string // 'https://imgproxy-mainnet.avascan.com/mSBH7lNXqMvjL7uLW3r3QeaqFlat0LsjOvmXBKT3UJA/thumb_1024/czM6Ly9hdmFzY2FuLW1haW5uZXQtbmZ0L2VyYzcyMS80MzExNC8wNS80MC9lNC9lZS8wYzVjZGJhMzQ3YzJmMGUwMTFhY2Y4NjUxYmI3MGViOS84MDA1LnBuZw'
  imageMd5: string // '24a4a89e83411adce14f2c1d2dfc55c4'
  createdAt: string // '2021-08-04T09:00:00.000Z'
  blockNumber: number // 732911
  txHash: string // '0x2f331f50bdbb5a3eeea79501dd5b21d07067032970f733f09d05145f8904268e'
  firstOwner: { id: string }
  currentOwner: { id: string }
  collection: TokenCollection

  body: string
  bodyType: string // 'json'
}

export const getErc721Token = async (network: string, chainId: number, address: string, tokenId: string) => {
  const url = `https://api.avascan.info/private/v2/network/${network}/evm/${chainId}/erc721/${address}`
  const response = await fetch(url)
  const data = (await response.json()) as TokenInfo

  return data
}
