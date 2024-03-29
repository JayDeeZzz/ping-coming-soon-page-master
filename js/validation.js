    // Wait for the DOM to be ready
    $(function() {
        // Initialize form validation on the notify form.
        // It has the name attribute "notify"
        $("form[name='notify']").validate({
            // Specify validation rules
            rules: {
                // of an input field. Validation rules are defined
                // on the right side
                email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                }
            },


            // Specify validation error messages
            messages: {

                email: "Please provide a valid email address"
            },

            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
            }
        });

    });