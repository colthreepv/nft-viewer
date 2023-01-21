import NFTImage from '@/components/NFTImage/NFTImage.component'
import NFTInfo from '@/components/NFTInfo/NFTInfo.component'
import { getErc721Token, TokenInfo } from '@/utils/avascan.utils'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

interface TokenPageParams {
  network: string
  chainId: string
  address: string
  tokenId: string
}

const TokenPage: FC<TokenPageParams> = ({ network, address, chainId, tokenId }) => {
  return (
    <main>
      <div className="grid grid-cols-2 sm:grid-cols-1">
        <NFTImage></NFTImage>
        <NFTInfo></NFTInfo>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<TokenInfo> = async (context) => {
  const { network, chainId, address, tokenId } = context.query
  const tokenData = await getErc721Token(network as string, Number(chainId), address as string, tokenId as string)
  return { props: tokenData }
}

export default TokenPage
