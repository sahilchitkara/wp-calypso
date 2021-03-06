/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import themes from './themes/reducer';
import themeDetails from './theme-details/reducer';
import themesList from './themes-list/reducer';
import currentTheme from './current-theme/reducer';
import themesUI from './themes-ui/reducer';

export default combineReducers( {
	themes,
	themeDetails,
	themesList,
	currentTheme,
	themesUI,
} );
