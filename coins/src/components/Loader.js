import React from 'react'
import { BarLoader } from 'react-css-loaders'
// https://github.com/LucasBassetti/react-css-loaders'

const Loader = () => (
  <section class="hero is-fullheight background-dark">
    <div class="hero-body">
      <div class="container has-text-centered">
        <BarLoader color="#ffffff" />
      </div>
    </div>
  </section>


)

export default Loader