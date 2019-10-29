import React, { Component } from "react"

import BankChildComponent from './BankChildComponent'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY

class BankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounttypes:[], 
            banks: [{}],
            counter: 1,
            data: [],
            defaultvalue: '',
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
            "ifsc": this.name,
            "accountno": this.relationship,
            "accounttype": this.address,
            "isdefault": this.city,
            "createdby": "Lenin",
            "modifiedby": "LT"
        }
        import("../../central/crud.js").then(crud => {
            console.log(crud.post(_API_KEY + '/MasterList/', addressDetails));
        });
    }

    IncrementItem = () => {
        this.setState({ counter: this.state.counter + 1 });
        let count = this.state.counter
        console.log("Count is : ", count)

        if (count < 0) {
            this.setState({ counter: 0 });
        }
        if (count < 3 && count > 0) {
            this.setState((state, props) => ({
                banks: [...this.state.banks, "Bank-" + (count + 1) + " Details"]
            }));
            console.log(this.state.banks)
        }
    }
    DecreaseItem = () => {
        this.setState({ counter: this.state.counter - 1 });
        let count = this.state.counter
        console.log(count)
        if (count >= 1 || count <= 0) {
            this.setState({
                banks: this.state.banks.filter((_, i) => i !== this.state.banks.indexOf("Bank-" + this.state.counter + " Details"))
            },
                () => {
                    console.log('banks', this.state.banks);
                }
            );
        }
    }

    TestClick = (e) => {
        console.clear()
        this.props.TestClick(e)
    }

    handleChange = (e) => {
        console.clear()
        this.props.handleChange(e)
    }

    componentDidMount() { 
        fetch(_API_KEY + '/AccountTypeList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ accounttypes: data });
            })
    }

    render() {
        var divStyle = {
            display: this.props.display,
        }
        return (
            <main style={divStyle}>
                <div className="contentScroll container">
                    <BankChildComponent
                        banks={this.state.banks}
                        data={this.state}
                        handleChange={this.handleChange}
                        defaultvalue={this.defaultvalue}
                    />
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.IncrementItem}>
                                <strong> + </strong>
                            </button>
                            <strong> &nbsp; </strong>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.DecreaseItem}>
                                <strong> - </strong>
                            </button>
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
export default BankComponent