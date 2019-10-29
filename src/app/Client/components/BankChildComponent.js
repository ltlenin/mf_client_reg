import React from "react"

function BankChildComponent(props) {
    return (
        <div>
            {
                Object.keys(props.banks).map(function (key) {
                    let count = parseInt(key, 10) + 1
                    return <div>
                        <div className="row pt-3 pb-3 pl-3 pr-3">
                            <h3 className="col-12 pl-3">Bank Details</h3>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="ifsccode">IFSC Code {count}</label>
                                    <input type="text"
                                        id="txtIFSCCode"
                                        key={"ifsc" + count}
                                        placeholder={"Enter IFSC Code " + count}
                                        name={"ifsccode" + count}
                                        onChange={props.handleChange}
                                        className="form-control"
                                        defaultValue={props.defaultvalue}
                                        maxLength="11"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountno">Account Number {count}</label>
                                    <input
                                        type="text"
                                        id="txtAccountNo"
                                        key={"accno" + count}
                                        placeholder={"Enter Account No " + count}
                                        name={"accountno" + count}
                                        onChange={props.handleChange}
                                        className="form-control"
                                        maxLength="16"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountype">Account Type {count}</label>
                                    <div className="icon-right">
                                        <select
                                            id="ddlAccountType"
                                            key={"type" + count}
                                            name={"accountype" + count}
                                            onChange={props.handleChange}
                                            className="form-control icon-right"
                                        >
                                            {props.data.accounttypes.map((name, key) => <option value={name.code} >{name.name}</option>)}
                                        </select>
                                        <i className="dropdownIcon"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="isdefault">Is Default {count}</label>
                                    <input type="text"
                                        id="txtIsDefault"
                                        key={"def" + count}
                                        placeholder={"Is Default " + count}
                                        name={"isdefault" + count}
                                        onChange={props.handleChange}
                                        className="form-control"
                                        maxLength="1"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                }.bind(this))
            }
        </div>
    );
}
export default BankChildComponent