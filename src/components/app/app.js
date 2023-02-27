import React, {Component, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";

import Stepper from "../stepper/stepper";
import FirstStep from "../first-step/first-step";
import SecondStep from "../second-step/second-step";
import ThirdStep from "../third-step/third-step";
import FinalStep from "../final-step/final-step";

import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';

import './app.css';


export default class App extends Component {
    state = {
        isMonthly: true,
        plan: 0,
        addOns: []
    };

    data = {
        stepsInfo: [
            {
                number: '1',
                title: 'YOUR INFO',
                header: 'Personal info',
                description: 'Please provide your name, email address, and phone number.'
            },
            {
                number: '2',
                title: 'SELECT PLAN',
                header: 'Select your plan',
                description: 'You have the option of monthly or yearly billing.'
            },
            {
                number: '3',
                title: 'ADD-ONS',
                header: 'Pick add-ons',
                description: 'Add-ons help enhance your gaming experience.'
            },
            {
                number: '4',
                title: 'SUMMARY',
                header: 'Finishing up',
                description: 'Double-check everything looks OK before confirming.'
            },
        ],
        planInfo: [
            {
                name: 'Arcade',
                image: arcade,
                monthly: 9,
                yearly: 90
            },
            {
                name: 'Advanced',
                image: advanced,
                monthly: 12,
                yearly: 120
            },
            {
                name: 'Pro',
                image: pro,
                monthly: 15,
                yearly: 150
            }
        ],
        addOnsInfo: [
            {
                header: 'Online service',
                description: 'Access to multiplayer games',
                yPrice: 10,
                mPrice: 1,
                checked: false
            },
            {
                header: 'Larger storage',
                description: 'Extra 1TB of cloud save',
                yPrice: 20,
                mPrice: 2,
                checked: false
            },
            {
                header: 'Customizable profile',
                description: 'Custom theme on your profile',
                yPrice: 20,
                mPrice: 2,
                checked: false
            }
        ]
    };

    onBillingTypeChange = () => {
        this.setState(({isMonthly}) => {
            return {
                isMonthly: !isMonthly
            };
        });
    }

    onPlanChange = (id) => {
        this.setState({
            plan: id
        });
    }

    pickAddon = (id) => {
        const {addOnsInfo} = this.data;

        if (addOnsInfo[id].checked === false) {
            addOnsInfo[id].checked = true;
            this.setState(({addOns}) => {
                return {
                    addOns: [...addOns, addOnsInfo[id]]
                }
            })
        }
        else {
            addOnsInfo[id].checked = false;
            this.setState(({addOns}) => {
                const ind = addOns.indexOf(addOnsInfo[id]);
                return {
                    addOns: [...addOns.slice(0, ind), ...addOns.slice(ind+1)]
                }
            })
        }
    }

    render() {
        const { isMonthly, plan, addOns} = this.state;
        const { stepsInfo, planInfo, addOnsInfo } = this.data;

        const stepperData = stepsInfo.map(({number, title}) => {
            return {
                number, title
            }
        });

        return(
            <div className='app'>
                <Router>
                    <Stepper
                        stepperData={stepperData}
                    />

                    <Routes>
                        <Route path='/step1' element={<FirstStep/>}/>
                        <Route path='/step2' element={ <SecondStep
                            planInfo = {planInfo}
                            isMonthly = {isMonthly}
                            onPlanChange = {this.onPlanChange}
                            currentPlan = {plan}
                            onBillingTypeChange = {this.onBillingTypeChange}/>}
                        />
                        <Route path='/step3' element={<ThirdStep
                            addOnsInfo = {addOnsInfo}
                            isMonthly = { isMonthly }
                            pickAddon={this.pickAddon}/>}
                        />
                        <Route path='/step4' element={<FinalStep
                            addOns = {addOns}
                            isMonthly = {isMonthly}
                            plan = {planInfo[plan]}
                        />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}