import { render } from '@testing-library/react'
import NFTImage, { NFTImageProps } from './NFTImage.component'

describe('NFTImage', () => {
  it('Matches snapshot', async () => {
    const props: NFTImageProps = {
      collectionName: 'SayCheese By KimiNaki',
      tokenId: '1',
      src: 'https://imgproxy-mainnet.avascan.com/mnxeMftCs4-mwNwc9jyj65h50U47fsxVu5qa9ri4jyY/thumb_1024/czM6Ly9hdmFzY2FuLW1haW5uZXQtbmZ0L2VyYzcyMS80MzExNC9kNi9mNy9iMi9lMy9kMmJlNWMxMjAzOGIyNGFmY2Q3NzllMmYxNzliMjQwMC8xLnBuZw',
    }

    const rendered = render(<NFTImage {...props} />)

    const { findByAltText } = rendered

    const element = await findByAltText(`${props.collectionName} #${props.tokenId}`)
    expect(rendered).toMatchSnapshot()
    expect(element).toBeInTheDocument()
  })
})
