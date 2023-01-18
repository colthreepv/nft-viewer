import { useRouter } from 'next/router'

interface TokenPageParams {
  network: string
  chainId: string
  address: string
  tokenId: string
}

const TokenPage = () => {
  const router = useRouter()
  const { network, address, chainId, tokenId } = router.query as unknown as TokenPageParams

  const originalUrl = `https://api.avascan.info/private/v2/network/${network}/evm/${chainId}/erc721/${address}/tokens/${tokenId}`

  return (
    <main>
      <p>Hi this is the token page!</p>
      <p>
        were you looking for
        <a href={originalUrl} target="_blank" rel="noreferrer">
          {originalUrl}
        </a>
      </p>
    </main>
  )
}

export default TokenPage
