import React from 'react';

import PanComponent from '../components/PanComponent'
import PersonalComponent from '../components/PersonalComponent'
import ContactInfoComponent from '../components/ContactInfoComponent'
import PanCardUpload from '../components/PanCardUpload'
import NomineeDetails from '../components/NomineeDetails'
import BankDetails from '../components/BankDetails'
import Declarations from '../components/Declarations'
import Summary from '../components/Summary'
import PerfectScrollbar from 'react-perfect-scrollbar'
//import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../skelton/css/perfect-scrollbar.css'
require('dotenv').config()
const _API_KEY = process.env.REACT_APP_API_KEY
class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            states: [],
            countries: [],
        }
    }

    componentDidMount() {

        fetch(_API_KEY + '/InverstorStateList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ states: data });
            })
        fetch(_API_KEY + '/CountryList/')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ countries: data });
            })

    }

    render() {
        return (
            <PerfectScrollbar>
                <div>
                    <PanComponent
                        display={this.props.PanComponentDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />
                    <PersonalComponent
                        display={this.props.PersonalComponentDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />
                    <ContactInfoComponent
                        data={this.state}
                        display={this.props.ContactInfoComponentDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />

                    <PanCardUpload
                        display={this.props.PanCardUploadDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext} />

                    <NomineeDetails
                        data={this.state}
                        display={this.props.NomineeDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />
                    <BankDetails
                        display={this.props.BankDetailsDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />
                    <Declarations
                        display={this.props.DeclarationsDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />
                    <Summary
                        display={this.props.SummaryDisplay}
                        onPrevClick={this.props.onPrev}
                        onNextClick={this.props.onNext}
                    />

                </div>
            </PerfectScrollbar >
        );
    }
}
export default Modal