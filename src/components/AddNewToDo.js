import React from 'react'

class AddNewToDo extends React.Component {
    state = {
        input : ""
    }
    handlechange = (event) => this.setState({ input: event.target.value })

    render(){
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input type="text" value={this.state.input} onChange={this.handlechange} />
            <button onClick={()=>this.props.ajout(this.state.input)}>Add</button>
        </form>
    )
}}

export default AddNewToDo
