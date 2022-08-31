import { getStatsData } from './api.js'

const form = document.querySelector('#header-form')
const selectWhat = document.querySelector('#select_what')
const btn = document.querySelector('#button')
const errorBlock = document.querySelector('#errorBlock')

// прослушка на кнопку
form.addEventListener('submit', (event) => {
  event.preventDefault()

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
