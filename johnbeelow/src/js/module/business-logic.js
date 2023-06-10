import { formatDuration, intervalToDuration } from 'date-fns'
import ru from 'date-fns/locale/ru'
import { UI_ELEMENTS } from './ui_elements'

const calcDate = (value) => {
  const duration = intervalToDuration({
    start: new Date(value),
    end: new Date(),
  })

  const result = formatDuration(duration, {
    format: ['years', 'days', 'weeks', 'hours'],
    locale: ru,
  })
  return result
}

const renderDate = (value) => {
  UI_ELEMENTS.RESULT_DATE.textContent = calcDate(value)
}

export { renderDate }
