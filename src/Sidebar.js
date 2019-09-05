import React from 'react';
import APILink from './APILink.js'

const Sidebar = props => {
    let apiLinks = []

    if (props.definitionList === null) {
        props.getOrganizationData()
    } else {
        for (let i = 0; i < props.definitionList.length; i++) {
            apiLinks.push(
                <APILink
                    key={i}
                    api={props.definitionList[i]}
                    updateDefinitionLink={props.updateDefinitionLink}
                />
            )
        }
    }

    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <h1>Vale Pedagio DEV</h1>
            </div>
            <div className="side-bar-body">
                <h3>API DOCS</h3>
                {apiLinks}
            </div>
        </div>
    )
}

export default Sidebar;