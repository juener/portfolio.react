import * as RadixDialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Button } from '../../Button'
import { TransactionModal } from '../TransactionModal'

export function TransactionAddAction() {
	const [open, setOpen] = useState(false)

	return (
		<RadixDialog.Root open={open} onOpenChange={setOpen}>
			<RadixDialog.Trigger asChild>
				<Button>New Transaction</Button>
			</RadixDialog.Trigger>
			<TransactionModal onOpenChange={setOpen} />
		</RadixDialog.Root>
	)
}
