import { createContext, useState } from 'react'

interface ModalContextType {
	openTransactionModal: boolean
	setOpenTransactionModal: (open: boolean) => void
	openCategoryModal: boolean
	setOpenCategoryModal: (open: boolean) => void
	openCurrencyModal: boolean
	setOpenCurrencyModal: (open: boolean) => void
}

export const ModalContext = createContext({} as ModalContextType)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [openTransactionModal, setOpenTransactionModal] = useState(false)
	const [openCategoryModal, setOpenCategoryModal] = useState(false)
	const [openCurrencyModal, setOpenCurrencyModal] = useState(false)

	return (
		<ModalContext.Provider
			value={{
				openTransactionModal,
				setOpenTransactionModal,
				openCategoryModal,
				setOpenCategoryModal,
				openCurrencyModal,
				setOpenCurrencyModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
