import './style.css'
// import './sass/index.sass'
// import { setupCounter } from './counter.ts'
import { setupStart } from './start'
import { ICONS } from './icons'
import AppModules from './modules'

function setupModule(el: HTMLElement) {
  return {
    calculator: new AppModules.Calculator(el),
    synth: new AppModules.Synth(el),
    tiktaktoe: new AppModules.TikTakToe(el),
    calendar: new AppModules.Calendar(el)
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!
// tabs link inject to app
const tabsLinkEl = document.createElement('div')
tabsLinkEl.setAttribute('id', 'tabs-link')
app.appendChild(tabsLinkEl)
const tabsLink = ['calculator', 'synth', 'tiktoktoe', 'calendar']
const tabLinkNodes = tabsLink.map((tabLink) => {
  const buttonEl = document.createElement('button')
  buttonEl.classList.add('tab-link')
  buttonEl.innerHTML = ICONS[<keyof typeof ICONS>tabLink]
  buttonEl.addEventListener('click', (e: Event) => {
    // console.log(tabLink, e)
    setActiveTab(e, tabLink)
  })
  return buttonEl
})
tabsLinkEl.prepend(...tabLinkNodes)
// tabs content inject to app
const tabsContentEl = document.createElement('div')
tabsContentEl.setAttribute('id', 'tabs-content')
app.appendChild(tabsContentEl)
const tabContentNodes = tabsLink.map((tabLink) => {
  const divEl = document.createElement('div')
  divEl.setAttribute('id', tabLink)
  divEl.classList.add('tab-content')
  divEl.style.display = 'none'
  type SetupModuleKeys = keyof ReturnType<typeof setupModule>
  setupModule(divEl)[<SetupModuleKeys>tabLink].render()
  return divEl
})
tabsContentEl.prepend(...tabContentNodes)
// set active tab
function setActiveTab(evt: Event, tabName: string) {
  let i, tabContents, tabLinks

  tabContents = document.getElementsByClassName('tab-content')
  for (i = 0; i < tabContents.length; i++) {
    ;(<HTMLElement>tabContents[i]).style.display = 'none'
  }

  tabLinks = document.getElementsByClassName('tab-link')
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '')
  }

  document.getElementById('start-tab-content')!.style.display = 'none'
  document.getElementById(tabName)!.style.display = 'block'
  if (evt.currentTarget instanceof HTMLElement) {
    evt.currentTarget.className += ' active'
  }
}

const startEl = document.createElement('div')
startEl.setAttribute('id', 'start-tab-content')
tabsContentEl.append(startEl)
setupStart(startEl)

console.log(AppModules)
const calculator = document.getElementById('calculator')!
new AppModules.Calculator(calculator)
