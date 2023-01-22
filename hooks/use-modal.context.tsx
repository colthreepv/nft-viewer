import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'

export interface ModalContextState {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextState>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export const useModalContext = () => useContext(ModalContext)

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const context = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
    }),
    [isOpen, openModal, closeModal],
  )

  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
}
