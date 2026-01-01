import * as RadixDialog from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'
import { Button } from '../../Button'
import { CategoryModal } from '../CategoryModal'

export function CategoryAddAction() {
	const { openCategoryModal, setOpenCategoryModal } = useContext(ModalContext)

	return (
		<RadixDialog.Root open={openCategoryModal} onOpenChange={setOpenCategoryModal}>
			<RadixDialog.Trigger asChild>
				<Button>
					<Plus />
				</Button>
			</RadixDialog.Trigger>
			<CategoryModal onOpenChange={setOpenCategoryModal} />
		</RadixDialog.Root>
	)
}
