import * as RadixDialog from '@radix-ui/react-dialog'
import { Button } from '../../Button'
import { TransactionModal } from '../TransactionModal'

export function TransactionAddAction() {
	return (
		<RadixDialog.Root>
			<RadixDialog.Trigger asChild>
				<Button>New Transaction</Button>
			</RadixDialog.Trigger>
			<TransactionModal />
		</RadixDialog.Root>
	)
}
