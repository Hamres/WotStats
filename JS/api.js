export const getStatsData = async (nickname) => {
  try {
    // ищем по нику id аккаунта
    const response = await fetch(`https://api.worldoftanks.ru/wot/account/list/?application_id=092ce98e1d0e4584d8c87eb08d4b529a&search=${nickname}`)

    const data = await response.json()
    // ключ значение Id аккаунта
    const accountId = data.data['0'].account_id
    // выводим статистику по id аккаунта
    const responseId = await fetch(`https://api.worldoftanks.ru/wot/account/info/?application_id=092ce98e1d0e4584d8c87eb08d4b529a&account_id=${accountId}`)

    const dataId = await responseId.json()

    console.log(dataId)
  } catch (error) {
    console.error(error)
  }
}

// const battle = (document.querySelector('#BATTLE_PARAMS').textContent = data.data['96151175'].statistics.all.battles)
