import './style.css'
// import './sass/index.sass'
// import { setupCounter } from './counter.ts'
import { ICONS } from './icons'

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
    console.log(tabLink, e)
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
  divEl.textContent = `content -> ${tabLink}`
  return divEl
})
tabsContentEl.prepend(...tabContentNodes)
//
function setActiveTab(evt: Event, tabName: string) {
  let i, tabContents, tabLinks

  tabContents = document.getElementsByClassName('tab-content')
  for (i = 0; i < tabContents.length; i++) {
    ;(<HTMLElement>tabContents[i]).style.display = 'none'
  }

  tabLinks = document.getElementsByClassName('tab-links')
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '')
  }

  document.getElementById(tabName)!.style.display = 'block'
  if (evt.currentTarget instanceof HTMLElement) {
    evt.currentTarget.classList.contains('active')
      ? evt.currentTarget.classList.remove('active')
      : (evt.currentTarget.className += ' active')
  }
}
