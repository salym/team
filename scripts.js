$( document ).ready( function () {

    // ParticlesJS initialization
    particlesJS.load( 'particles-js', './assets/particles.json' );

    // Bootstrap initialization
    $( 'body' ).bootstrapMaterialDesign();

    // Scroll to a specif element with a hash
    $( 'a[href*="#"]' )
        .not( '[href="#"]' )
        .not( '[href="#0"]' )
        .click( function ( e ) {
            if (
                location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) &&
                location.hostname == this.hostname
            ) {
                var target = $( this.hash );
                target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
                if ( target.length ) {
                    e.preventDefault();
                    $( 'html, body' ).animate( {
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $( target );
                        $target.focus();
                        if ( $target.is( ":focus" ) ) {
                            return false;
                        } else {
                            $target.attr( 'tabindex', '-1' );
                            $target.focus();
                        };
                    } );
                }
            }
        } );

    // Scroll to top when no links is provided
    $( 'a[href="#"]' ).click( function ( e ) {
        if (
            location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) &&
            location.hostname == this.hostname
        ) {
            // Only prevent default if animation is actually gonna happen
            e.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: 0
            }, 1000 );
        }
    } );
} );