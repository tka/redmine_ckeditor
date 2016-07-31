//
//= require rich/editor/ckeditor_path
//= require ckeditor-releases/ckeditor
//= require rich/editor/rich_editor
//= require rich/editor/rich_picker

CKEDITOR.tools.getCsrfToken= function() {
    var token = jQuery( 'meta[name="csrf-token"]' ).attr( 'content' );
    return token;
}
