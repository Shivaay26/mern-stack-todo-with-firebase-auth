import React from 'react'

const Cards = ({todo,deletefunction}) => {
    return (
        <div>
            <div className="cards">{todo.todo}
            <button className="delete" onClick={()=>deletefunction(todo._id)}> X </button>
            </div>
        </div>
    )
}

export default Cards
