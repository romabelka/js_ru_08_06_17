import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {select} from '../../AC'
import {articles} from '../../fixtures'
//import selected from '../../reducer'
class SelectFilter extends Component {
//    state = {
//        selected: []
//    }

//    static propTypes = {
//        articles: PropTypes.array.isRequired
//    };

    handleChange = selected => this.props.select(selected)

    render() {
        const  selected  = this.props.selected
        const  articles  = this.props.articles

        const options = articles.map(article => ({
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

export default connect((state)=>({articles: articles, selected: state.select}),
{select})(SelectFilter)
