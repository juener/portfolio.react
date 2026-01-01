import * as RadixDialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'
import { Button } from '../../Button'
import { TransactionModal } from '../TransactionModal'

export function TransactionAddAction() {
	const { openTransactionModal, setOpenTransactionModal } = useContext(ModalContext)

	return (
		<RadixDialog.Root open={openTransactionModal} onOpenChange={setOpenTransactionModal}>
			<RadixDialog.Trigger asChild>
				<Button>New Transaction</Button>
			</RadixDialog.Trigger>
			<TransactionModal onOpenChange={setOpenTransactionModal} />
		</RadixDialog.Root>
	)
}
