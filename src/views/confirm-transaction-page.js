import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './confirm-transaction-page.css'

const ConfirmTransactionPage = (props) => {
    return (
        <div className="confirm-transaction-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta
                    property="og:title"
                    content="ConfirmTransactionPage - exported project"
                />
            </Helmet>
            <div className="confirm-transaction-page-confirm-transaction-page">
                <div className="confirm-transaction-page-menu">
                    <img
                        src="/playground_assets/line12351-7gg.svg"
                        alt="Line12351"
                        className="confirm-transaction-page-line1"
                    />
                    <img
                        src="/playground_assets/line22352-56w.svg"
                        alt="Line22352"
                        className="confirm-transaction-page-line2"
                    />
                    <img
                        src="/playground_assets/line32352-un8i.svg"
                        alt="Line32352"
                        className="confirm-transaction-page-line3"
                    />
                </div>
                <div className="confirm-transaction-page-menu1">
                    <img
                        src="/playground_assets/line12352-x6t4.svg"
                        alt="Line12352"
                        className="confirm-transaction-page-line11"
                    />
                    <img
                        src="/playground_assets/line22353-w1rd.svg"
                        alt="Line22353"
                        className="confirm-transaction-page-line21"
                    />
                    <img
                        src="/playground_assets/line32353-vbmk.svg"
                        alt="Line32353"
                        className="confirm-transaction-page-line31"
                    />
                </div>
                <span className="confirm-transaction-page-text">
          <span>Tranzactia a fost realizată cu succes!</span>
        </span>
                <div className="confirm-transaction-page-group11">
                    <Link to="/home" className="confirm-transaction-page-navlink">
                        <img
                            src="/playground_assets/rectangle142358-pwi-400h.png"
                            alt="Rectangle142358"
                            className="confirm-transaction-page-rectangle14 button"
                        />
                    </Link>
                    <span className="confirm-transaction-page-text2">
            <span>Înapoi la pagina de start</span>
          </span>
                </div>
                <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="confirm-transaction-page-image"
                />
                <div className="confirm-transaction-page-butoane-bara">
                    <Link to="/home" className="confirm-transaction-page-navlink1">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="confirm-transaction-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="confirm-transaction-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTransactionPage
