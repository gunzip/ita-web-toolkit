import Frtooltip from 'fr-tooltip'

/* eslint-disable no-unused-vars */

import stylesheet from 'fr-tooltip/tooltip.css'

/* eslint-enable */

var tooltip = Frtooltip({
	// String - Container selector, hook for JS init() method
	selector: '.js-fr-tooltip',

	// String - Selector to define the tooltip element
	tooltipSelector: '.js-fr-tooltip-tooltip',

	// String - Selector to define the toggle element controlling the tooltip
	toggleSelector: '.js-fr-tooltip-toggle',

	// String - Prefix for the id applied to each tooltip as a reference for the toggle
	tooltipIdPrefix: 'tooltip',

	// String - Class name that will be added to the selector when the component has been initialised
	readyClass: 'fr-tooltip--is-ready'
})

export default { tooltip, Frtooltip }
