import * as RadixDialog from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import { useContext } from 'react'
import { Button } from '@/components/Button'
import { ModalContext } from '@/contexts/ModalContext'
import { CurrencyModal } from '../CurrencyModal'

export function CurrencyAddAction() {
	const { openCurrencyModal, setOpenCurrencyModal } = useContext(ModalContext)

	return (
		<RadixDialog.Root open={openCurrencyModal} onOpenChange={setOpenCurrencyModal}>
			<RadixDialog.Trigger asChild>
				<Button>
					<Plus />
				</Button>
			</RadixDialog.Trigger>
			<CurrencyModal onOpenChange={setOpenCurrencyModal} />
		</RadixDialog.Root>
	)
}
