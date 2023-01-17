import React from 'react'

import PropTypes from 'prop-types'

import './group11.css'

const Group11 = (props) => {
  return (
    <div className={`group11-group11 ${props.rootClassName} `}>
      <span className="group11-text">
        <span>
          <span>Calculează total</span>
          <br></br>
          <span></span>
        </span>
      </span>
    </div>
  )
}

Group11.defaultProps = {
  rootClassName: '',
}

Group11.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group11
