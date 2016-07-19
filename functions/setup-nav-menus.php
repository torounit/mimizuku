<?php
namespace Mimizuku\Functions;

/**
 * Register wp_nav_menu() menus
 *
 * http://codex.wordpress.org/Function_Reference/register_nav_menus
 */
function setup_nav_menus() {
	register_nav_menus( [
		'global-nav' => esc_html__( 'Global Navigation (For PC)', 'mimizuku' ),
		'drawer-nav' => esc_html__( 'Drawer Navigation (For Mobile)', 'mimizuku' ),
		'footer-nav' => esc_html__( 'Footer Navigation', 'mimizuku' ),
	] );
}

add_action( 'after_setup_theme', __NAMESPACE__ . '\\setup_nav_menus' );


/**
 * Sets up nav menu attributs
 *
 * https://developer.wordpress.org/reference/functions/wp_nav_menu/
 */
function setup_wp_nav_menu( $nav_menu, $args ) {
	$nav_menu = preg_replace(
		'/menu-item-has-children(.*?)"/ms',
		'menu-item-has-children$1" aria-expanded="false"',
		$nav_menu
	);
	if ( in_array( $args->theme_location, ['global-nav', 'footer-nav'] ) ) {
		$nav_menu = preg_replace(
			'/<ul class="sub-menu">/ms',
			'<ul class="_c-menu__submenu">',
			$nav_menu
		);
	} elseif ( 'drawer-nav' === $args->theme_location ) {
		$nav_menu = preg_replace(
			'/<ul class="sub-menu">/ms',
			'<div class="c-drawer__toggle"><i class="fa fa-angle-right"></i></div><ul class="c-drawer__submenu">',
			$nav_menu
		);
	}
	return $nav_menu;
}

add_filter( 'wp_nav_menu', __NAMESPACE__ . '\\setup_wp_nav_menu', 10, 2 );

/**
 * Sets up menu classes
 *
 * https://developer.wordpress.org/reference/classes/walker_nav_menu/
 */
function nav_menu_css_class( $classes, $item, $args, $depth ) {
	if ( in_array( $args->theme_location, ['global-nav', 'footer-nav'] ) ) {
		if ( $depth > 0 ) {
			$classes[] = '_c-menu__subitem';
			return $classes;
		}

		$classes[] = '_c-menu__item';
		return $classes;
	}

	if ( 'drawer-nav' === $args->theme_location ) {
		if ( $depth > 0 ) {
			$classes[] = '_c-drawer__subitem';
			return $classes;
		}

		$classes[] = '_c-drawer__item';
		return $classes;
	}
	return $classes;
}

add_filter( 'nav_menu_css_class', __NAMESPACE__ . '\\nav_menu_css_class', 10, 4 );
