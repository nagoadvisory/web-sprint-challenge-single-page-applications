import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Form(props) {
    const history = useHistory()

    const{name, size, pepperoni, sausage, mushroom, onion, instructions, handleChange, handleSubmit, disabled } = props

    return (
        <form onSubmit = {handleSubmit}>
            <label>Choice of size
                <select name = 'size' value ={size} onChange = {handleChange} >
                    <option value = 'Small'>Small</option>
                    <option value = 'Medium'>Medium</option>
                    <option value = 'Large'>Large</option>
                    <option value = 'XL'>XL</option>

                </select>
            </label>
        </form>
    )
}
