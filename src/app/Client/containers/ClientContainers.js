import React from 'react';
import Modal from '../containers/ModalContainer'
import $ from 'jquery';
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY
const data = [
  'PanComponent',
  'PersonalComponent',
  'ContactInfoComponent',
  'PanCardUpload',
  'NomineeDetails',
  'BankDetails',
  'Declarations',
  'Summary'
];

class ClientContainers extends React.Component {

  state = {
    projects: data,
    activeProject: '0',

    PanComponentDisplay: 'block',
    PersonalComponentDisplay: 'none',
    ContactInfoComponentDisplay: 'none',
    PanCardUploadDisplay: 'none',
    NomineeDisplay: 'none',
    BankDetailsDisplay: 'none',
    DeclarationsDisplay: 'none',
    SummaryDisplay: 'none',

    nextButton: 'block',
    prevButton: 'none',

    states: [],
    countries: [],
  }

  componentDidMount() {
    if ($(".progressBarWrap").length) {

      var listWidth = $(".progressBarWrap").outerWidth();
      var listItemLen = $(".progressBarWrap li").length;
      console.log($(".progressBarWrap li"))
      var listSpacer = (listWidth - (listItemLen * 36)) / (listItemLen * 2);

      $(".progressBarWrap li").css({ "margin": "0 " + listSpacer + "px" });
      $(".leftspaceRemover, .rightSpaceRemover").css({ "width": listSpacer + "px" });
      $(".stageSpacer").css({ "width": ((listSpacer * 2) + 3) + "px" });
    }

    $("#emailId").on("blur", function () {
      var email = $("#emailId").val();
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(email)) {
        $("#emailId").addClass('is-invalid');
        $("#emailId").removeClass('is-valid');
        //email.focus;
      } else {
        $("#emailId").removeClass('is-invalid');
        $("#emailId").addClass('is-valid');
      }
    });

    fetch(_API_KEY + '/InverstorStateList/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ states: data });
      })
    fetch(_API_KEY + '/CountryList/')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ countries: data });
      })

  }

  hideAndShwoComponents(idx) {
    this.setState({
      activeProject: idx,

      PanComponentDisplay: idx === 0 ? 'block' : 'none',
      PersonalComponentDisplay: idx === 1 ? 'block' : 'none',
      ContactInfoComponentDisplay: idx === 2 ? 'block' : 'none',
      PanCardUploadDisplay: idx === 3 ? 'block' : 'none',
      NomineeDisplay: idx === 4 ? 'block' : 'none',
      BankDetailsDisplay: idx === 5 ? 'block' : 'none',
      DeclarationsDisplay: idx === 6 ? 'block' : 'none',
      SummaryDisplay: idx === 7 ? 'block' : 'none',
    });
  }

  handleNextProject = () => {
    var arr = this.state.projects.length;
    var idx = this.state.activeProject + 1;
    idx = idx % arr;
    if (arr === this.state.activeProject + 1) {
      idx = arr - 1
      this.addProgressStatus(idx)
    }
    else {
      this.addProgressStatus(idx - 1)
    }
    this.hideAndShwoComponents(idx)
    this.setState({
      prevButton: 'block'
    });


  }

  handlePrevProject = () => {
    var arr = this.state.projects.length;
    var idx = this.state.activeProject;

    if (arr === idx + 1) {
      this.removeProgressStatus(idx)
      idx = idx - 1;
    }
    else {
      if (idx === 1) {
        this.removeProgressStatus(1)
        this.removeProgressStatus(0)
        idx = idx - 1;
      }
      else {
        this.removeProgressStatus(idx)
        idx = idx - 1;
      }
    }
    this.hideAndShwoComponents(idx)

  }

  addProgressStatus = (idx) => {
    var listItems = $(".progressBarWrap li");
    listItems[idx].className = "actStage"
  }
  removeProgressStatus = (idx) => {
    var listItems = $(".progressBarWrap li");
    listItems[idx].className = ""
  }


  render() {
    return (
      <main>
        <div className="tab-content">
          <div class="contentScroll container">
            <div className="row p10">
              <div className="col-12 p-0">
                <div className="progressBarWrap" ref="progressBarWrap">
                  <div className="leftspaceRemover"></div>
                  <div className="rightSpaceRemover"></div>
                  <ul className="clearfix">
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 1</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 2</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 3</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 4</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 5</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 6</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 7</span>
                      <span className="stageSpacer"></span>
                    </li>
                    <li>
                      <span className="stageCircle">&#10004;</span>
                      <span className="stageName">Step 8</span>
                      <span className="stageSpacer"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <Modal
              onNext={this.handleNextProject}
              onPrev={this.handlePrevProject}
              data={this.state}
              PanComponentDisplay={this.state.PanComponentDisplay}
              PersonalComponentDisplay={this.state.PersonalComponentDisplay}
              ContactInfoComponentDisplay={this.state.ContactInfoComponentDisplay}
              PanCardUploadDisplay={this.state.PanCardUploadDisplay}
              NomineeDisplay={this.state.NomineeDisplay}
              BankDetailsDisplay={this.state.BankDetailsDisplay}
              DeclarationsDisplay={this.state.DeclarationsDisplay}
              SummaryDisplay={this.state.SummaryDisplay}
              nextButton={this.state.nextButton}
              prevButton={this.state.prevButton}
            />
          </div>
        </div>
      </main>
    );
  }
}
export default ClientContainers
