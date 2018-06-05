import { fetch, headers } from '../utils/fetch'
import { START_EXPERIMENT } from '../constants'

/* ACTIONS
 ===============================================*/
function startExperiment(data) {
  return {
    type: START_EXPERIMENT,
    data,
  }
}

/* EXPORTS
===============================================*/
export default startExperiment;
