import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { Currency, CurrencyCreation } from '@/@types/Currency'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { usePostCurrency } from '@/hooks/currencies/use-post-currency'
import { usePutCurrency } from '@/hooks/currencies/use-put-currency'
import { CurrencyModalContentStyled, CurrencyModalOverlayStyled } from './styles'

interface CurrencyModalProps {
	currency?: Currency
	onOpenChange: (open: boolean) => void
}

export function CurrencyModal({ currency, onOpenChange }: CurrencyModalProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CurrencyCreation>({
		defaultValues: currency,
	})

	useEffect(() => {
		if (currency) {
			reset(currency)
		}
	}, [currency, reset])

	const putCurrency = usePutCurrency()
	const postCurrency = usePostCurrency()

	function onSubmit(data: Currency | CurrencyCreation) {
		if (currency) {
			putCurrency.mutate(data as Currency)
		} else {
			postCurrency.mutate(data as CurrencyCreation)
		}
		onOpenChange(false)
	}

	return (
		<RadixDialog.Portal>
			<CurrencyModalOverlayStyled />
			<CurrencyModalContentStyled>
				<div>
					<RadixDialog.Title>{currency ? 'Edit Currency' : 'New Currency'}</RadixDialog.Title>
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
					<div>
						<label htmlFor='initials'>Initials</label>
						<Input type='text' id='initials' {...register('initials', { required: true })} />
						{errors.initials && <span>Initials is required</span>}
					</div>
					<Button type='submit'>{currency ? 'Update Currency' : 'Add Currency'}</Button>
				</form>
			</CurrencyModalContentStyled>
		</RadixDialog.Portal>
	)
}
