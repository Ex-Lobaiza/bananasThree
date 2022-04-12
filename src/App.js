import ReactDOM from 'react-dom'
import { Suspense, useState } from 'react'
import './index.css'
import Overlay from './layout/Overlay'
import Bananas from './Bananas'

export default function App(){
  return(
    <>
      <Suspense fallback={null}>
      <Bananas/>
    </Suspense>
    <Overlay/>
  </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))