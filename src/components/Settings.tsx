import React from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div className='container'>
      <div className='backToAppButton'>
        <Link
          style={{ textDecoration: 'none', color: 'black', fontSize: '30px', margin: '30px' }}
          to={`/`}
        >
          Back
        </Link>
      </div>

      <div className='settings'>JNjvfnjvnfjnbjfgn</div>
    </div>
  )
}
