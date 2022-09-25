import { getStatsData } from './api.js'

const form = document.querySelector('#header-form')
const selectWhat = document.querySelector('#select_what')
const btn = document.querySelector('#button')
const errorBlock = document.querySelector('#errorBlock')

let resetColorBattle = document.querySelector('#BATTLE_PARAMS')
let resetColorWg = document.querySelector('#WG_PARAMS')
let resetColorWin = document.querySelector('#WIN_PARAMS')
let resetColorDamage = document.querySelector('#MIDDLE-DAMAGE_PARAMS')

//прослушка на кнопку
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const classListBattle = resetColorBattle.classList
  while (classListBattle.length > 1) {
    classListBattle.remove(classListBattle.item(1))
  }
  const classListsWg = resetColorWg.classList
  while (classListsWg.length > 1) {
    classListsWg.remove(classListsWg.item(1))
  }
  const classListsWin = resetColorWin.classList
  while (classListsWin.length > 1) {
    classListsWin.remove(classListsWin.item(1))
  }
  const classListsDamage = resetColorDamage.classList
  while (classListsDamage.length > 1) {
    classListsDamage.remove(classListsDamage.item(1))
  }

  const whatText = selectWhat.value
})

form.addEventListener('submit', async () => {
  try {
    const statistics = await getStatsData(selectWhat.value)
  } catch (error) {
    console.error(error)
  }
})

const app = async () => {
  const nick = await getStatsData()
}
