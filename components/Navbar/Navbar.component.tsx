import { ClassName } from '@/utils/interfaces'
import { FC } from 'react'

const Navbar: FC<ClassName> = ({ className }) => {
  return (
    <div className={className}>
      <div className="min-h-[28px] bg-slate-600">
        <p className="text-center">Navbar component here</p>
      </div>
    </div>
  )
}

export default Navbar
