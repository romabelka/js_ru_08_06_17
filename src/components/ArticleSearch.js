import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'

//Styles
import 'react-day-picker/lib/style.css';

export default class ArticleSearch extends Component {
    state = {
        from: null,
        to: null,
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    handleResetClick = e => {
        e.preventDefault()
        this.setState({
          from: null,
          to: null,
        })
    }

    render() {
        const { from, to } = this.state;
        return (
            <div>
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from &&
                  to &&
                  <p>
                    You chose from
                    {' '}
                    {moment(from).format('L')}
                    {' '}
                    to
                    {' '}
                    {moment(to).format('L')}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                  </p>}
                <DayPicker
                  selectedDays={[from, { from, to }]}
                  onDayClick={this.handleDayClick}
                  fixedWeeks
                />
            </div>
        )
    }
}
