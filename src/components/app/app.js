import React, { Component } from "react";
import Stepper from "../stepper/stepper";
import Form from "../form/form";

import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';

import './app.css';

export default class App extends Component {
    state = {
        currentStep: 1,
        billingType: 'monthly',
        plan: 0
    };

    data = {
        stepsInfo: [
            {
                number: 1,
                title: 'YOUR INFO',
                header: 'Personal info',
                description: 'Please provide your name, email address, and phone number.'
            },
            {
                number: 2,
                title: 'SELECT PLAN',
                header: 'Select your plan',
                description: 'You have the option of monthly or yearly billing.'
            },
            {
                number: 3,
                title: 'ADD-ONS',
                header: 'Pick add-ons',
                description: 'Add-ons help enhance your gaming experience.'
            },
            {
                number: 4,
                title: 'SUMMARY',
                header: 'Finishing up',
                description: 'Double-check everything looks OK before confirming.'
            },
        ],
        planInfo: [
            {
                name: 'Arcade',
                image: arcade,
                monthly: '$9/mo',
                yearly: '$90/yr'
            },
            {
                name: 'Advanced',
                image: advanced,
                monthly: '$12/mo',
                yearly: '$120/yr'
            },
            {
                name: 'Pro',
                image: pro,
                monthly: '$15/mo',
                yearly: '$150/yr'
            }
        ]
    };

    onNextClick = () => {
        this.setState(({currentStep}) => {
            return {
                currentStep: currentStep+1 > 4 ? currentStep : currentStep+1
            };
        });
    }

    onBackClick = () => {
        this.setState(({currentStep}) => {
            return {
                currentStep: currentStep-1 < 1 ? currentStep : currentStep-1
            };
        });
    }

    onBillingTypeChange = () => {
        this.setState(({billingType}) => {
            return {
                billingType: billingType === 'monthly' ? 'yearly' : 'monthly'
            };
        });
    }

    onPlanChange = (id) => {
        this.setState({
            plan: id
        });
    }

    render() {
        const {currentStep, billingType, plan} = this.state;
        const { stepsInfo, planInfo } = this.data;

        const stepperData = stepsInfo.map(({number, title}) => {
            return {
                number, title
            }
        });

        const currentStepInfo = {
            header: stepsInfo[currentStep-1].header,
            description: stepsInfo[currentStep-1].description
        }

        return(
            <div className='app'>
                <Stepper
                    stepperData={stepperData}
                    currentStep = {currentStep}
                />
                <Form
                    currentStep = {currentStep}
                    currentStepInfo = {currentStepInfo}
                    onNextClick = {this.onNextClick}
                    onBackClick={this.onBackClick}
                    billingType={billingType}
                    onBillingTypeChange = {this.onBillingTypeChange}
                    planInfo={planInfo}
                    currentPlan = {plan}
                    onPlanChange = {this.onPlanChange}
                />
            </div>
        );
    }
}