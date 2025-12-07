import { createContext, useState } from 'react'

interface Cycle {
	id: string
	taskDescription: string
	minutesAmount: number
	startDate: Date
	pausedDate?: Date
	finishedDate?: Date
}

type CreateCycleData = {
	taskDescription: string
	minutesAmount: number
}

interface CountdownContextType {
	cycles: Cycle[]
	currentCycle: Cycle | undefined
	currentCycleId: string | null
	amountSecondsPassed: number
	changeAmountSecondsPassed: (seconds: number) => void
	tagCurrentCycleAsFinished: () => void
	createNewCycle: (data: CreateCycleData) => void
	pauseCurrentCycle: () => void
}

export const CountdownContext = createContext({} as CountdownContextType)

export const CountdownContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cycles, setCycles] = useState<Cycle[]>([])
	const [currentCycleId, setCurrentCycleId] = useState<string | null>(null)
	const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

	const currentCycle = cycles.find((cycle) => cycle.id === currentCycleId)

	function changeAmountSecondsPassed(seconds: number) {
		setAmountSecondsPassed(seconds)
	}

	function tagCurrentCycleAsFinished() {
		setCycles((state) => {
			return state.map((cycle) => {
				if (cycle.id === currentCycleId) {
					return { ...cycle, finishedDate: new Date() }
				} else {
					return cycle
				}
			})
		})
	}

	function createNewCycle(data: CreateCycleData) {
		const newCycleId = crypto.randomUUID()

		setCycles((state) => [
			...state,
			{
				id: newCycleId,
				taskDescription: data.taskDescription,
				minutesAmount: data.minutesAmount,
				startDate: new Date(),
			},
		])

		setCurrentCycleId(newCycleId)
		setAmountSecondsPassed(0)
	}

	function pauseCurrentCycle() {
		console.log('pauseCurrentCycle')
		setCycles((state) => {
			return state.map((cycle) => {
				if (cycle.id === currentCycleId) {
					return { ...cycle, pausedDate: new Date() }
				} else {
					return cycle
				}
			})
		})
		setCurrentCycleId(null)
	}

	return (
		<CountdownContext.Provider
			value={{
				cycles,
				currentCycle,
				currentCycleId,
				amountSecondsPassed,
				changeAmountSecondsPassed,
				tagCurrentCycleAsFinished,
				createNewCycle,
				pauseCurrentCycle,
			}}
		>
			{children}
		</CountdownContext.Provider>
	)
}
