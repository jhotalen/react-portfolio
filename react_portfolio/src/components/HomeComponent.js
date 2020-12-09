import React from "react";
import logo from "../assets/logo.jpg";
/*import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';*/
/*import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";*/

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <body id="indexBody">
          <header class="jumbotron jumbotron-fluid">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-4 col-md-3 col-lg-2 align-self-center">
                  <img src={logo} height="100px" />
                </div>
                <div class="col-sm-4 ">
                  <h1>
                    <strong>Cool Beans</strong>
                  </h1>
                  <h2>World's Finest Coffee</h2>
                </div>
                <div class="col-4 d-none d-md-block text-right">
                  <h5>Social</h5>
                  <a
                    class="btn btn-social-icon btn-instagram"
                    href="http://instagram.com/"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    class="btn btn-social-icon btn-facebook"
                    href="http://facebook.com/"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    class="btn btn-social-icon btn-twitter"
                    href="http://twitter.com/"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    class="btn btn-social=icon btn-google"
                    href="http://youtube.com/"
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#coolBeansNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="coolBeansNavbar">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <i class="fa fa-home fa-lg"></i>Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">
                      <i class="fa fa-info fa-lg"></i>About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="menu.html">
                      <i class="fa fa-list fa-lg"></i>Menu
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="store.html">
                      <i class="fa fa-shopping-cart fa-lg"></i>Store
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div id="dealModal" class="modal fade" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Act now!</h3>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <form>
                      <p>
                        Enter your information now for a{" "}
                        <span id="discount">
                          <strong>15% discount</strong>
                        </span>
                      </p>
                      <br></br>
                      <p>on your first order with us!</p>
                      <div class="form-row">
                        <div class="form-group col-12">
                          <label class="sr-only" for="loginEmail">
                            Email address
                          </label>
                          <input
                            type="email"
                            class="form-control form-control-sm"
                            id="loginEmail"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <button
                          type="button"
                          class="btn btn-secondary btn-sm ml-auto"
                          data-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary btn-sm ml-1"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="site-footer fixed-bottom">
            <div class="table">
              <ul id="list2">
                <li>
                  <a role="button" class="btn btn-link" href="tel:+15186941981">
                    <i class="fa fa-phone"></i>
                    1-518-694-1981
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    class="btn btn-link"
                    href="mailto:coolbns@nucamp.co"
                  >
                    <i class="fa fa-envelope-o"></i> coolbns@nucamp.co
                  </a>
                </li>
              </ul>
            </div>
          </footer>

          {/*<!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->*/}
          {<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>}
          {
            <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
          }
          {/*<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>*/}

          {/*<script>
           {$(document).ready(function(){$("#dealModal").modal("show")})}
          </script>*/}
        </body>
      </React.Fragment>
    );
  }
}

export default Home;
