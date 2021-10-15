import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Form(props) {
    const history = useHistory()

    const{name, size, pepperoni, sausage, Pineapple, Mushroom, specialInstructions, handleChange, handleSubmit, disabled } = props

    return (
        // A form with an id of "pizza-form"
        <form id='pizza-form' onSubmit = {handleSubmit}>
            <div>
            <label> <h4>Choice of size</h4>
                <select name = 'size' value ={size} onChange = {handleChange} >
                    <option value = 'Small'>Small</option>
                    <option value = 'Medium'>Medium</option>
                    <option value = 'Large'>Large</option>
                    <option value = 'XL'>XL</option>
                </select>
            </label>
            </div>

            <div>
            <label><h4>Choice of Sauce</h4></label>
            </div>

            {/* A checklist for toppings - at least 4 (hint: name each separately!) */}
            <div>
            <label> <h4>Add Toppings</h4> </label>
                <label> Pepperoni:
                    <input id='pepperoni' name='pepperoni' type='checkbox' checked={pepperoni} onChange={handleChange}/>
                </label>
                <label> Sausage:
                    <input id='sausage' name='sausage' type='checkbox' checked={sausage} onChange={handleChange}/>
                </label>
                <label> Pineapple:
                    <input id='Pineapple' name='Pineapple' type='checkbox' checked={Pineapple} onChange={handleChange}/>
                </label>
                <label> Mushroom:
                    <input id='Mushroom' name='Mushroom' type='checkbox' checked={Mushroom} onChange={handleChange}/>
                </label>
            </div>

            {/*Text input for special instructions with an id of "special-text" */}
            <div>
                <label> <h4>Special Instructions</h4> 
                    <input id="special-text" name="special-text" type="textbox" value={specialInstructions} onChange={handleChange} />
                </label>
            </div>

            {/* An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions */}
            <div>
                <button id='order-button' disabled={disabled} type='submit'>Add to Order</button>
            </div>

        </form>
    )
}
