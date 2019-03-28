import React, { Component } from 'react';

import './StudentDashboard.css';

import RightNavigateBar from '../group/RightNavigateBar';
import Board from '../board/Board';

class StudentDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            student: {},
            examList: [
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                teacher: "Master Node"},
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                teacher: "Master Node"},
                {name: "Sketch Prototyping",
                subject: "UI UX",
                duedate: "Mar 12, 2018",
                duration: "12 mins",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                participants: "23",
                teacher: "Master Node"}
            ]
        };
    }

    render() {
        return (
            <div className="StudentDashboard">
                <RightNavigateBar></RightNavigateBar>
                <Board examList={this.state.examList}></Board>
            </div>
        );
    }
}

export default StudentDashboard;