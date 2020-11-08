import React from 'react'

export default class SearchBar extends React.Component {
   
    state = {term: ''}
    onInputChange = (e)=>{
        this.setState({
            term: e.target.value
        })
    }
    handleOnSubmit=event=>{
        event.preventDefault()
    }
    render() {
        return (
            <div className='search-bar ui segment'>
                <form className="ui form" onSubmit={this.handleOnSubmit}>
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}