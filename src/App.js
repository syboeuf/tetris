import React from 'react'
// import Tetris from "./components/Tetris"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Scene from 'containers/Scene'
import NotFound from 'containers/NotFound'
import Tetris from 'containers/Tetris'
// import { connect } from 'react-redux'

// import * as Actions from 'actions/actions'
// import { bindActionCreators } from 'redux'

const App = () => (
    // <div className="App">
    //     <Tetris />
    // </div>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Scene } />
            <Route exact path='/tetris' component={ Tetris } />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
)

// http://localhost:3000/#<room>[<player]
// const mapStateToProps = (state) => {
//   return {
//     message: state.message
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators(Actions, dispatch)
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App