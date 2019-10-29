import React, { Component } from "react"
class  KYCVerification extends Component {
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
            <main style={divStyle}>
                <div className="row pt-3 pb-3 pl-4 pr-4 bottomSeparator">
                    <div className="col-md-3 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="investorcode">Selfi</label>
                            <input
                                type="text"
                                id="txtInvestorCode"
                                name="investorcode"
                                placeholder="Enter Investor Code"

                                className="form-control"
                                maxLength="20"
                            />
                        </div>
                    </div>
                </div></main>)
    
}
}
export default KYCVerification