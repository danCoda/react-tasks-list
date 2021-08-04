import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log("CLick");
    }
    
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
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
