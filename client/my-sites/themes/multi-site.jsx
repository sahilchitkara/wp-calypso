/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import SidebarNavigation from 'my-sites/sidebar-navigation';
import ThemesSiteSelectorModal from './themes-site-selector-modal';
import { connectOptions } from './theme-options';
import ThemeShowcase from './theme-showcase';

const MultiSiteThemeShowcase = ( props ) => (
	<ThemesSiteSelectorModal { ...props } sourcePath="/design">
		<ThemeShowcase source="showcase">
			<SidebarNavigation />
		</ThemeShowcase>
	</ThemesSiteSelectorModal>
);

const ConnectedMultiSiteThemeShowcase = connectOptions( MultiSiteThemeShowcase );

export default ( props ) => (
	<ConnectedMultiSiteThemeShowcase { ...props }
		options={ [
			'preview',
			'purchase',
			'activate',
			'tryandcustomize',
			'separator',
			'info',
			'support',
			'help',
		] }
		defaultOption="activate"
		secondaryOption="tryandcustomize"
		getScreenshotOption={ function() {
			return 'info';
		} } />
);
