import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './confirm-sesi-post-page.css'

const ConfirmSesiPostPage = (props) => {
    return (
        <div className="confirm-sesi-post-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta
                    property="og:title"
                    content="ConfirmSesiPostPage - exported project"
                />
            </Helmet>
            <div className="confirm-sesi-post-page-confirm-sesi-post-page">
        <span className="confirm-sesi-post-page-text">
          <span>Sesizarea a fost trimisă cu succes!</span>
        </span>
                <div className="confirm-sesi-post-page-group11">
                    <Link to="/home" className="confirm-sesi-post-page-navlink">
                        <img
                            src="/playground_assets/rectangle142351-uw3-400h.png"
                            alt="Rectangle142351"
                            className="confirm-sesi-post-page-rectangle14 button"
                        />
                    </Link>
                    <span className="confirm-sesi-post-page-text2">
            <span>Înapoi la pagina de start</span>
          </span>
                </div>
                <div className="confirm-sesi-post-page-frame5"></div>
                <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="confirm-sesi-post-page-image"
                />
                <div className="confirm-sesi-post-page-butoane-bara">
                    <Link to="/home" className="confirm-sesi-post-page-navlink1">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="confirm-sesi-post-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="confirm-sesi-post-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConfirmSesiPostPage
