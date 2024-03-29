import Vue from "vue"
const eventBus = new Vue()
// Use like: utils.eventBus.$emit("notificate", "Welcome!")

// Clamp
const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max)
}

// Format
const format = (value) => {
  let formatedValue
  if (value >= 1000000) {
    formatedValue = value.toExponential(3)
  } else {
    formatedValue = (value === Math.floor(value)) ? String(value).replace(/(.)(?=(\d{3})+$)/g,"$1,") : String(value.toFixed(2)).replace(/(.)(?=(\d{3})+$)/g,"$1,")
  }
  return formatedValue
}

// Popup data
const popup = {
  text: "",
  hovered: false
}
// All functions bundled together
const utils = {
  clamp,
  format,
  popup,
  eventBus
}

export default utils