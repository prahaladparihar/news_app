import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
// css files
import '../css/style.css'
// img files
import logo from '../img/logo.png'


class Header extends Component {
    state = {
        active:'active',
        keyword: ''
    }
    inputChangeHandler = (event) => {
        const bg_value = event.target.value === '' ? 'active' : 'non_active'
        this.setState({
            active: bg_value,
            keyword: event.target.value
        })
    }

    render(){
    return (
        <header className = {this.state.active}>
            <img src={logo} alt='logo'/> 
            <br/>
            <input 
                type='text' 
                className='form-control col-4'
                onChange = {this.props.keyword}
            />
            <br/>
        </header>
    )
    }
}

export default Header