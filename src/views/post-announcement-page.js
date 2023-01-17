import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './post-announcement-page.css'

const PostAnnouncementPage = (props) => {
    return (
        <div className="post-announcement-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta
                    property="og:title"
                    content="PostAnnouncementPage - exported project"
                />
            </Helmet>
            <div className="post-announcement-page-announcement-page">
        <span className="post-announcement-page-text">
          <span>Titlu</span>
        </span>
                <span className="post-announcement-page-text02">
          <span>Conținutul anunțului</span>
        </span>
                <Link
                    to="/confirm-announcement-post-page"
                    className="post-announcement-page-navlink"
                >
                    <div className="post-announcement-page-group9 button">
            <span className="post-announcement-page-text04">
              <span>
                <span>
                  Postează
                  <span
                      dangerouslySetInnerHTML={{
                          __html: ' ',
                      }}
                  />
                </span>
                <br></br>
                <span>anunț</span>
                <br></br>
                <span></span>
              </span>
            </span>
                    </div>
                </Link>
                <img
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/54799460-e6e6-41be-9ae3-a057350880e1/9d857397-45a2-4de5-b9ec-f5cff2fdc21d?org_if_sml=141160"
                    alt="IMAGE8219589navigationsearchfindtelescopeviewicon12372"
                    className="post-announcement-page-i-m-a-g-e8219589navigationsearchfindtelescopeviewicon1"
                />
                <div className="post-announcement-page-butoane-bara">
                    <Link to="/home" className="post-announcement-page-navlink1">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="post-announcement-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
                        />
                    </Link>
                    <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
                        <div
                            data-thq="thq-dropdown-toggle"
                            className="home-dropdown-toggle"
                        >
                            <div
                                data-thq="thq-dropdown-arrow"
                                className="home-dropdown-arrow"
                            >
                                <svg viewBox="0 0 1024 1024" className="home-icon">
                                    <path d="M426 726v-428l214 214z"></path>
                                </svg>
                            </div>
                        </div>
                        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                            <li data-thq="thq-dropdown" className="home-dropdown list-item">
                                <Link to="/index-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle1"
                                    >
                                        <span className="home-text6">Trimite Indexul</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
                                <Link to="/vote-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle2"
                                    >
                                        <span className="home-text7">Voteaza</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
                                <Link to="/payment-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle3"
                                    >
                                        <span className="home-text8">Plati facturi</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
                                <Link to="/announcements-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle3"
                                    >
                                        <span className="home-text9">Anunturi</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
                                <Link to="/bill-gestion-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle3"
                                    >
                                        <span className="home-text10">Istoric facturi</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
                                <Link to="/generate-report-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle3"
                                    >
                                        <span className="home-text11">Rapoarte</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
                                <Link to="/garbage-tax-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle3"
                                    >
                                        <span className="home-text12">Gunoi</span>
                                    </div>
                                </Link>
                            </li>
                            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
                                <Link to="/hygiene-tax-page" className="home-navlink1">
                                    <div
                                        data-thq="thq-dropdown-toggle"
                                        className="home-dropdown-toggle3"
                                    >
                                        <span className="home-text13">Curatenie</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/problems-page" className="home-navlink2">
                        <img
                            alt="IMAGE4092561envelopemailmobileuimessageemailicon14417"
                            src="/playground_assets/image4092561envelopemailmobileuimessageemailicon14417-0evi-400h.png"
                            className="post-announcement-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
                <div className="post-announcement-page-container1">
                    <img
                        alt="image"
                        src="/playground_assets/logo-200h.png"
                        className="post-announcement-page-image"
                    />
                    <input
                        type="text"
                        className="post-announcement-page-textinput input"
                    />
                </div>
                <input
                    type="text"
                    className="post-announcement-page-textinput1 input"
                />
            </div>
        </div>
    )
}

export default PostAnnouncementPage
