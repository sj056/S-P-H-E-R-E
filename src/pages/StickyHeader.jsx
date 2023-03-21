import React from 'react'
import './../assets/style/Nav.scss'

function StickyHeader() {
  return (
    <section className='sticky-header w-100 position-absolute d-flex align-items-center justify-content-between'>
        <section className='version-name d-flex flex-column '>
            <h5 className='txt-white mb-0 goth-med'>Frog plate</h5>
            <h6 className='txt-yellow goth m-0'>Legendary</h6>
        </section>
        <h6 className='txt-white goth-light'>Equipment</h6>
    </section>
  )
}

export default StickyHeader