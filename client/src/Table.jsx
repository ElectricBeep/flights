import React from 'react'

const Table = ({ data }) => {
  console.log(data)
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Counrty</th>
        </tr>
        {data?.map(item => (
          <tr key={item.properties.id}>
            <td>{item.properties.name}</td>
            <td>{item.properties.city}</td>
            <td>{item.properties.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table