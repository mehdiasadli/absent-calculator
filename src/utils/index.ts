export function countWeekdays(
  [startDateStr, endDateStr]: [string, string],
  weekDays: number[],
  holidays: string[]
) {
  const startDate = new Date(convertStrToDate(startDateStr))
  const endDate = new Date(convertStrToDate(endDateStr))
  let count = 0
  let dates = []

  holidays = holidays.map((e) => convertHolidayToStr(e))

  while (startDate <= endDate) {
    const str = convertDateToStr(startDate)
    if (weekDays.includes(startDate.getDay()) && !holidays.includes(str)) {
      count++
      dates.push(str)
    }
    startDate.setDate(startDate.getDate() + 1)
  }

  return { count, dates }
}

export function convertDateToStr(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  return `${day}.${month}.${year}`
}

export function convertStrToDate(dateStr: string): string {
  const [dd, mm, yyyy] = dateStr.split('.')
  return `${mm}.${dd}.${yyyy}`
}

export function convertHolidayToStr(holiday: string): string {
  const [yyyy, mm, dd] = holiday.split('-')
  return `${dd}.${mm}.${yyyy}`
}

export function getMaxDistances(n: number, m: number): number[] {
  n = n - 1
  let step = Math.floor(n / (m - 1))
  let result = []

  for (let i = 0; i < m - 1; i++) {
    result.push(i * step)
  }

  result.push(n)

  return result
}

export function getRandomId() {
  const rand = Math.floor(Math.random() * 10)
  return Date.now() + rand
}
