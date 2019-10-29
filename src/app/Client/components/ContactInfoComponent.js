import React, { Component } from "react"
import Upload from '../../../_upload/upload/Upload'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class ContactInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveClick = this.saveClick.bind(this);
    }
    handleChange(event) {

        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    saveClick(event) {
        event.preventDefault()
        let addressDetails = {
            "arncode": '1248',
            "subarncode": '',
            "uccode": this.state.pan,
            "addressline1": this.addressline1,
            "addressline2": this.addressline2,
            "city": this.city,
            "state": this.state,
            "country": this.country,
            "pincode": this.pincode,
            "phoneno": this.phoneno,
            "fax": this.fax,
            "email": this.email,
            "createdby": "Lenin",
            "modifiedby": "LT"
        }
        import("../../central/crud.js").then(crud => {
            console.log(crud.post(_API_KEY + '/MasterList/', addressDetails));
        });
    }

    render() {
        var divStyle = {
            display: this.props.display,
        }
        return (
            <main style={divStyle}>
                <div className="contentScroll container"> 
                    <div className="row pt-3 pb-3 pl-3 pr-3">
                        <h3 className="col-12 pl-3">Contact Info</h3>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="address1">Address 1</label>
                                <div className="icon-right">
                                    <input type="text" className="form-control"
                                        id="address1" placeholder="Enter your Address 1" />
                                    <i className="mapIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="address2">Address 2</label>
                                <div className="icon-right">
                                    <input type="text" className="form-control" id="address2"
                                        placeholder="Enter your Address 2" />
                                    <i className="mapIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control"
                                    id="city" placeholder="Enter your City" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="country">State</label>
                                <div className="icon-right">
                                    <select id="country" className="form-control icon-right">
                                        {this.props.data.states.map((name, key) => <option value={name.code} >{name.name}</option>)}
                                    </select>
                                    <i className="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="icon-right">
                                    <select id="country" className="form-control icon-right">
                                        {this.props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                                    </select>
                                    <i className="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="pincode">Pincode</label>
                                <input type="text" className="form-control" id="pincode" placeholder="Enter Pincode" />
                            </div>
                        </div>


                        <div className="col-md-4 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="mobileNumber1">Phone Number</label>
                                <div className="icon-right">
                                    <input type="text" className="form-control" id="mobileNumber1"
                                        placeholder="Enter your Mobile Number 1" />
                                    <i className="mobileIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="mobileNumber2">FAX</label>
                                <div className="icon-right">
                                    <input type="text" className="form-control" id="mobileNumber2"
                                        placeholder="Enter your Mobile Number 2" />
                                    <i className="mobileIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="emailId">Email ID</label>
                                <div className="icon-right">
                                    <input type="email" className="form-control" id="emailId" placeholder="Enter your Email" />
                                    <div className="invalid-feedback">Shucks, check the formatting of that and try again.</div>
                                    <div className="valid-feedback">Success! You've done it.</div>
                                    <i className="emailIcon"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pr-4 pb-3 text-right">
                        <button
                            type="reset"
                            className="btn btn-secondary"
                            onClick={this.props.onPrevClick}>Back</button>

                        <button
                            type="reset"
                            className="btn btn-primary ml-3"
                            onClick={this.props.onNextClick}>Continue</button>
                    </div>
                </div>
            </main>)
    }
}
export default ContactInfoComponent