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

    //кол-во боев
    const battle = (document.querySelector('#BATTLE_PARAMS').textContent = dataId.data[accountId].statistics.all.battles)

    //ср урон
    const damage = (document.querySelector('#MIDDLE-DAMAGE_PARAMS').textContent = dataId.data[accountId].statistics.all.damage_dealt / battle) //toFixed ?

    // wg рейтинг
    const wgRating = (document.querySelector('#WG_PARAMS').textContent = dataId.data[accountId].global_rating)

    // % побед
    const win = dataId.data[accountId].statistics.all.wins

    const winRating = (document.querySelector('#WIN_PARAMS').textContent = (win / battle) * 100) //toFixed ?

    // WN8

    //table of expected
    const table = await fetch(`https://static.modxvm.com/wn8-data-exp/json/wn8exp.json`)

    const dataTable = await table.json()

    console.log(dataTable)

    // const avgDmg = dataId.data[accountId].statistics.all.damage_dealt;
    // const avgSpot = dataId.data[accountId].statistics.all.spotted;
    // const avgFrag = dataId.data[accountId].statistics.all.frags;
    // const avgDef = dataId.data[accountId].statistics.all.dropped_capture_points;
    // const avgWinRate = win;
    const expDmg = dataTable.data[100].expDamage
    // const expSpot = //ожидаемое количество обнаруженных;
    // const expFrag = //ожидаемое количество уничтоженных;
    // const expDef = //ожидаемое количество очков защиты;
    // const expWinRate = //ожидаемое количество побед;

    //   const expDmgArray = for (i in dataTable.data) {
    //     x += "<h1>" + dataTable.data[i].expDamage + "</h1>";
    // }

    // WN8

    console.log(expDmg)

    console.log(dataId)
  } catch (error) {
    console.error(error)
  }
}
