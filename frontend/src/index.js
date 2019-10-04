import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import DataService from './services/dataService'
import ChartService from './services/chartService'

const init = async () => {
    const dataService = new DataService()
    await dataService.fetchData()
    const chartService = new ChartService(dataService)
    chartService.init(() => {
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        )
    })
}

init()

