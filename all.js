;(function() {
  //列出所呈現的城市時區
  let countries = [
    {
      location: 'NEW YORK',
      timeZone: 'America/New_York'
    },
    {
      location: 'LONDON',
      timeZone: 'Europe/London'
    },
    {
      location: 'BANGKOK',
      timeZone: 'Asia/Bangkok'
    },
    {
      location: 'TAIWAN',
      timeZone: 'Asia/Taipei'
    },
    {
      location: 'SYDNEY',
      timeZone: 'Australia/Sydney'
    }
  ]

  let clock = function() {
    //透過toLocaleDateString抓取各時區時間
    let date = new Date()

    let options = {
      year: 'numeric', //定義年使用四碼
      month: 'short', //定義月使用英文簡寫
      day: '2-digit', //定義示兩碼
      hour: '2-digit', //定義示兩碼
      minute: '2-digit', //定義顯示兩碼
      hour12: false //false可以將小時顯示至24
    }
    // console.log(
    //   date.toLocaleDateString('en-US', { timeZone: 'Asia/Taipei', ...options })
    // )

    //使用foreach逐一執行每個時區
    countries.forEach((country, index) => {
      let localTime = date.toLocaleDateString('en-US', {
        timeZone: country.timeZone,
        ...options
      })
      //console.log(localTime)

      //將localTime的值進行分解
      let str = localTime.split(' ')
      //console.log(str[3])
      let year = str[2].replace(/,/g, '') //將逗號拿掉
      let mon = str[0].toUpperCase() //全變大寫
      let day = str[1].replace(/,/g, '')
      let time = str[3]
      console.log({ year, mon, day, time })
      //console.log(country.location)
      let location = document.querySelectorAll('.name')
      location[index].innerHTML = `${country.location}`
      let dates = document.querySelectorAll('.date')
      dates[index].innerHTML = `${day}${mon},${year}`
      let times = document.querySelectorAll('.time')
      times[index].innerHTML = time
    })
  }
  clock()
  setInterval(clock, 1000)
})()
