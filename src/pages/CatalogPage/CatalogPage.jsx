import React from 'react'
import { useParams } from 'react-router-dom'

const CatalogPage = () => {
    const params = useParams().catalogname;
    console.log(params)

    
  return (
    <div>{params}</div>
  )
}

export default CatalogPage