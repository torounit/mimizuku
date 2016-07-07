<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<?php get_template_part( 'template-parts/head' ); ?>

<body <?php body_class(); ?>>

<?php get_header(); ?>

<div class="_c-container" role="document">
	<div class="_c-row">
		<div class="_c-row__col _c-row__col--md-2-3">
			<main role="main">
				<?php
				get_template_part(
					apply_filters( 'mimizuku_view', '' ),
					apply_filters( 'mimizuku_view_suffix', '' )
				);
				?>
			</main>
		</div>
		<div class="_c-row__col _c-row__col--md-1-3">
			<?php get_sidebar(); ?>
		</div>
	</div>
</div>

<?php get_footer(); ?>

<?php wp_footer(); ?>
</body>
</html>
