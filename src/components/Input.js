import React, { useRef} from 'react'
import useStore from '../store'

const Input = () => {
	const inputRef = useRef()
	const {addPerson} = useStore()
	function add (){
		const person = inputRef.current.value;
		if(person !==''){
			addPerson(person)
			inputRef.current.value =''
		}
		
	}
  return (
	<div>
		<input type='text' ref={inputRef} />
		<button onClick={add}>Add Person</button>
	</div>
  )
}

export default Input