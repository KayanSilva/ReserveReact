import React, { Component } from 'react';
import './App.css'
import SwaggerUI from 'swagger-ui';
import '../node_modules/swagger-ui/dist/swagger-ui.css'
import ContratoApi from './Jsons/contratoApi.json'
import ViagemApi from './Jsons/viagemApi.json'
import Sidebar from './Sidebar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: ContratoApi,
      definitionList: null,
    }
    this.getOrganizationData = this.getOrganizationData.bind(this);
    this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
  }

  getOrganizationData() {
    let listaApis = [];
    listaApis.push(ContratoApi);
    listaApis.push(ViagemApi);
    this.setState({
      definitionList: listaApis
    })
  }

  updateDefinitionLink(newObject) {
    this.setState({
      object: newObject
    })
  }

  componentDidUpdate() {
    SwaggerUI({
      domNode: document.getElementById("api-data"),
      spec: this.state.object
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          definitionList={this.state.definitionList}
          getOrganizationData={this.getOrganizationData}
          updateDefinitionLink={this.updateDefinitionLink}
        />
        <div id="api-data" />
      </div>
    );
  }
}

export default App;