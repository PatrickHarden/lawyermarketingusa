import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'css/styles.css'
import 'css/mobile.css'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  window.addEventListener('load', () => {
    const ga = window.ga
    ga('create', 'UA-34747140-1', 'auto')

    ga('require', 'outboundLinkTracker')
    ga('require', 'urlChangeTracker')

    ga('send', 'pageview')
  })
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
