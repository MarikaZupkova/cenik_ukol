const plan1Elm = document.querySelector('#plan1')
const plan2Elm = document.querySelector('#plan2')
const plan3Elm = document.querySelector('#plan3')

const selectPlan = (planNumber) => {
  if (planNumber === 1) {
    plan1Elm.classList.add ('plan--selected')
    plan2Elm.classList.remove ('plan--selected')
    plan3Elm.classList.remove ('plan--selected')
  } else if (planNumber === 2) {
    plan1Elm.classList.remove ('plan--selected')
    plan2Elm.classList.add ('plan--selected')
    plan3Elm.classList.remove ('plan--selected')
  } else if (planNumber === 3) {
    plan1Elm.classList.remove ('plan--selected')
    plan2Elm.classList.remove ('plan--selected')
    plan3Elm.classList.add ('plan--selected')
  } else {
    plan1Elm.classList.remove ('plan--selected')
    plan2Elm.classList.remove ('plan--selected')
    plan3Elm.classList.remove ('plan--selected')
  }
}

selectPlan(4)
