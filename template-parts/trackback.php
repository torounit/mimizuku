<?php
/**
 * @package mimizuku
 * @author inc2734
 * @license GPL-2.0+
 */
?>
<dl class="_p-trackback" id="comment-<?php comment_ID(); ?>">
	<dt class="_p-trackback__meta">
		<?php
		$author = sprintf( '<cite>%s</cite>', get_comment_author_link() );
		$date   = get_comment_date();
		$time   = get_comment_time();
		printf(
			esc_html__( '%1$s said on %2$s at %3$s', 'mimizuku' ),
			wp_kses_post( $author ),
			wp_kses_post( $date ),
			wp_kses_post( $time )
		);
		edit_comment_link( 'edit', '  ', '' );
		?>
	</dt>
	<dd class="_p-trackback__body">
		<?php comment_text() ?>
	</dd>
</dl>
