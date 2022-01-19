import React, { useState } from 'react'

const CalcContext = React.createContext({
	input: '',
	addInput: (input) => {},
	clearInput: () => {},
	removeLastInput: () => {},
	mathOperator: (operator) => {},
	equals: () => {},
	toDecimal: () => {},
})

export const CalcContextProvider = (props) => {
	const [input, setInput] = useState('0')

	const lastChar = input.slice(-1)
	const conditions = ['/', '*', '-', '+']

	const addInput = (newInput) => {
		input === '0'
			? setInput(newInput)
			: setInput((prevInput) => `${prevInput}${newInput}`)
	}

	const clearInput = () => {
		setInput('0')
	}

	const removeLastInput = () => {
		input.length === 1
			? setInput('0')
			: setInput((prevInput) => prevInput.slice(0, -1))
	}

	const mathOperator = (operator) => {
		if (conditions.some((el) => lastChar.includes(el))) {
			setInput((prevInput) => prevInput.slice(0, -1))
		}

		setInput((prevInput) => `${prevInput}${operator}`)
	}

	const equals = () => {
		if (conditions.some((el) => lastChar.includes(el))) {
			alert(`Don't do that.`)
			return
		}

		const result = eval(input).toString()
		setInput(result)
	}

	const toDecimal = () => {
		setInput((prev) => Number(prev).toFixed(2))
	}

	return (
		<CalcContext.Provider
			value={{
				input: input,
				addInput: addInput,
				clearInput: clearInput,
				removeLastInput: removeLastInput,
				mathOperator: mathOperator,
				equals: equals,
				toDecimal: toDecimal,
			}}
		>
			{props.children}
		</CalcContext.Provider>
	)
}

export default CalcContext
