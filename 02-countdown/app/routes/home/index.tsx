import { zodResolver } from '@hookform/resolvers/zod'
import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CountdownContext } from '~/contexts/CountdownContext'
import { Container, Form, Header, Timer } from './Home.styles'

export default function Home() {
	const {
		currentCycle,
		createNewCycle,
		amountSecondsPassed,
		changeAmountSecondsPassed,
		pauseCurrentCycle,
		tagCurrentCycleAsFinished,
	} = useContext(CountdownContext)

	const createCycleFormSchema = z.object({
		taskDescription: z.string().min(1, 'Task description is required'),
		minutesAmount: z.number().min(1, 'Minutes amount is required'),
	})

	type CreateCycleFormSchema = z.infer<typeof createCycleFormSchema>

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<CreateCycleFormSchema>({
		resolver: zodResolver(createCycleFormSchema),
	})

	const totalSeconds = currentCycle ? currentCycle.minutesAmount * 60 : 0

	const currentSeconds = currentCycle ? totalSeconds - amountSecondsPassed : 0

	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60

	const minutes = String(minutesAmount).padStart(2, '0')
	const seconds = String(secondsAmount).padStart(2, '0')

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>

		if (currentCycle) {
			interval = setInterval(() => {
				const secondsDifference = differenceInSeconds(new Date(), currentCycle.startDate)

				if (secondsDifference >= totalSeconds) {
					tagCurrentCycleAsFinished()
					changeAmountSecondsPassed(totalSeconds)
					clearInterval(interval)
				} else {
					changeAmountSecondsPassed(secondsDifference)
				}
			}, 1000)
		}

		return () => clearInterval(interval)
	}, [currentCycle, totalSeconds, tagCurrentCycleAsFinished, changeAmountSecondsPassed])

	function handleCreateNewCycle(data: CreateCycleFormSchema) {
		createNewCycle(data)
	}

	function handlePauseCurrentCycle() {
		pauseCurrentCycle()
	}

	return (
		<Container>
			<main>
				<Header>
					<div>Logo</div>
					<div>
						<span>History</span>
					</div>
				</Header>

				<Form>
					<div>
						<input
							type='text'
							placeholder='Enter a task to follow up'
							{...register('taskDescription')}
						/>
						<input
							type='number'
							placeholder='00'
							{...register('minutesAmount', { valueAsNumber: true })}
						/>
						<button
							type='button'
							onClick={handleSubmit(handleCreateNewCycle)}
							disabled={isSubmitting || !!currentCycle}
						>
							Start
						</button>
					</div>

					<Timer>
						<span>{minutes[0]}</span>
						<span>{minutes[1]}</span>
						<span>:</span>
						<span>{seconds[0]}</span>
						<span>{seconds[1]}</span>
					</Timer>

					<button
						type='button'
						onClick={handlePauseCurrentCycle}
						disabled={!currentCycle}
						hidden={!currentCycle}
					>
						Pause
					</button>
				</Form>
			</main>
		</Container>
	)
}
