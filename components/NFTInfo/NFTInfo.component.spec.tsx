import { render } from '@testing-library/react'
import NFTInfo, { NFTInfoProps } from './NFTInfo.component'

describe('NFTInfo', () => {
  it('Matches snapshot', async () => {
    const props: NFTInfoProps = {
      data: {
        chainId: '43114',
        tokenAddress: '0xD6F7b2E3D2BE5c12038B24AfCd779e2f179B2400',
        tokenId: '1',
        uriExternal: 'https://infura-ipfs.io/ipfs/bafybeifabq76kkyzozd7j7qncrqwhfham7r5acbinfxfvou7ob6aixtvfm/1.png',
        uri256:
          'https://imgproxy-mainnet.avascan.com/nt2yOaQH3gfeT1HPbP5bXCOjxifqrVRK2FmLDZzTCXA/thumb_256/czM6Ly9hdmFzY2FuLW1haW5uZXQtbmZ0L2VyYzcyMS80MzExNC9kNi9mNy9iMi9lMy9kMmJlNWMxMjAzOGIyNGFmY2Q3NzllMmYxNzliMjQwMC8xLnBuZw',
        uri1024:
          'https://imgproxy-mainnet.avascan.com/mnxeMftCs4-mwNwc9jyj65h50U47fsxVu5qa9ri4jyY/thumb_1024/czM6Ly9hdmFzY2FuLW1haW5uZXQtbmZ0L2VyYzcyMS80MzExNC9kNi9mNy9iMi9lMy9kMmJlNWMxMjAzOGIyNGFmY2Q3NzllMmYxNzliMjQwMC8xLnBuZw',
        imageMd5: 'e972cd46fc9e4bd95cb1019b239484cf',
        createdAt: '2023-01-21T15:01:24.000Z',
        blockNumber: 25230695,
        txHash: '0x95da0205c798ea02473e294d767e55f4420b1dd21dc071d1ec9f58593bf106de',
        firstOwner: { id: '0x2a549e5f473212829d4000305f27529C1Ccbab9A' },
        currentOwner: {
          id: '0x2a549e5f473212829d4000305f27529C1Ccbab9A',
        },
        body: '{}',
        bodyType: 'json',
        collection: {
          address: '0xD6F7b2E3D2BE5c12038B24AfCd779e2f179B2400',
          name: 'SayCheese By KimiNaki',
          symbol: 'CHESEE',
          detail: {},
        },
      },
    }

    const rendered = render(<NFTInfo {...props} />)

    expect(rendered).toMatchSnapshot()

    const { findByText } = rendered
    const contractAddress = await findByText(props.data.tokenAddress)

    expect(contractAddress).toBeInTheDocument()
  })
})
