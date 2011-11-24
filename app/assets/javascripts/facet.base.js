var Facet = (function ($) {

    var facet = {};

    /**
     * Fetches the value of a property of the given object.
     *
     * @param obj Object The object from which to get the property
     * @param property String The property, separated by . for accessing sub-properties
     *
     * @return mixed undefined if property doesn't exist, else the found value
     */
    facet.nestedProperty = function (obj, property) {
        var parts  = property.split('.');
        var parent = obj;

        for (var i = 0; i < parts.length - 1; i++) {
            parent = parent[parts[i]];
            if (parent == undefined) {
                return undefined;
            }
        }

        return parent[parts[parts.length - 1]];
    };

    facet.parseOptions = function (str) {
        var options = {};

        if (str != '') {
            $.each(str.split(','), function (i, option) {
                if (option.indexOf('=') >= 0) {
                    var parts = option.split('=');
                    options[parts[0]] = parts[1];
                }
                else {
                    options[option] = true;
                }
            });
        }

        return options;
    };

    return facet;

})(jQuery);