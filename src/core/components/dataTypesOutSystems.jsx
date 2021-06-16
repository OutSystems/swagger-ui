//OutSystems change - component to customize the data types of inputs and outputs
import React, { Component } from "react"

//OutSystems change: get the primitive types according to the type and format
export const getPrimitiveModel = (type, format) => {
  var str;
  if (type === 'integer') {
    //if format = int64 display long
    if (format == 'int64') {
      str = 'long';
    }
    else {
      str = 'integer';
    }
  } else if (type === 'string') {
    if (format) {
      //in the case of being string and having format (for instance time, date-time, date), display the format
      str = format;
    } else {
      str = 'string';
    }
  } else if (type === 'number') {
    //if it's a number, display double
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

  getModel(type, format, itemType, itemFormat) {
    var str;
    if (type === 'array') {
      if (itemType) {
        //display array[type], like array[integer]
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

    let format = schema && schema.get? schema.get("format") : null
    let type = schema && schema.get ? schema.get("type") : null
    let itemType = schema && schema.get ? schema.getIn(["items", "type"]) : null
    let itemFormat = schema && schema.get ? schema.getIn(["items", "format"]) : null
    let displayModel = this.getModel(type, format, itemType, itemFormat)

    //if isResponse, check the content type. If content-Type = octet-stream, it will display binary
    if (isResponse) {
      if (contentType == 'application/octet-stream') {
        displayModel = 'binary';
      }
    } else {
      //it is binary type if consumes = [] and there is no format
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
