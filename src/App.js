import React, {Component} from "react";
import Layout from './hoc/Loyaut/Loyaut'
import Quiz from "./containers/Quiz/Quiz";

class App extends Component{
  render() {
    return(
        <Layout>
            <Quiz />
        </Layout>
    )
  }
}

export default App;
