import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './problems-page.css'

const ProblemsPage = (props) => {
    return (
        <div className="problems-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta property="og:title" content="ProblemsPage - exported project"/>
            </Helmet>
            <div className="problems-page-problems-page">
                <div className="problems-page-menu">
                    <img
                        alt="Line12025"
                        src="/playground_assets/line12025-adwr.svg"
                        className="problems-page-line1"
                    />
                    <img
                        alt="Line22026"
                        src="/playground_assets/line22026-o2pm.svg"
                        className="problems-page-line2"
                    />
                    <img
                        alt="Line32027"
                        src="/playground_assets/line32027-af7d.svg"
                        className="problems-page-line3"
                    />
                </div>
                <div className="problems-page-menu1">
                    <img
                        alt="Line12035"
                        src="/playground_assets/line12035-hup.svg"
                        className="problems-page-line11"
                    />
                    <img
                        alt="Line22036"
                        src="/playground_assets/line22036-fg1d.svg"
                        className="problems-page-line21"
                    />
                    <img
                        alt="Line32037"
                        src="/playground_assets/line32037-36zk.svg"
                        className="problems-page-line31"
                    />
                </div>
                <img
                    alt="IMAGE8219591designmeasurementrulerboxpackageicon12224"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/54799460-e6e6-41be-9ae3-a057350880e1/5897c957-ca08-459d-8028-ab9755755e15?org_if_sml=154168"
                    className="problems-page-i-m-a-g-e8219591designmeasurementrulerboxpackageicon1"
                />
                <span className="problems-page-text">
          <span>Titlu</span>
        </span>
                <span className="problems-page-text02">
          <span>Descrie problema</span>
        </span>
                <Link to="/confirm-sesi-post-page" className="problems-page-navlink">
                    <div className="problems-page-group9 button">
            <span className="problems-page-text04">
              <span>
                <span>Trimite</span>
                <br></br>
                <span>sesizare</span>
                <br></br>
                <span></span>
              </span>
            </span>
                    </div>
                </Link>
                <div className="problems-page-container1">
                    <div className="problems-page-container2">
                        <img
                            alt="image"
                            src="/playground_assets/logo-200h.png"
                            className="problems-page-image"
                        />
                    </div>
                    <input type="text" className="problems-page-textinput input"/>
                    <input type="text" className="problems-page-textinput1 input"/>
                </div>
                <img
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    alt="image"
                    className="problems-page-image1"
                />
                <div className="problems-page-butoane-bara">
                    <Link to="/home" className="problems-page-navlink1">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="problems-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="problems-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProblemsPage
