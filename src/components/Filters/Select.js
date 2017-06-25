import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        allArticles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.filterSelect(selected)

    render() {
        const { selected, allArticles } = this.props

        const options = allArticles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default SelectFilter
