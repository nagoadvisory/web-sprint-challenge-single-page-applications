import React from "react";

function Confirmation({ details }) {
    if (!details) {
        return <h3>working fetching your friend&apos;s details...</h3>
    }
    return (
        <div className='pizza-container'>
            <h1>Congrats! Pizza is on its way!!</h1>
            </div>

    )
}
export default Confirmation 