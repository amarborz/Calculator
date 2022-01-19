import React, { useContext } from 'react'
import CalcContext from '../store/calc-context'
import classes from './Buttons.module.css'

const Buttons = () => {
	const ctx = useContext(CalcContext)

	const addInputHandler = (event) => {
		ctx.addInput(event.target.value)
	}

	const clearInputHandler = () => {
		ctx.clearInput()
	}

	const removeLastInputHandler = () => {
		ctx.removeLastInput()
	}

	const mathOperationHandler = (event) => {
		ctx.mathOperator(event.target.value)
	}

	const equalsHandler = () => {
		ctx.equals()
	}

	const toDecimalHandler = () => {
		ctx.toDecimal()
	}

	return (
		<div className={classes.grid}>
			<button className={classes.spanLight} onClick={clearInputHandler}>
				C
			</button>
			<button className={classes.spanLight} onClick={removeLastInputHandler}>
				⌫
			</button>
			<button className={classes.spanLight} onClick={toDecimalHandler}>
				%
			</button>
			<button
				className={classes.spanOrange}
				onClick={mathOperationHandler}
				value={'/'}
			>
				÷
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'1'}>
				1
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'2'}>
				2
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'3'}>
				3
			</button>
			<button
				className={classes.spanOrange}
				onClick={mathOperationHandler}
				value={'*'}
			>
				x
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'4'}>
				4
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'5'}>
				5
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'6'}>
				6
			</button>
			<button
				className={classes.spanOrange}
				onClick={mathOperationHandler}
				value={'-'}
			>
				-
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'7'}>
				7
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'8'}>
				8
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'9'}>
				9
			</button>
			<button
				className={classes.spanOrange}
				onClick={mathOperationHandler}
				value={'+'}
			>
				+
			</button>
			<button className={classes.span2} onClick={addInputHandler} value={'0'}>
				0
			</button>
			<button className={classes.span} onClick={addInputHandler} value={'.'}>
				.
			</button>
			<button className={classes.spanOrange} onClick={equalsHandler}>
				=
			</button>
		</div>
	)
}

export default Buttons
