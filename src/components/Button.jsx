import PropTypes from 'prop-types'

const Button = ({text, bgColor, onClick, classInsert}) => {
  return (
    <button className={`btn ${classInsert}`} style={{backgroundColor: bgColor}} onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  bgColor: 'black',
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
}

export default Button
