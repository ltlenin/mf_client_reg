import React, { Component } from "react"

require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class PanComponent extends Component {
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
        let personalDetails = {
            "arncode": '1248',
            "subarncode": '',
            "uccode": this.state.pan,
            "createdby": "Lenin",
            "modifiedby": "LT"
        }
        import("../../central/crud.js").then(crud => {
            console.log(crud.post(_API_KEY + '/MasterList/', personalDetails));
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
                        <h3 className="col-12 pl-3">PAN Details</h3>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="pan">PAN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pan"
                                    placeholder="Enter Your PAN"
                                    maxLength="10"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pr-4 pb-3 text-right">
                        <button
                            type="reset"
                            className="btn btn-primary ml-3"
                            onClick={this.props.onNextClick}>Continue</button>
                    </div>
                </div>
            </main>)
    }
}
export default PanComponent