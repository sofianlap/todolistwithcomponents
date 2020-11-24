import React from 'react'

function NewList(props) {
    return (
        <div>
        {props.taches.map(onetodo => (
            <div key={onetodo.id}>
              <h1 className={onetodo.isDone === true ? "done" : ""}> {onetodo.list} </h1>
              <button onClick={() => props.effacer(onetodo.id)}>Delete</button>
              <button onClick={() => props.complet(onetodo.id)} >{onetodo.isDone === true ? "Undo" : "Complete"}</button>
            </div>)

          )}
        </div>
    )
}

export default NewList
