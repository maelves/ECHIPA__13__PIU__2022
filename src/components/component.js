import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.Rectangle14_alt}
        src={props.Rectangle14_src}
        className="component-rectangle14"
      />
      <span className="component-text">
        <span className="">
          <span className="">Plătește</span>
          <br className=""></br>
          <span className=""></span>
        </span>
      </span>
    </div>
  )
}

AppComponent.defaultProps = {
  Rectangle14_alt: 'Rectangle144446',
  Rectangle14_src: '/playground_assets/rectangle144446-rq6l-200h.png',
  rootClassName: '',
}

AppComponent.propTypes = {
  Rectangle14_alt: PropTypes.string,
  Rectangle14_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
