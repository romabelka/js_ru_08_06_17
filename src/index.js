import React from 'react'
import {render} from 'react-dom'
import ArticleList from './ArticleList'
import { articlesData } from './fixtures'

render(<ArticleList data={ articlesData } />, document.getElementById('container'))