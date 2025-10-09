import {useEffect} from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

const Modal = (props) => {
    const {title, children, onClose, actionBar, crazy} = props

    // the function we want to call
    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        // if it's missing do this
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])

    const overlayClass = crazy 
    ? 'fixed inset-0 bg-teal-300 opacity-50'
    : 'fixed inset-0 bg-grey-300 opacity-50'

    const windowClass = cx('fixed inset-40 p-10 bg-white', {'rounded-lg': crazy})

    return ReactDOM.createPortal(
        <>
        {/* overlay, cover the entire screen, onClick close the modal */}
        <div onClick={onClose} className={overlayClass}></div>
        {/* modal window, this displays the modal content  */}
        <div className={windowClass}> 
            <div className="flex flex-col justify-etween h-full">
                {title && <h2 className="text-2xl">{title}</h2>}
                {/* children content */}
                {children}
                <div className="flex flex-row justify-end">
                    {/* action bar buttons  */}
                    {actionBar}
                </div>
            </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal