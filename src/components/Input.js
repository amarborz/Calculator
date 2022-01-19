import React, { useContext } from 'react'
import CalcContext from '../store/calc-context'
import classes from './Input.module.css'

const Input = () => {
	const ctx = useContext(CalcContext)

	const inputChangeHandler = () => {}

	return (
		<div>
			<input
				className={classes.input}
				value={
					ctx.secondValue
						? `${ctx.firstValue}${ctx.operator}${ctx.secondValue}`
						: ctx.operator
						? `${ctx.firstValue}${ctx.operator}`
						: ctx.firstValue
				}
				onChange={inputChangeHandler}
			/>
		</div>
	)
}

export default Input
