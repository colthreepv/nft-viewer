import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export interface NFTImageProps {
  collectionName: string
  tokenId: string
  src: string
  onClick?: () => void
}

const HoverImage = styled(Image)`
  transition: box-shadow 0.1s linear;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.5);
  }
`

const NFTImage: FC<NFTImageProps> = ({ collectionName, tokenId, src, onClick }) => {
  return (
    <div className="relative min-h-[50vh] md:min-h-[33vh] cursor-zoom-in" onClick={onClick}>
      <HoverImage className="object-cover" src={src} alt={`${collectionName} #${tokenId}`} fill />
    </div>
  )
}

export default NFTImage
