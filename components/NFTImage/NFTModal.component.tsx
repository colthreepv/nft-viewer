/* eslint-disable @next/next/no-img-element */
import { NFTImageProps } from './NFTImage.component'
import { Transition, Dialog } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { useModalContext } from '@/hooks/use-modal.context'

const NFTModal: FC<NFTImageProps> = ({ collectionName, tokenId, src }) => {
  const { isOpen, closeModal } = useModalContext()

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full min-w-full p-6 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="rounded-md overflow-hidden cursor-zoom-out">
                <img src={src} alt={`${collectionName} #${tokenId}`} onClick={closeModal} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default NFTModal
