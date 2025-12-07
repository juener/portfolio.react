import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 80vh;
		width: 80vw;
		background-color: #123123;
		border-radius: 10px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
	}
`

export const Header = styled.h1`
	background-color: black;
	color: #fff;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
  padding: 0 10px;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	width: 100%;
	gap: 10px;
	padding: 10px;

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
	}

	input{
		padding: 10px;
		background-color: white;
		border-radius: 5px;
	}

	input[type="text"] {
		flex: 1;
	}

	input[type="number"] {
		width: 50px;
		appearance: textfield;
		-moz-appearance: textfield;

		text-align: center;
	}

	/* Remove the up and down arrows */
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}


	button {
		padding: 10px;
		background-color: white;
		border-radius: 5px;
		width: 8rem;
		align-self: center;
	}

	button:disabled {
		background-color: gray;
		cursor: not-allowed;
	}

`

export const Timer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 4px;

	span {
		font-size: 6rem;
		font-weight: bold;
		color: white;
		font-family: monospace;
		background-color: rgba(255, 255, 255, 0.1);	
		padding-inline: 5px;
		border-radius: 5px;
		}
`
