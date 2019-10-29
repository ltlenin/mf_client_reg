import React, { Component } from "react"
import Upload from '../../../_selfi/upload/Upload'
import PhotoCapture from '../../../_selfi/capture/demo/PhotoCapture'

class  SelfiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        }
    }
    render() {
        var divStyle = {
            display: this.props.display,
        }
        return (
            <main style={divStyle}> 
                <div className="justify-content-center">
                    <div className="row pt-3 pb-3 pl-4 pr-4 justify-content-center">
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="inverstorCode">Selfi</label>
                                <PhotoCapture />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 pb-3 pl-4 pr-4 justify-content-center">
                        <div className="col-md-3 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="inverstorCode">Upload Photo</label>
                                <Upload />
                            </div>
                        </div>
                    </div>
                </div> 
            </main>
        )
    }
}
export default SelfiComponent