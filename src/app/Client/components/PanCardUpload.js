import React, { Component } from "react"
import Upload from '../../../_upload/upload/Upload'
class PanCardUpload extends Component {
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
                <div className="contentScroll container">
                    <div className="row pt-3 pb-3 pl-3 pr-3">
                        <h3 className="col-12 pl-3">Upload your PAN</h3>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="inverstorCode">Back Page</label>
                                <Upload />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="inverstorCode">Back Page</label>
                                <Upload />
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
export default PanCardUpload