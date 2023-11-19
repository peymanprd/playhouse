import './style.css'
// import './sass/index.sass'
import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div>
    <h1>PlayHouse</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

const counter = document.querySelector<HTMLButtonElement>('#counter')!
setupCounter(counter)
