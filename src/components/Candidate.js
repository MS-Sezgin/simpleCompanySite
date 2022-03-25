import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Candidate extends Component {
    state = {
        filterText: "",
        data: this.props.candidate
    }

    render() {
        const searchData = (e) => {
            this.setState({ filterText: e.target.value })
        }

        const filteredData = this.state.data.sort((a,b)=>a.name.localeCompare(b.name))
        .filter(
            item => {
                return item.name.toLowerCase().indexOf(this.state.filterText) !== -1
                    || item.phone.toLowerCase().indexOf(this.state.filterText) !== -1
            })
        return (
            <div className='mainCandidate'>
                <div>
                    <div className='gridTable'>
                        <span className='inputText'> <label>Search Tab  <input onChange={searchData} placeholder='...'></input></label></span>
                        <span><strong>Name and Surname</strong></span>
                        <span><strong>Phone</strong></span>
                        <span><strong>Detail</strong></span>
                    </div>

                    {filteredData.map((item, index) => {
                        return <div className='gridTable' key={index}>
                            <span>{item.name}</span>
                            <span>{item.phone}</span>
                            <span><Link to={"/Candidate/CandidateDetail/" + item.id} className='button-8'>Detail</Link></span>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default (Candidate)