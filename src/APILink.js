import React from 'react';

const APILink = props => {
  let name = props.api.info.title

  function handleClick() {
    props.updateDefinitionLink(props.api)
  }

  return (
    <div className="api-link" onClick={() => handleClick()}>
      {name}
    </div>
  )
}

export default APILink;