import React, { PureComponent } from 'react' 
import ReactDayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DayPicker extends PureComponent {
    state = {
        first: null,
        second: null
    }

    handleDayClick = day => {
        let {
            first,
            second
        } = this.state;
        
        if (!first) {
            this.setState({
                first: day
            })    
        } else if (!second) {
            this.setState({
                second: day
            })
        } else {
            this.setState({
                first: day,
                second: null
            })
        }        
    };

    render() {
        let {
            first,
            second
        } = this.state;
        let day;
        let str = first
            ? (second
               ? `Выбранный временной интервал: ${day = Math.abs(second - first)/86400000} ${day < 5 ? (day === 1 ? 'день' : 'дня') : 'дней'}`
               : 'Выберите вторую дату'
              )
            : 'Выберите первую дату'; 
        
        return <div>
            <div>{ str }</div>
            <ReactDayPicker
        onDayClick={this.handleDayClick}
        selectedDays={this.state.selectedDay}
            />
        </div>
    }
}
