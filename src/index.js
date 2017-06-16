import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'

render(<App articles = {articles} />, document.getElementById('container'))