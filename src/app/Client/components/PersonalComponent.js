import React, { Component } from "react"
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class PersonalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holdingnatures:[],
            occupations:[],
            taxstatus:[],  
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
        let personalDetails = {
            "arncode": '1248',
            "subarncode": '',
            "uccode": this.state.pan,
            "firstname": this.firstname,
            "lastname": this.lastname,
            "dateofbirth": this.dob,
            "gender": this.gender,
            "occupation": this.occupation,
            "maritalstatus": this.maritalstatus,
            "createdby": "Lenin",
            "modifiedby": "LT"
        }
        import("../../central/crud.js").then(crud => {
            console.log(crud.post(_API_KEY + '/MasterList/', personalDetails));
        });
    }

    componentDidMount() {
        this.setState({ message: null });


        fetch(_API_KEY + '/HoldingNatureList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ holdingnatures: data });
            })

        fetch(_API_KEY + '/TaxStatusList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ taxstatus: data, taxcode: data.taxcode });
            })

        fetch(_API_KEY + '/OccupationList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ occupations: data });
            }) 

    }

    render() {
        var divStyle = {
            display: this.props.display,
        }
        return (
            <main style={divStyle}>
                <div className="contentScroll container">
                    <div className="row pt-3 pb-3 pl-3 pr-3">
                        <h3 className="col-12 pl-3">Personal Details</h3>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter Your First Name"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter Your Last Name"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="dateOfBirth">Date Of Birth</label>
                                <div className="icon-right">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="dateOfBirth"
                                        placeholder="Enter Your Date Of Birth"
                                        onChange={this.handleChange}
                                    />
                                    <i className="calenderIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <div className="icon-right">
                                    <select id="gender"
                                        className="form-control icon-right"
                                        onChange={this.handleChange}
                                    >
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
                                <label htmlFor="maritalstatus">Occupation</label>
                                <div className="icon-right">
                                    <select id="maritalstatus"
                                        className="form-control icon-right"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.occupations.map((name, key) => <option value={name.code} >{name.occupation}</option>)}
                                    </select>
                                    <i className="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="maritalstatus">Marital Status</label>
                                <div className="icon-right">
                                    <select id="maritalstatus"
                                        className="form-control icon-right"
                                        onChange={this.handleChange}
                                    >
                                        <option value="Select" defaultValue disabled>Select your Gender</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </select>
                                    <i className="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row pt-3 pb-3 pl-3 pr-3 bottomSeparator">
                        <h3 className="col-12 pl-3">Other Details</h3>
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="maritalstatus">Tax Status</label>
                                <div className="icon-right">
                                    <select id="maritalstatus"
                                        className="form-control icon-right"
                                        onChange={this.handleChange}
                                    >
                                         {this.state.taxstatus.map((name, key) => <option value={name.taxcode} >{name.taxstatus}</option>)}
                                    </select>
                                    <i className="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="gender">Type</label>
                                <div className="icon-right">
                                    <select id="gender"
                                        className="form-control icon-right"
                                        onChange={this.handleChange}
                                    >
                                        <option value="Select" defaultValue disabled></option>
                                        <option>Physical</option>
                                        <option>Demat</option>
                                    </select>
                                    <i className="dropdownIcon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="maritalstatus">Holding Nature</label>
                                <div className="icon-right">
                                    <select id="maritalstatus"
                                        className="form-control icon-right"
                                        onChange={this.handleChange}
                                    >
                                         {this.state.holdingnatures.map((name, key) => <option value={name.code} >{name.name}</option>)}
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
export default PersonalComponent