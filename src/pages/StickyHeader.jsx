import React from 'react'
import './../assets/style/Nav.scss'

function StickyHeader() {
  return (
    <section className='stickyHeader w-100 position-absolute d-flex align-items-center justify-content-between py-3'>
        <section className='versionName d-flex flex-column '>
            <h5 className='txtWhite mb-0 goth-med'>Frog plate</h5>
            <h6 className='txtYellow goth m-0'>Legendary</h6>
        </section>
        <h6 className='txtWhite goth-light'>Equipment</h6>
    </section>
  )
}

export default StickyHeader