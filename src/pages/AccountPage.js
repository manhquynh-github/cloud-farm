import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/metisMenu.css';
// import '../assets/css/owl.carousel.min.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/typography.css';
import '../assets/css/default-css.css';
import '../assets/css/styles.css';
import '../assets/css/responsive.css';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class AccountPage extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Table Layout - srtdash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="../assets/images/icon/favicon.ico" />
        {/* modernizr css */}
        {/*[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]*/}

          {/* main content area start */}
          <div className="main-content">
            {/* header area start */}
            <div className="header-area">
              <div className="row align-items-center">
                {/* nav and search button */}
                <div className="col-md-6 col-sm-8 clearfix">
                  <div className="nav-btn pull-left">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="search-box pull-left">
                    <form action="#">
                      <input type="text" name="search" placeholder="Search..." required />
                      <i className="ti-search" />
                    </form>
                  </div>
                </div>
                {/* profile info & task notification */}
                <div className="col-md-6 col-sm-4 clearfix">
                  <ul className="notification-area pull-right">
                    <li id="full-view"><i className="ti-fullscreen" /></li>
                    <li id="full-view-exit"><i className="ti-zoom-out" /></li>
                    <li className="dropdown">
                      <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                        <span>2</span>
                      </i>
                      <div className="dropdown-menu bell-notify-box notify-box">
                        <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                        <div className="nofity-list">
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-key btn-danger" /></div>
                            <div className="notify-text">
                              <p>You have Changed Your Password</p>
                              <span>Just Now</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-comments-smiley btn-info" /></div>
                            <div className="notify-text">
                              <p>New Commetns On Post</p>
                              <span>30 Seconds ago</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-key btn-primary" /></div>
                            <div className="notify-text">
                              <p>Some special like you</p>
                              <span>Just Now</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-comments-smiley btn-info" /></div>
                            <div className="notify-text">
                              <p>New Commetns On Post</p>
                              <span>30 Seconds ago</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-key btn-primary" /></div>
                            <div className="notify-text">
                              <p>Some special like you</p>
                              <span>Just Now</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-key btn-danger" /></div>
                            <div className="notify-text">
                              <p>You have Changed Your Password</p>
                              <span>Just Now</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb"><i className="ti-key btn-danger" /></div>
                            <div className="notify-text">
                              <p>You have Changed Your Password</p>
                              <span>Just Now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span>3</span></i>
                      <div className="dropdown-menu notify-box nt-enveloper-box">
                        <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                        <div className="nofity-list">
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img1.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">Hey I am waiting for you...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img2.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">When you can connect with me...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img3.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">I missed you so much...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img4.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">Your product is completely Ready...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img2.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">Hey I am waiting for you...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img1.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">Hey I am waiting for you...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                          <a href="#" className="notify-item">
                            <div className="notify-thumb">
                              <img src={require("../assets/images/author/author-img3.jpg")} alt="image" />
                            </div>
                            <div className="notify-text">
                              <p>Aglae Mayer</p>
                              <span className="msg">Hey I am waiting for you...</span>
                              <span>3:15 PM</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="settings-btn">
                      <i className="ti-settings" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* header area end */}
            {/* page title area start */}
            <div className="page-title-area">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left">Account Management</h4>
                    <ul className="breadcrumbs pull-left">
                      <li><a href="index.html">Home</a></li>
                      <li><span>Account Management</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 clearfix">
                  <div className="user-profile pull-right">
                  <img className="avatar user-thumb" src={require("../assets/images/author/avatar.png")} alt="avatar" />
                    <h4 className="user-name dropdown-toggle" data-toggle="dropdown">
                      <Link
                        to={{
                          pathname: "/account",
                          state: {}
                        }}>
                        Kumkum Rai
                        </Link>
                      <i className="fa fa-angle-down" />
                    </h4>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Message</a>
                      <a className="dropdown-item" href="#">Settings</a>
                      <a className="dropdown-item" href="#">Log Out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* page title area end */}
            <div className="main-content-inner">
              <div className="row">
                {/* Progress Table start */}
                <div className="col-12 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">List Of Project Purchase Registration</h4>
                      <div className="single-table">
                        <div className="table-responsive">
                          <table className="table table-hover progress-table text-center">
                            <thead className="text-uppercase">
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">project</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Number of people requesting to buy</th>
                                <th scope="col">Highest current price</th>
                                <th scope="col">Detail</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                              <td><
                                Link
                                to={{
                                  pathname: "/contractbidders",
                                  state: {}
                                }}> Dưa hấu Quảng Trị
                                </Link></td>
                                <td>09 / 07 / 2018</td>
                                <td>23<img src={require("../assets/images/icon/market-value/triangle-up.png")} alt="icon" /></td>
                                <td><span className="status-p bg-danger">5063$</span></td>
                                <td>
                                  <button type="button" className="btn btn-success btn-xs mb-3">View </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>09 / 07 / 2018</td>
                                <td>53<img src={require("../assets/images/icon/market-value/triangle-up.png")} alt="icon" /></td>
                                <td><span className="status-p bg-danger">5063$</span></td>
                                <td>
                                  <button type="button" className="btn btn-success btn-xs mb-3">View </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>09 / 07 / 2018</td>
                                <td>12<img src={require("../assets/images/icon/market-value/triangle-up.png")} alt="icon" /></td>
                                <td><span className="status-p bg-danger">5063$</span></td>
                                <td>
                                  <button type="button" className="btn btn-success btn-xs mb-3">View </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>09 / 07 / 2018</td>
                                <td>98<img src={require("../assets/images/icon/market-value/triangle-up.png")} alt="icon" /></td>
                                <td><span className="status-p bg-danger">5063$</span></td>
                                <td>
                                  <button type="button" className="btn btn-success btn-xs mb-3">View </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="pagination_area pull-right mt-5">
                            <ul>
                              <li><a href="#"><i className="fa fa-chevron-left" /></a></li>
                              <li><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#"><i className="fa fa-chevron-right" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Progress Table end */}
              </div>
            </div>
          </div>
          {/* main content area end */}
          {/* footer area start*/}
          <footer>
            <div className="footer-area">
              <p>© Copyright 2018. All right reserved. Template by <a href="https://colorlib.com/wp/">Colorlib</a>.</p>
            </div>
          </footer>
          {/* footer area end*/}

        {/* offset area start */}
        <div className="offset-area">
          <div className="offset-close"><i className="ti-close" /></div>
          <ul className="nav offset-menu-tab">
            <li><a className="active" data-toggle="tab" href="#activity">Activity</a></li>
            <li><a data-toggle="tab" href="#settings">Settings</a></li>
          </ul>
          <div className="offset-content tab-content">
            <div id="activity" className="tab-pane fade in show active">
              <div className="recent-activity">
                <div className="timeline-task">
                  <div className="icon bg1">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="tm-title">
                    <h4>Rashed sent you an email</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg2">
                    <i className="fa fa-check" />
                  </div>
                  <div className="tm-title">
                    <h4>Added</h4>
                    <span className="time"><i className="ti-time" />7 Minutes Ago</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg2">
                    <i className="fa fa-exclamation-triangle" />
                  </div>
                  <div className="tm-title">
                    <h4>You missed you Password!</h4>
                    <span className="time"><i className="ti-time" />09:20 Am</span>
                  </div>
                </div>
                <div className="timeline-task">
                  <div className="icon bg3">
                    <i className="fa fa-bomb" />
                  </div>
                  <div className="tm-title">
                    <h4>Member waiting for you Attention</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg3">
                    <i className="ti-signal" />
                  </div>
                  <div className="tm-title">
                    <h4>You Added Kaji Patha few minutes ago</h4>
                    <span className="time"><i className="ti-time" />01 minutes ago</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg1">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="tm-title">
                    <h4>Ratul Hamba sent you an email</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                  <p>Hello sir , where are you, i am egerly waiting for you.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg2">
                    <i className="fa fa-exclamation-triangle" />
                  </div>
                  <div className="tm-title">
                    <h4>Rashed sent you an email</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg2">
                    <i className="fa fa-exclamation-triangle" />
                  </div>
                  <div className="tm-title">
                    <h4>Rashed sent you an email</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                </div>
                <div className="timeline-task">
                  <div className="icon bg3">
                    <i className="fa fa-bomb" />
                  </div>
                  <div className="tm-title">
                    <h4>Rashed sent you an email</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                  </p>
                </div>
                <div className="timeline-task">
                  <div className="icon bg3">
                    <i className="ti-signal" />
                  </div>
                  <div className="tm-title">
                    <h4>Rashed sent you an email</h4>
                    <span className="time"><i className="ti-time" />09:35</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio itaque at.
                  </p>
                </div>
              </div>
            </div>
            <div id="settings" className="tab-pane fade">
              <div className="offset-settings">
                <h4>General Settings</h4>
                <div className="settings-list">
                  <div className="s-settings">
                    <div className="s-sw-title">
                      <h5>Notifications</h5>
                      <div className="s-swtich">
                        <input type="checkbox" id="switch1" />
                        <label htmlFor="switch1">Toggle</label>
                      </div>
                    </div>
                    <p>Keep it 'On' When you want to get all the notification.</p>
                  </div>
                  <div className="s-settings">
                    <div className="s-sw-title">
                      <h5>Show recent activity</h5>
                      <div className="s-swtich">
                        <input type="checkbox" id="switch2" />
                        <label htmlFor="switch2">Toggle</label>
                      </div>
                    </div>
                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                  </div>
                  <div className="s-settings">
                    <div className="s-sw-title">
                      <h5>Show your emails</h5>
                      <div className="s-swtich">
                        <input type="checkbox" id="switch3" />
                        <label htmlFor="switch3">Toggle</label>
                      </div>
                    </div>
                    <p>Show email so that easily find you.</p>
                  </div>
                  <div className="s-settings">
                    <div className="s-sw-title">
                      <h5>Show Task statistics</h5>
                      <div className="s-swtich">
                        <input type="checkbox" id="switch4" />
                        <label htmlFor="switch4">Toggle</label>
                      </div>
                    </div>
                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                  </div>
                  <div className="s-settings">
                    <div className="s-sw-title">
                      <h5>Notifications</h5>
                      <div className="s-swtich">
                        <input type="checkbox" id="switch5" />
                        <label htmlFor="switch5">Toggle</label>
                      </div>
                    </div>
                    <p>Use checkboxes when looking for yes or no answers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* offset area end */}
        {/* jquery latest version */}
        {/* bootstrap 4 js */}
        {/* others plugins */}
      </div>
    );
  }
}

export default withRouter(AccountPage);