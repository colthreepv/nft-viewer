import Navbar from '@/components/Navbar/Navbar.component'
import NFTImage from '@/components/NFTImage/NFTImage.component'
import NFTInfo from '@/components/NFTInfo/NFTInfo.component'
import { getErc721Token, TokenInfo } from '@/utils/avascan.utils'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

interface TokenPageParams {
  token: TokenInfo
}

const TokenPage: FC<TokenPageParams> = ({ token }) => {
  const { collection, uri1024, tokenId } = token

  console.log({ token })

  return (
    <main className="container mx-auto px-2 md:px-0">
      <Navbar className="mb-1"></Navbar>
      <div className="my-2">
        <div className="grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-[320px_1fr] lg:grid-cols-[480px_1fr]">
          <NFTImage collectionName={collection.name} tokenId={tokenId} src={uri1024}></NFTImage>
          <NFTInfo></NFTInfo>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ token: TokenInfo }> = async (context) => {
  const { network, chainId, address, tokenId } = context.query
  const tokenData = await getErc721Token(network as string, Number(chainId), address as string, tokenId as string)
  return { props: { token: tokenData } }
}

export default TokenPage
