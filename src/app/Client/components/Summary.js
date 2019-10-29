import React, { Component } from "react"
import PerfectScrollbar from 'react-perfect-scrollbar'
//import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../skelton/css/perfect-scrollbar.css'
class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var divStyle = {
            display: this.props.display,
        }

        return (
            <PerfectScrollbar style={divStyle}>

                <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <h3 class="col-12 pl-3">Personal Information</h3>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="investorcode">PAN</label>
                            <input
                                type="text"
                                id="txtInvestorCode"
                                name="investorcode"
                                placeholder="Enter Investor Code"

                                class="form-control"
                                maxLength="20"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="branch">First Name</label>
                            <input
                                type="text"
                                id="txtBranch"
                                name="branch"
                                placeholder="Enter Branch"

                                class="form-control"
                                maxLength="5"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="dealer">Last Name</label>
                            <input
                                type="text"
                                id="txtDealer"
                                name="dealer"
                                placeholder="Enter Dealer"

                                class="form-control"
                                maxLength="5"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="dealer">Date of Birth</label>
                            <input
                                type="text"
                                id="txtDealer"
                                name="dealer"
                                placeholder="Enter Dealer"

                                class="form-control"
                                maxLength="5"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="tax">Gender</label>
                            <div class="icon-right">
                                <select
                                    id="ddlTax"
                                    name="tax"
                                    class="form-control icon-right">
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="holdingnature">Occupation</label>
                            <div class="icon-right">
                                <select
                                    id="ddlHoldingNature"
                                    name="holdingnature"

                                    class="form-control icon-right">

                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="holdingnature">Marital Status</label>
                            <div class="icon-right">
                                <select
                                    id="ddlHoldingNature"
                                    name="holdingnature"
                                    class="form-control icon-right">
                                </select>
                                <i class="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <h3 class="col-12 pl-3">Contact Information</h3>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">Address Line 1</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">Address Line 2</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">City</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">State</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">Country</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">Pincode</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">Phone</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">FAX</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <label htmlFor="firstapplicantfirstname">Email</label>
                            <input
                                type="text"
                                id="txtFirstApplicantFirstName"
                                name="firstapplicantfirstname"
                                placeholder="Enter 1st Applicant First Name"
                                class="form-control"
                                maxLength="35"
                            />
                        </div>
                    </div>
                </div>
                <div className="row pt-3 pb-3 pl-3 pr-3 bottomSeparator">
                    <h3 className="col-12 pl-3">Nominee Info</h3>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="firstName"> Name</label>
                            <input type="text" className="form-control" id="firstName"
                                placeholder="Enter Your First Name" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="lastName">Relatioship</label>
                            <input type="text" className="form-control"
                                id="lastName" placeholder="Enter Your Last Name" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="dateOfBirth">Address</label>
                            <div className="icon-right">
                                <input type="text" className="form-control"
                                    id="dateOfBirth" placeholder="Enter Your Date Of Birth" />
                                <i className="calenderIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="gender">City</label>
                            <div className="icon-right">
                                <select id="gender" className="form-control icon-right">
                                    <option value="Select" defaultValue disabled>Select your Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <i className="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="occupation">State</label>
                            <input type="text" className="form-control"
                                id="occupation" placeholder="Enter Your Occupation" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="gender">Country</label>
                            <div className="icon-right">
                                <select id="gender" className="form-control icon-right">
                                    <option value="Select" defaultValue disabled>Select your Gender</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                                <i className="dropdownIcon"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pr-4 pb-3 text-right bottomSeparator">
                    <button
                        type="reset"
                        className="btn btn-secondary"
                        onClick={this.props.onPrevClick}>Back</button>

                    <button
                        type="reset"
                        className="btn btn-primary ml-3"
                        onClick={this.props.onNextClick}>Continue</button>
                </div>

            </PerfectScrollbar>
        )

    }
}
export default Summary