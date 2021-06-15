import React from "react"
import PropTypes from "prop-types"
import Im from "immutable"
import { stringify } from "core/utils"
import { getPrimitiveModel } from "../plugins/dataTypesOutSystems"


const propClass = "header-example"

export default class Headers extends React.Component {
  static propTypes = {
    headers: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired
  };

  render() {
    let { headers, getComponent, getConfigs } = this.props

    const Property = getComponent("Property")
    const Markdown = getComponent("Markdown", true)
    const HighlightCode = getComponent("highlightCode")

    if ( !headers || !headers.size )
      return null

      return (
      <div>
        <h4 className="headers__title">Headers:</h4>
        <table aria-live="polite" className="responses-table"  role="region">
          <thead>
            <tr>
                <th className="col_header parameters-col_name">Name</th>
                <th className="col_header parameters-col_description">Description</th>
                <th className="col_header parameters-col_name">Type</th>
                <th className="col_header parameters-col_name">Example</th>
            </tr>
          </thead>
          <tbody>
          {
            headers.entrySeq().map( ([ key, header ]) => {
              if(!Im.Map.isMap(header)) {
                return null
              }

              const description = header.get("description")

              const type = header.getIn(["schema"]) ? header.getIn(["schema", "type"]) : header.getIn(["type"])
              const format = header.getIn(["schema"]) ? header.getIn(["schema", "format"]) : header.getIn(["format"])
              let dataType = getPrimitiveModel(type, format)
              //const schemaExample = header.getIn(["schema", "example"])
              let example = header.getIn(["example"])
              if (example == undefined) {
                example = header.getIn(["x-example"])
              }
              return (<tr key={ key }>
                <td className="col_header parameters-col_name">{ key }</td>
                <td className="col_header parameters-col_description">{
                  !description ? null : <Markdown source={ description } />
                }</td>
                <td className="col_header parameters-col_name">{dataType} </td>
                <td className="col_header parameters-col_name">
                  <HighlightCode
                    className="body-param__example"
                    getConfigs={getConfigs}
                    language={null}
                    value={stringify(example)}
                  />
                </td>
              </tr>)
            }).toArray()
          }
          </tbody>
        </table>
      </div>
    )
  }
}
