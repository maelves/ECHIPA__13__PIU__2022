import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './garbage-tax-page.css'

const GarbageTaxPage = (props) => {
    return (
        <div className="garbage-tax-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta property="og:title" content="GarbageTaxPage - exported project"/>
            </Helmet>
            <div className="garbage-tax-page-garbage-tax-page">
                <div className="garbage-tax-page-menu">
                    <img
                        alt="Line12046"
                        src="/playground_assets/line12046-c28.svg"
                        className="garbage-tax-page-line1"
                    />
                    <img
                        alt="Line22047"
                        src="/playground_assets/line22047-njr3.svg"
                        className="garbage-tax-page-line2"
                    />
                    <img
                        alt="Line32048"
                        src="/playground_assets/line32048-yb6p.svg"
                        className="garbage-tax-page-line3"
                    />
                </div>
                <div className="garbage-tax-page-menu1">
                    <img
                        alt="Line12056"
                        src="/playground_assets/line12056-dhe6c.svg"
                        className="garbage-tax-page-line11"
                    />
                    <img
                        alt="Line22057"
                        src="/playground_assets/line22057-54hr.svg"
                        className="garbage-tax-page-line21"
                    />
                    <img
                        alt="Line32058"
                        src="/playground_assets/line32058-yad4.svg"
                        className="garbage-tax-page-line31"
                    />
                </div>
                <span className="garbage-tax-page-text">
          <span>Plastic</span>
        </span>
                <span className="garbage-tax-page-text02">
          <span>Hârtie</span>
        </span>
                <span className="garbage-tax-page-text04">
          <span>Metal</span>
        </span>
                <span className="garbage-tax-page-text06">
          <span>Gunoi menajer</span>
        </span>
                <span className="garbage-tax-page-text08">
          <span>Selectați tipurile de deșeuri colectate:</span>
        </span>
                <img
                    alt="Rectangle202164"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/54799460-e6e6-41be-9ae3-a057350880e1/2a5a1aa3-5193-4b35-a977-fa8eba504061?org_if_sml=11296"
                    className="garbage-tax-page-rectangle20"
                />
                <div className="garbage-tax-page-frame3643766albumimagelandscapephotophotosicon1 button">
                    <div className="garbage-tax-page-layer37">
                        <img
                            alt="Vector2164"
                            src="/playground_assets/vector2164-sdor.svg"
                            className="garbage-tax-page-vector"
                        />
                        <img
                            alt="Vector2164"
                            src="/playground_assets/vector2164-bh3.svg"
                            className="garbage-tax-page-vector1"
                        />
                        <img
                            alt="Vector2164"
                            src="/playground_assets/vector2164-z39a.svg"
                            className="garbage-tax-page-vector2"
                        />
                        <img
                            alt="Vector2164"
                            src="/playground_assets/vector2164-3c1g.svg"
                            className="garbage-tax-page-vector3"
                        />
                    </div>
                </div>
                <span className="garbage-tax-page-text10">
          <span>Încărcați fotografia doveditoare</span>
        </span>
                <img
                    alt="SVG3362524dumpgarbagetrashtruckicon12167"
                    src="/playground_assets/svg3362524dumpgarbagetrashtruckicon12167-4t5.svg"
                    className="garbage-tax-page-s-v-g3362524dumpgarbagetrashtruckicon1"
                />
                <div className="garbage-tax-page-group10">
                    <Link to="/card-payment-page" className="garbage-tax-page-navlink">
                        <img
                            alt="Rectangle143818"
                            src="/playground_assets/rectangle143818-6k6x-200h.png"
                            className="garbage-tax-page-rectangle14 button"
                        />
                    </Link>
                    <span className="garbage-tax-page-text12">
            <span>
              <span>Plătește</span>
              <br></br>
              <span></span>
            </span>
          </span>
                </div>
                <div className="garbage-tax-page-container1">
                    <img
                        alt="image"
                        src="/playground_assets/logo-200h.png"
                        className="garbage-tax-page-image"
                    />
                </div>
                <input type="checkbox" className="garbage-tax-page-checkbox"/>
                <input type="checkbox" className="garbage-tax-page-checkbox1"/>
                <input type="checkbox" className="garbage-tax-page-checkbox2"/>
                <input type="checkbox" className="garbage-tax-page-checkbox3"/>
                <div className="garbage-tax-page-butoane-bara">
                    <Link to="/home" className="garbage-tax-page-navlink1">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="garbage-tax-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="garbage-tax-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GarbageTaxPage
