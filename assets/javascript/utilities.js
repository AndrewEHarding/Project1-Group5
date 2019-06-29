$(document).ready(function() {
    function defineUtilities() {
        const utils = {
            // CAPITALIZE FIRST LETTER OF EACH WORD
            toTitleCase: (str) => {
                return str.replace(/\w\S*/g, function(txt){
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            },

            isZipCode: (str) => {
                regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
                return regexp.test(str)
            }
        };
        return utils;
    };
    window.utils = defineUtilities();
})