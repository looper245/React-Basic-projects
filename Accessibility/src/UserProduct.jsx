import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function UserProduct() {
  const { id } = useParams()
  const { data, loading, error } = useSelector((state) => state.product)
  const [displayPro, setDisplay] = useState('none')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay('block')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div className='product-container'>
      <div className="nav" style={{ cursor: displayPro === 'none' ? 'wait' : 'pointer' }}>
        <div className="container-box" style={{ display: displayPro }}>
          {data.filter(t => t.id == 1).map((p) => (
            <main key={p.id}>
              <img src={p.image} />
              <h3>{p.category}</h3>
              <h3>{p.description}</h3>
              <h3>{p.price}</h3>
            </main>
          ))}
        </div>
      </div>
    </div>
  )
}
