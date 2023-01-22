import { GetServerSideProps } from 'next'
import { FC } from 'react'
import Navbar from '@/components/Navbar/Navbar.component'
import NFTImage from '@/components/NFTImage/NFTImage.component'
import NFTModal from '@/components/NFTImage/NFTModal.component'
import NFTInfo from '@/components/NFTInfo/NFTInfo.component'
import { getErc721Token, TokenInfo } from '@/utils/avascan.utils'
import { useModalContext } from '@/hooks/use-modal.context'

interface TokenPageParams {
  token: TokenInfo
}

const TokenPage: FC<TokenPageParams> = ({ token }) => {
  const { openModal } = useModalContext()
  const { collection, uri1024, tokenId } = token

  return (
    <main className="container mx-auto px-2 md:px-0">
      <Navbar className="mb-1"></Navbar>
      <div className="my-2">
        <div className="grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-[320px_1fr] lg:grid-cols-[480px_1fr]">
          <NFTImage collectionName={collection.name} tokenId={tokenId} src={uri1024} onClick={openModal}></NFTImage>
          <NFTInfo data={token}></NFTInfo>
        </div>
      </div>
      <NFTModal collectionName={collection.name} tokenId={tokenId} src={uri1024}></NFTModal>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ token: TokenInfo }> = async (context) => {
  const { network, chainId, address, tokenId } = context.query
  const tokenData = await getErc721Token(network as string, Number(chainId), address as string, tokenId as string)
  return { props: { token: tokenData } }
}

export default TokenPage
