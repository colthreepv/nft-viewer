import { ClassName } from '@/utils/interfaces'
import { FC } from 'react'

const Navbar: FC<ClassName> = ({ className }) => {
  return (
    <div className={className}>
      <p>Hi this is the Navbar component!</p>
    </div>
  )
}

export default Navbar
