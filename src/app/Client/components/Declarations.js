import React, { Component } from "react"
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY


class Declarations extends Component {
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
            "isindian": this.name,
            "ispoliticallynotexp": this.relationship,
            "indiantaxresident": this.address, 
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
                        <h3 className="col-12 pl-3">Declarations</h3>
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="firstname">By Selecting this option you declare that you are-</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <div className="icon-right">
                                <label htmlFor="firstname">Indian </label>
                                <i>
                                    <label className="optionBtn">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <div className="icon-right">
                                <label htmlFor="firstname" >Not Politically Exposed
                                </label>
                                <i>
                                    <label className="optionBtn">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <div className="icon-right">
                                <label htmlFor="firstname">Indian Tax Resident </label>
                                <i>
                                    <label className="optionBtn">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </i>
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
            </main >
        )
    }
}
export default Declarations