export function formatTimeTo12Hour(timeString: string): string {
  const date = new Date(timeString)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString()

  const period = hours >= 12 ? 'PM' : 'AM'

  return `${formattedHours}:${formattedMinutes} ${period}`
}
