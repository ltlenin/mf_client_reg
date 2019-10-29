import React, { Component } from "react"
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class NomineeDetails extends Component {
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
            "uccode": this.state.uccode,
            "name": this.name,
            "relationship": this.relationship,
            "address": this.address,
            "city": this.city,
            "state": this.state,
            "country": this.country,
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
                        <h3 className="col-12 pl-3">Nominee Info</h3>
                        <div className="col-md-6 col-sm-12">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">Zip</label>
                                <div className="icon-right">
                                    <input type="text" className="form-control"
                                        id="dateOfBirth" placeholder="Enter Your Date Of Birth" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">City</label>
                                <div className="icon-right">
                                    <input type="text" className="form-control"
                                        id="dateOfBirth" placeholder="Enter Your City" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
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
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="country">State</label>
                                <div className="icon-right">
                                    <select id="country" className="form-control icon-right">
                                        {this.props.data.countries.map((name, key) => <option value={name.code} >{name.name}</option>)}
                                    </select>
                                    <i className="dropdownIcon"></i>
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
export default NomineeDetails