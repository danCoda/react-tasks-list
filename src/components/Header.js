import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <Button 
                color={props.showAdd ? 'red' : 'green'} 
                text={props.showAdd ? 'Close' : 'Add'} 
                onClick={props.onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'task trackkker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'red'
}
export default Header;
