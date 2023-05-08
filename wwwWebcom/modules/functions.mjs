import {input,city,temperature,ABSOLUTE_ZERO} from './constants.mjs'


export function renderInfo(data) {
	if (data) {
		city.textContent = input.value.slice(0,1).toUpperCase() + input.value.slice(1)
		temperature.textContent = `${Math.round(data.main.temp - ABSOLUTE_ZERO)}°`
	}
	input.value = ''
}











