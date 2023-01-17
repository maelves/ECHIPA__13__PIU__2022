import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './generate-report-page.css'

const GenerateReportPage = (props) => {
    return (
        <div className="generate-report-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta
                    property="og:title"
                    content="GenerateReportPage - exported project"
                />
            </Helmet>
            <div className="generate-report-page-generate-report-page">
                <div className="generate-report-page-menu">
                    <img
                        alt="Line11814"
                        src="/playground_assets/line11814-tkjm.svg"
                        className="generate-report-page-line1"
                    />
                    <img
                        alt="Line21815"
                        src="/playground_assets/line21815-hnv.svg"
                        className="generate-report-page-line2"
                    />
                    <img
                        alt="Line31816"
                        src="/playground_assets/line31816-ntxg.svg"
                        className="generate-report-page-line3"
                    />
                </div>
                <span className="generate-report-page-text">
          <span>Gaz</span>
        </span>
                <span className="generate-report-page-text02">
          <span>Anul</span>
        </span>
                <span className="generate-report-page-text04">
          <span>Luna</span>
        </span>
                <span className="generate-report-page-text06">
          <span>Tip de raport</span>
        </span>
                <span className="generate-report-page-text08">
          <span>Curent</span>
        </span>
                <span className="generate-report-page-text10">
          <span>Apă</span>
        </span>
                <img
                    alt="IMAGE5736348analysisbarchartgrowreporticon14410"
                    src="/playground_assets/image5736348analysisbarchartgrowreporticon14410-kboo-400h.png"
                    className="generate-report-page-i-m-a-g-e5736348analysisbarchartgrowreporticon1"
                />
                <img
                    id="graph"
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    className="generate-report-page-image"
                />
                <input
                    type="checkbox"
                    checked="true"
                    className="generate-report-page-checkbox"
                />
                <input
                    type="checkbox"
                    checked="true"
                    className="generate-report-page-checkbox1"
                />
                <input
                    type="checkbox"
                    checked="true"
                    className="generate-report-page-checkbox2"
                />
                <select className="generate-report-page-select">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <select className="generate-report-page-select1">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="generate-report-page-image1"
                />
                <a href="#graph" className="generate-report-page-link">
                    <div className="generate-report-page-container1">
                        <img
                            alt="Rectangle144446"
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/54799460-e6e6-41be-9ae3-a057350880e1/1d3579ee-d89a-4d5f-84c1-355ced9584d7?org_if_sml=1986"
                            className="generate-report-page-rectangle14"
                        />
                        <span className="generate-report-page-text12">
              <span>Afișează</span>
              <br></br>
            </span>
                    </div>
                </a>
                <div className="generate-report-page-butoane-bara">
                    <Link to="/home" className="generate-report-page-navlink">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="generate-report-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="generate-report-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GenerateReportPage
