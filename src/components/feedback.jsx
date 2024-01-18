import { Component } from "react";
import { countTotalFeedback } from "./function/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "./function/countPositiveFeedbackPercentage";
import { Statistics } from "./statistics/statistics";
import { FeedbackOptions } from "./feedbackOptions/feedbackOptions";
import { Section } from "./sections/sections";
import { Notification } from "./notification/notification";
import css from "./feedback.module.css"

export class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addFeedback = (e) => {
        const {name} = e.currentTarget
    
        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    
    }


    render() { 
        const total = countTotalFeedback(this.state);
        const positivePercentage = countPositiveFeedbackPercentage(total, this.state);
        return(
            <div className={css.container}>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback} />
                </Section>
                
                <Section title={"Statistics"}>
                    {total>0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage} /> : <Notification message={"There is no feedback"}/>}
                   
                </Section>

            </div>
        )
    }

}