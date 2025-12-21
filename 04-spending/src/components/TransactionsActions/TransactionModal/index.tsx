import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import type { Transaction, TransactionCreation } from '@/@types/Transaction'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { RadioGroup } from '@/components/RadioGroup'
import { Select } from '@/components/Select'
import { useDeleteTransaction } from '@/hooks/use-delete-transaction'
import { usePostTransaction } from '@/hooks/use-post-transaction'
import { usePutTransaction } from '@/hooks/use-put-transaction'
import { TransactionModalContentStyled, TransactionModalOverlayStyled } from './styles'

interface TransactionModalProps {
	transaction?: Transaction
}

export function TransactionModal({ transaction }: TransactionModalProps) {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<TransactionCreation>({
		defaultValues: transaction,
	})

	useEffect(() => {
		if (transaction) {
			reset(transaction)
		}
	}, [transaction, reset])

	const postTransaction = usePostTransaction()
	const putTransaction = usePutTransaction()
	const deleteTransaction = useDeleteTransaction()

	function onSubmit(data: Transaction | TransactionCreation) {
		if (transaction) {
			putTransaction.mutate(data as Transaction)
		} else {
			postTransaction.mutate(data as TransactionCreation)
		}
	}

	return (
		<RadixDialog.Portal>
			<TransactionModalOverlayStyled />
			<TransactionModalContentStyled>
				<div>
					<RadixDialog.Title>
						{transaction ? 'Edit Transaction' : 'New Transaction'}
					</RadixDialog.Title>
					<RadixDialog.Close>
						<X className='size-4' />
					</RadixDialog.Close>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label htmlFor='description'>Description</label>
						<Input type='text' id='description' {...register('description', { required: true })} />
						{errors.description && <span>Description is required</span>}
					</div>
					<div>
						<label htmlFor='currency'>Currency</label>
						<Controller
							name='currency'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									triggerLabel='Select a currency'
									value={field.value}
									onValueChange={field.onChange}
									options={[
										{
											value: 'USD',
											label: 'American Dollar',
										},
										{
											value: 'BRL',
											label: 'Brazilian Real',
										},
										{
											value: 'EUR',
											label: 'Euro',
										},
										{
											value: 'GBP',
											label: 'British Pound',
										},
									]}
								/>
							)}
						/>
						{errors.currency && <span>Currency is required</span>}
						<label htmlFor='amountInCents'>Amount</label>
						<Input
							type='number'
							id='amountInCents'
							{...register('amountInCents', { required: true })}
						/>
						{errors.amountInCents && <span>Amount is required</span>}
					</div>
					<div>
						<label htmlFor='dueDate'>Due Date</label>
						<Input type='date' id='dueDate' {...register('dueDate', { required: true })} />
						{errors.dueDate && <span>Due date is required</span>}
					</div>
					<div>
						<label htmlFor='category'>Category</label>
						<Controller
							name='category'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									triggerLabel='Select a category'
									value={field.value}
									onValueChange={field.onChange}
									options={[
										{
											value: 'food',
											label: 'Food',
										},
										{
											value: 'health',
											label: 'Health',
										},
										{
											value: 'transport',
											label: 'Transport',
										},
										{
											value: 'entertainment',
											label: 'Entertainment',
										},
										{
											value: 'other',
											label: 'Other',
										},
									]}
								/>
							)}
						/>
						{errors.category && <span>Category is required</span>}
					</div>
					<div>
						<label htmlFor='type'>Type</label>
						<Controller
							name='type'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<RadioGroup
									id='type'
									value={field.value}
									onValueChange={field.onChange}
									options={[
										{
											value: 'income',
											label: 'Income',
										},
										{
											value: 'expense',
											label: 'Expense',
										},
									]}
								/>
							)}
						/>
						{errors.type && <span>Type is required</span>}
					</div>
					<Button type='submit'>{transaction ? 'Update Transaction' : 'Add Transaction'}</Button>
					{transaction && (
						<Button
							variant='destructive'
							type='button'
							onClick={() => deleteTransaction.mutate(transaction.id)}
						>
							Delete Transaction
						</Button>
					)}
				</form>
			</TransactionModalContentStyled>
		</RadixDialog.Portal>
	)
}
