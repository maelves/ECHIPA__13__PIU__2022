import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PaymentPage from './views/payment-page'
import Home from './views/home'
import IndexPage from './views/index-page'
import VotePage from './views/vote-page'
import AnnouncementsPage from './views/announcements-page'
import BillGestionPage from './views/bill-gestion-page'
import Login from './views/login'
import GarbageTaxPage from './views/garbage-tax-page'
import CardPaymentPage from './views/card-payment-page'
import ProblemsPage from './views/problems-page'
import HygieneTaxPage from './views/hygiene-tax-page'
import GenerateReportPage from './views/generate-report-page'
import AnnPost from './views/ann-post'
import ConfirmTransactionPage from './views/confirm-transaction-page'
import ConfirmAnnouncementPostPage from './views/confirm-announcement-post-page'
import ConfirmSesiPostPage from './views/confirm-sesi-post-page'
import ConfirmIndexPostPage from './views/confirm-index-post-page'
import ConfirmVotePostPage from './views/confirm-vote-post-page'
import PostAnnouncementPage from './views/post-announcement-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PaymentPage} exact path="/payment-page" />
        <Route component={Home} exact path="/home" />
        <Route component={IndexPage} exact path="/index-page" />
        <Route component={VotePage} exact path="/vote-page" />
        <Route component={AnnouncementsPage} exact path="/announcements-page" />
        <Route component={BillGestionPage} exact path="/bill-gestion-page" />
        <Route component={Login} exact path="/" />
        <Route component={GarbageTaxPage} exact path="/garbage-tax-page" />
        <Route component={CardPaymentPage} exact path="/card-payment-page" />
        <Route component={ProblemsPage} exact path="/problems-page" />
        <Route component={HygieneTaxPage} exact path="/hygiene-tax-page" />
        <Route
          component={GenerateReportPage}
          exact
          path="/generate-report-page"
        />
        <Route component={AnnPost} exact path="/ann-post" />
        <Route
          component={ConfirmTransactionPage}
          exact
          path="/confirm-transaction-page"
        />
        <Route
          component={ConfirmAnnouncementPostPage}
          exact
          path="/confirm-announcement-post-page"
        />
        <Route
          component={ConfirmSesiPostPage}
          exact
          path="/confirm-sesi-post-page"
        />
        <Route
          component={ConfirmIndexPostPage}
          exact
          path="/confirm-index-post-page"
        />
        <Route
          component={ConfirmVotePostPage}
          exact
          path="/confirm-vote-post-page"
        />
        <Route
          component={PostAnnouncementPage}
          exact
          path="/post-announcement-page"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
