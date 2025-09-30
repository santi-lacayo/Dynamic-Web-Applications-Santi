import React from 'react'
import cx from 'classnames'
import {NavLink, Link} from 'react-router-dom'
import Panel from './Panel'

const Navbar = () => {
    const activeClass = 'font-bold decoration-solid'
    const pendingClass = 'text-red-500'

  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
        {/* links we create so when clicking it shifts between components */}
        <Link to="/" className="text-blue-500">Button</Link>
        <Link to="/accordion" className="text-blue-500">Accordion</Link>
        <Link to="/dropdown" className="text-blue-500">Dropdown</Link>
    </Panel>
  )
}

export default Navbar

