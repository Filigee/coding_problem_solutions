// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const SON_TIMES_2 = sonYearsOld * 2
    
    return SON_TIMES_2 > dadYearsOld ? SON_TIMES_2 - dadYearsOld : dadYearsOld - SON_TIMES_2
  }