import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { Category, CategoryCreation } from '@/@types/Category'
import { Input } from '@/components/Input'
import { usePostCategory } from '@/hooks/categories/use-post-category'
import { usePutCategory } from '@/hooks/categories/use-put-category'
import { Button } from '../../Button'
import { CategoryModalContentStyled, CategoryModalOverlayStyled } from './styles'

interface CategoryModalProps {
	category?: Category
	onOpenChange: (open: boolean) => void
}

export function CategoryModal({ category, onOpenChange }: CategoryModalProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CategoryCreation>({
		defaultValues: category,
	})

	useEffect(() => {
		if (category) {
			reset(category)
		}
	}, [category, reset])

	const postCategory = usePostCategory()
	const putCategory = usePutCategory()

	function onSubmit(data: Category | CategoryCreation) {
		if (category) {
			putCategory.mutate(data as Category)
		} else {
			postCategory.mutate(data as CategoryCreation)
		}
		onOpenChange(false)
	}

	return (
		<RadixDialog.Portal>
			<CategoryModalOverlayStyled />
			<CategoryModalContentStyled>
				<div>
					<RadixDialog.Title>{category ? 'Edit Category' : 'New Category'}</RadixDialog.Title>
					<RadixDialog.Close>
						<X className='size-4' />
					</RadixDialog.Close>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label htmlFor='name'>Name</label>
						<Input type='text' id='name' {...register('name', { required: true })} />
						{errors.name && <span>Name is required</span>}
					</div>
					<Button type='submit'>{category ? 'Update Category' : 'Add Category'}</Button>
				</form>
			</CategoryModalContentStyled>
		</RadixDialog.Portal>
	)
}
