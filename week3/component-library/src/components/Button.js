import cx from 'classnames'
import PropTypes from 'prop-types'; //ES6
import { twMerge } from 'tailwind-merge'
// we only need to import PropTypes here if we are using their PropType validation
// for example PropTypes.bool,

//making components like this help you create default components you can later give to anyone to use anywhere
const Button = (props) => {
    //this way we show the buttons we created in app
    const {children, primary, secondary, success, warning, danger, rounded, outline, ...otherProps} = props

    //validating props by type, most common reason to use this library
    //typescript is also used for this more recently and a lot more
    //primary: PropTypes.bool
    
        //turning into a true or false (bool)
        const count = 
        Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)
        
        if (count > 1){
            console.warn('Error. Only use one of the following primary, secondary, success, warning, danger')
        }


        const baseClass = 'flex items-center px-8 py-3 border'
        const classes = twMerge(
          cx(otherProps.className, baseClass, {
            // color variants, pick one
            'bg-blue-500 border-blue-500 text-white': primary,
            'bg-gray-900 border-gray-900 text-white': secondary,
            'bg-green-500 border-green-500 text-white': success,
            'bg-orange-400 border-orange-500 text-white': warning,
            'bg-red-600 border-red-600 text-white': danger,
            // outline and rounded additional style props
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-orange-400': outline && warning,
            'text-red-600': outline && danger,
          })
        )
      
        return (
          <button {...otherProps} className={classes}>
            {children}
          </button>
        )
      }

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
  }

//always export your components so you can use them 
export default Button