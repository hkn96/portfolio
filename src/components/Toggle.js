import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
      <div style={{ display: 'flex' }}>
        <motion.h4 layout>{title}</motion.h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          size='2x'
          style={{ marginLeft: '10px' }}
        />
      </div>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  )
}

export default Toggle
