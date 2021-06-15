//OutSystems change - component to customize the data types of inputs and outputs
import React, { Component } from "react"

//OutSystems change: get the primitive types
export const getPrimitiveModel = (type, format) => {
  var str;
  if (type === 'integer') {
    if (format == 'int64') {
      str = 'long';
    }
    else {
      str = 'integer';
    }
  } else if (type === 'string') {
    if (format) {
      str = format;
    } else {
      str = 'string';
    }
  } else if (type === 'number') {
    if (format) {
      str = format;
    } else {
      str = 'double';
    }
  } else if (type === 'boolean') {
    str = 'boolean';
  } else if (type == "object") {
    str = type;
  }

  return str;
}

class DataTypesOutSystems extends Component {
  static propTypes = {
    param: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    pathMethod: PropTypes.array.isRequired,
    isResponse: PropTypes.boolean,
    contentType: PropTypes.string,
  }

  //OutSystems change: get the Model format
  getModel(type, format, itemType, itemFormat) {
    var str;
    if (type === 'array') {
      if (itemType) {
        str = "array[" + getPrimitiveModel(itemType, itemFormat) + "]";
      }
    }
    else if (type == "object") {
      str = type;
    } else {
      str = getPrimitiveModel(type, format);
    }
    return str;

  }

  render() {
    let { param, specSelectors, schema, pathMethod, isResponse, contentType } = this.props

    let format = schema ? schema.get("format") : null
    let type = schema ? schema.get("type") : null
    let itemType = schema ? schema.getIn(["items", "type"]) : null
    let itemFormat = schema ? schema.getIn(["items", "format"]) : null
    let displayModel = this.getModel(type, format, itemType, itemFormat)

    if (isResponse) {
      if (contentType == 'application/octet-stream') {
        displayModel = 'binary';
      }
    } else {
      let consumes = specSelectors.consumesOptionsFor(pathMethod);
      if ((param && param.get("in") == 'body') && !format && (!consumes || consumes.size == 0)) {
        displayModel = 'binary';
      }
    }
    return (
      <span className="prop-type">
        {displayModel}    
      </span>
    )
  }
}

export default DataTypesOutSystems
