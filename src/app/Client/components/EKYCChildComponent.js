import React from "react"
import Upload from '../../../_upload/upload/Upload'
import PhotoCapture from '../../../_upload/capture/demo/PhotoCapture'
function EKYCChildComponent(props) {
    return (
        <div> 
            {
                Object.keys(props.banks).map(function (key) {
                    let count = parseInt(key, 10) + 1
                    return <div>
                        <div className="row pt-3 pb-3 pl-4 pr-4 justify-content-center">
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="idtype">Identity Proof Type</label>
                                    <div className="icon-right">
                                        <select
                                            id="ddlIdType"
                                            name="idtype"
                                            className="form-control icon-right">
                                        </select>
                                        <i className="dropdownIcon"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="identificationno">Identitification Number</label>
                                    <input
                                        type="text"
                                        id="txtIdentificationNo"
                                        placeholder="Enter Identitification Number" 
                                        name="identificationno" 
                                        className="form-control"
                                        maxLength="16"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="expirydate">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="txtExpiryDate"
                                        placeholder= "Expiry Date " 
                                        name= "expirydate"  
                                        className="form-control"
                                        maxLength="16"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row pt-3 pb-3 pl-4 pr-4 justify-content-center">
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inverstorCode">Front Page</label>
                                    <Upload />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inverstorCode">Back Page</label>
                                    <div className="Card">
                                        <Upload />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inverstorCode">Signature Page</label>
                                    <Upload />
                                </div>
                            </div> 
                        </div>

                        <div className="row pt-3 pb-3 pl-4 pr-4 justify-content-center">
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inverstorCode">Front Page</label>
                                    <PhotoCapture />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inverstorCode">Back Page</label>
                                    <div className="Card">
                                        <PhotoCapture />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inverstorCode">Signature Page</label>
                                    <PhotoCapture />
                                </div>
                            </div> 
                        </div>

                    </div>
                }.bind(this))
            }
        </div>
    );
}
export default EKYCChildComponent