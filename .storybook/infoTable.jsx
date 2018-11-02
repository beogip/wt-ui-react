// @flow 
import React from 'react'
import {Table} from 'react-bootstrap'
// import {Container, Row, Col} from 'react-bootstrap'

type PropType = {
  property: string, // The name of the prop
  propType: Object, // The prop type. TODO: info about what this object is...
  required: boolean, // True if the prop is required
  description: string, // The description of the prop
  defaultValue: any // The default value of the prop
}

type PropsType = {
  propDefinitions: PropType[]
}

const PropsTable = (props: PropsType) => {
  return (
    <Table striped hover variant="light" responsive>
      <thead>
        <tr className="thead-dark">
          <th>property</th>
          <th>type</th>
          <th>required</th>
          <th>default</th>
          <th>description</th>
        </tr> 
      </thead>
      <tbody>
        {props.propDefinitions.map(({propType, property, required, defaultValue, description}) => (
          <tr key={property}>
              <td>
                {property}
              </td>
              <td>
                {propType.raw || propType.value || propType.name}
              </td>
              <td>
                {required ? 'yes' : 'no'}
              </td>
              <td>
                {defaultValue || '-' }
              </td>
              <td>
                {description || '-'}
              </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
export default PropsTable