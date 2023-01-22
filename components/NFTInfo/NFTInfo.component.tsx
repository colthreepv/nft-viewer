import { TokenInfo } from '@/utils/avascan.utils'
import { shortenAddress } from '@/utils/eth.utils'
import { FC } from 'react'

export interface NFTInfoProps {
  data: TokenInfo
}

const NFTInfo: FC<NFTInfoProps> = ({ data }) => {
  // if tokenStandard is not defined, it's ERC721. Otherwise it's either ERC1155 or ERC721
  const tokenStandard =
    data.collection.detail.type == null ? 'ERC721' : data.collection.detail.type === 'erc721' ? 'ERC721' : 'ERC1155'

  return (
    <div>
      <p className="text-lg font-bold text-white">
        {data.collection.name} #{data.tokenId}
      </p>
      <a href="about:blank" target={'_blank'} rel="noreferrer">
        <p className="my-2 text-slate-500 font-bold">{data.collection.name} &gt;</p>
      </a>
      <div className="my-2 py-3 px-2 bg-slate-500 rounded-md text-white">
        <p className="font-extrabold">Details</p>
        <div className="grid grid-cols-[minmax(min-content,_1fr)_max-content] w-full">
          <div className="flex flex-col">
            <p>Owner:</p>
            <p>Contract Address:</p>
            <p>Creator:</p>
            <p>Token ID:</p>
            <p>Token Standard:</p>
          </div>
          <div className="ml-auto gap-y-2 block md:hidden">
            <p>{shortenAddress(data.currentOwner.id)}</p>
            <p>{shortenAddress(data.tokenAddress)}</p>
            <p>{shortenAddress(data.firstOwner.id)}</p>
            <p>{data.tokenId}</p>
            <p>{tokenStandard}</p>
          </div>
          {/* desktop variant */}
          <div className="ml-auto gap-y-2 hidden md:block">
            <p>{data.currentOwner.id}</p>
            <p>{data.tokenAddress}</p>
            <p>{data.firstOwner.id}</p>
            <p>{data.tokenId}</p>
            <p>{tokenStandard}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTInfo
