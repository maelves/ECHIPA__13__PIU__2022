import React from 'react'
import {Link} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import './payment-page.css'

const PaymentPage = (props) => {
    return (
        <div className="payment-page-container">
            <Helmet>
                <title>Block Manager</title>
                <meta property="og:title" content="PaymentPage - exported project"/>
            </Helmet>
            <div className="payment-page-payment-page">
        <span className="payment-page-text">
          <span>Factură gaz</span>
        </span>
                <span className="payment-page-text02">
          <span>Factură curent</span>
        </span>
                <span className="payment-page-text04">
          <span>Factură apă</span>
        </span>
                <div className="payment-page-placeholder-image-true">
          <span className="payment-page-text06">
            <span>Placeholder</span>
          </span>
                    <img
                        alt="Path2153"
                        src="/playground_assets/path2153-vpqi.svg"
                        className="payment-page-path"
                    />
                    <img
                        alt="Path2154"
                        src="/playground_assets/path2154-wn7j.svg"
                        className="payment-page-path1"
                    />
                </div>
                <div className="payment-page-placeholder-image-true1">
          <span className="payment-page-text08">
            <span>Placeholder</span>
          </span>
                    <img
                        alt="PathI215"
                        src="/playground_assets/pathi215-htij.svg"
                        className="payment-page-path2"
                    />
                    <img
                        alt="PathI215"
                        src="/playground_assets/pathi215-nw78.svg"
                        className="payment-page-path3"
                    />
                </div>
                <div className="payment-page-placeholder-image-true2">
          <span className="payment-page-text10">
            <span>Placeholder</span>
          </span>
                    <img
                        alt="PathI216"
                        src="/playground_assets/pathi216-s5jq.svg"
                        className="payment-page-path4"
                    />
                    <img
                        alt="PathI216"
                        src="/playground_assets/pathi216-2k2.svg"
                        className="payment-page-path5"
                    />
                </div>
                <div className="payment-page-group9">
                    <Link to="/card-payment-page" className="payment-page-navlink">
                        <img
                            alt="Rectangle143821"
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/54799460-e6e6-41be-9ae3-a057350880e1/e716ddfe-58dd-4d85-94b1-2a26e09820a0?org_if_sml=11088"
                            className="payment-page-rectangle14 button"
                        />
                    </Link>
                    <span className="payment-page-text12">
            <span>Plătește factura</span>
          </span>
                </div>
                <div className="payment-page-group11">
                    <img
                        alt="Rectangle143827"
                        src="/playground_assets/rectangle143827-7468-200h.png"
                        text="Plateste factura"
                        className="payment-page-rectangle141 button"
                    />
                    <span className="payment-page-text14">
            <span>Plătește factura</span>
          </span>
                </div>
                <div className="payment-page-container1">
                    <Link to="/card-payment-page" className="payment-page-navlink1">
                        <div className="payment-page-group111 button">
                            <img
                                alt="Rectangle143827"
                                src="/playground_assets/rectangle143827-7468-200h.png"
                                className="payment-page-button-back button"
                            />
                            <span className="payment-page-button-txt">
                <span>Plătește factura</span>
              </span>
                        </div>
                    </Link>
                </div>
                <img
                    alt="image"
                    src="/playground_assets/logo-200h.png"
                    className="payment-page-image"
                />
                <div className="payment-page-butoane-bara">
                    <Link to="/home" className="payment-page-navlink2">
                        <img
                            id="homebtn"
                            alt="IMAGE1976053homehomepagehomepagehomepagesicon14418"
                            src="/playground_assets/image1976053homehomepagehomepagehomepagesicon14418-5frf-400h.png"
                            className="payment-page-i-m-a-g-e1976053homehomepagehomepagehomepagesicon1 button"
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
                            className="payment-page-i-m-a-g-e4092561envelopemailmobileuimessageemailicon1 button"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
