// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function periodIsLate(last, today, cycleLength) {
    const days_last = ((Date.parse(last) / 60000) / 60) / 24
    const days_today = ((Date.parse(today) / 60000) / 60) / 24
    
    return days_today - days_last > cycleLength
  }