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

    const battle = (document.querySelector('#BATTLE_PARAMS').textContent = dataId.data[accountId].statistics.all.battles)

    //ср. урон

    const middleDamageParams = document.querySelector('#MIDDLE-DAMAGE_PARAMS')
    const DamageRating = dataId.data[accountId].statistics.all.damage_dealt / battle
    middleDamageParams.textContent = DamageRating.toFixed()

    // wg рейтинг

    const wgRating = (document.querySelector('#WG_PARAMS').textContent = dataId.data[accountId].global_rating)

    // % побед
    const win = dataId.data[accountId].statistics.all.wins

    const winParams = document.querySelector('#WIN_PARAMS')
    const rating = (win / battle) * 100
    winParams.textContent = rating.toFixed(2) + ' %'

    //==покрас==

    //бои

    const battleId = dataId.data[accountId].statistics.all.battles
    const elemBattle = document.querySelector('#BATTLE_PARAMS')
    let colorClass = ''
    const getColor = () => {
      if (battleId > 1 && battleId < 4999) {
        colorClass = 'red'
      }
      if (battleId >= 5000 && battleId < 8999) {
        colorClass = 'orange'
      }
      if (battleId >= 9000 && battleId < 13999) {
        colorClass = 'green'
      }
      if (battleId >= 14000 && battleId < 49999) {
        colorClass = 'blue'
      }
      if (battleId >= 50000) {
        colorClass = 'purple'
      }
      elemBattle.classList.add(colorClass)

      return colorClass
    }

    getColor()

    //рейтинг WG

    const wgId = dataId.data[accountId].global_rating
    const elemWg = document.querySelector('#WG_PARAMS')
    let colorClassWg = ''
    const getColorWg = () => {
      if (wgId > 1 && wgId < 4830) {
        colorClassWg = 'red'
      }
      if (wgId >= 4831 && wgId < 6919) {
        colorClassWg = 'orange'
      }
      if (wgId >= 6920 && wgId < 9175) {
        colorClassWg = 'green'
      }
      if (wgId >= 9176 && wgId < 10619) {
        colorClassWg = 'blue'
      }
      if (wgId >= 10620) {
        colorClassWg = 'purple'
      }
      elemWg.classList.add(colorClassWg)

      return colorClassWg
    }

    getColorWg()

    // % побед

    let winRating = rating
    let colorClassWin = ''
    const getColorWin = () => {
      if (winRating > 0 && winRating < 46.49) {
        colorClassWin = 'red'
      }
      if (winRating >= 46.5 && winRating < 52.49) {
        colorClassWin = 'orange'
      }
      if (winRating >= 52.5 && winRating < 57.49) {
        colorClassWin = 'green'
      }
      if (winRating >= 57.5 && winRating < 63.49) {
        colorClassWin = 'blue'
      }
      if (winRating >= 63.5) {
        colorClassWin = 'purple'
      }
      winParams.classList.add(colorClassWin)

      return colorClassWin
    }

    getColorWin()

    // ср.урон
    let colorClassDamage = ''
    const getColorDamage = () => {
      if (DamageRating > 0 && DamageRating < 749) {
        colorClassDamage = 'red'
      }
      if (DamageRating >= 750 && DamageRating < 999) {
        colorClassDamage = 'orange'
      }
      if (DamageRating >= 1000 && DamageRating < 1799) {
        colorClassDamage = 'green'
      }
      if (DamageRating >= 1800 && DamageRating < 2499) {
        colorClassDamage = 'blue'
      }
      if (DamageRating >= 2500) {
        colorClassDamage = 'purple'
      }
      middleDamageParams.classList.add(colorClassDamage)

      return colorClassDamage
    }

    getColorDamage()
    if (errorBlock.classList.length > 1) {
      errorBlock.classList.remove(errorBlock.classList.item(1))
    }
  } catch (error) {
    let showError = 'show-error'
    errorBlock.classList.add(showError)

    console.error(error)
  }
}
