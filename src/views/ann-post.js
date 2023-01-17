import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ann-post.css'

const AnnPost = (props) => {
  return (
    <div className="ann-post-container">
      <Helmet>
        <title>AnnPost - exported project</title>
        <meta property="og:title" content="AnnPost - exported project" />
      </Helmet>
      <div className="ann-post-hero">
        <div className="ann-post-container1">
          <h1 className="ann-post-text">Let&apos;s keep things organised</h1>
          <span className="ann-post-text1">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </div>
      </div>
      <Link to="/announcements-page" className="ann-post-navlink button">
        Înapoi
      </Link>
    </div>
  )
}

export default AnnPost
