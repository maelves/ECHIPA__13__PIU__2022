import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './announcements-page.css'

const AnnouncementsPage = (props) => {
    return (
        <div className="announcements-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta
                    property="og:title"
                    content="AnnouncementsPage - exported project"
                />
            </Helmet>
            <div className="announcements-page-announcements-page">
                <img
                    alt="IMAGE8219597musictrumpetmusicianprofessionentertai2293"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/54799460-e6e6-41be-9ae3-a057350880e1/13c4081d-4b84-4cc5-97ff-4d8f7290f24f?org_if_sml=142500"
                    className="announcements-page-i-m-a-g-e8219597musictrumpetmusicianprofessionentertai"
                />
                <span className="announcements-page-text">
          <span>Anunțuri</span>
        </span>
                <Link to="/ann-post" className="announcements-page-navlink">
                    <div className="announcements-page-group9 button">
            <span className="announcements-page-text02">
              <span>Titlu</span>
            </span>
                        <span className="announcements-page-text04">
              <span>Lorem ipsum</span>
            </span>
                    </div>
                </Link>
                <div className="announcements-page-group12 button">
          <span className="announcements-page-text06">
            <span>Titlu</span>
          </span>
                    <span className="announcements-page-text08">
            <span>Lorem ipsum</span>
          </span>
                </div>
                <div className="announcements-page-group11 button">
          <span className="announcements-page-text10">
            <span>Titlu</span>
          </span>
                    <span className="announcements-page-text12">
            <span>Lorem ipsum</span>
          </span>
                </div>
                <Link to="/ann-post" className="announcements-page-navlink1">
                    <div className="announcements-page-group10 button">
            <span className="announcements-page-text14">
              <span>Titlu</span>
            </span>
                        <span className="announcements-page-text16">
              <span>Lorem ipsum</span>
            </span>
                    </div>
                </Link>
                <Link
                    to="/post-announcement-page"
                    className="announcements-page-navlink2"
                >
                    <div className="announcements-page-group91 button">
            <span className="announcements-page-text18">
              <span>
                <span>Postează</span>
                <br></br>
                <span>anunț</span>
              </span>
            </span>
                    </div>
                </Link>
                <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="announcements-page-image"
                />
                <div className="announcements-page-butoane-bara">
                    <Link to="/home" className="announcements-page-navlink3">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="announcements-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="home-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
                <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="home-image"
                />
            </div>
        </div>
    )
}

export default AnnouncementsPage
