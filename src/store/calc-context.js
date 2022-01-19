import React, { useState } from 'react'

const CalcContext = React.createContext({
	firstValue: '',
	secondValue: '',
	operator: null,
	addInput: (input) => {},
	clearInput: () => {},
	removeLastInput: () => {},
	mathOperator: (operator) => {},
	equals: () => {},
})

export const CalcContextProvider = (props) => {
	const [firstValue, setFirstValue] = useState('0')
	const [secondValue, setSecondValue] = useState('')
	const [operator, setOperator] = useState(null)

	const lastChar = secondValue ? secondValue.slice(-1) : firstValue.slice(-1)
	const conditions = ['/', '*', '-', '+']

	const addInput = (newInput) => {
		if (operator) {
			setSecondValue((prevInput) => `${prevInput}${newInput}`)
			return
		}

		firstValue === '0'
			? setFirstValue(newInput)
			: setFirstValue((prevInput) => `${prevInput}${newInput}`)
	}

	const clearInput = () => {
		setFirstValue('0')
		setSecondValue('')
		setOperator(null)
	}

	const removeLastInput = () => {
		if (secondValue.length === 1) {
			setSecondValue('')
		} else if (secondValue) {
			setSecondValue((prevInput) => prevInput.slice(0, -1))
		} else if (operator) {
			setOperator(null)
		} else if (firstValue.length === 1) {
			setFirstValue('0')
		} else {
			setFirstValue((prevInput) => prevInput.slice(0, -1))
		}
	}

	const mathOperator = (operator) => {
		setOperator(operator)

		if (conditions.some((el) => lastChar.includes(el))) {
			setOperator(operator)
		}
	}

	const equals = () => {
		if (!secondValue || !operator) {
			alert('Enter a valid input.')
			return
		}

		let result

		switch (operator) {
			case '/':
				result = (firstValue / secondValue).toString()
				setFirstValue(result)
				setSecondValue('')
				setOperator(null)
				return
			case '*':
				result = (firstValue * secondValue).toString()
				setFirstValue(result)
				setSecondValue('')
				setOperator(null)
				return
			case '-':
				result = (firstValue - secondValue).toString()
				setFirstValue(result)
				setSecondValue('')
				setOperator(null)
				return
			case '+':
				result = (+firstValue + +secondValue).toString()
				setFirstValue(result)
				setSecondValue('')
				setOperator(null)
				return
			default:
				return
		}
	}

	return (
		<CalcContext.Provider
			value={{
				firstValue: firstValue,
				secondValue: secondValue,
				operator: operator,
				addInput: addInput,
				clearInput: clearInput,
				removeLastInput: removeLastInput,
				mathOperator: mathOperator,
				equals: equals,
			}}
		>
			{props.children}
		</CalcContext.Provider>
	)
}

export default CalcContext
