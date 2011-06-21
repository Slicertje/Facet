var Facet = (function ($) {

    var facet = {};

    /**
     * Gets the property of the given object. The property
     * can be nested (sub-properties separated by '.')
     *
     * Example:
     *
     * Facet.nestProperty({
     *     sub: {
     *         property: 'test'
     *     }
     * }, 'sub.property') => returns 'test'
     *
     * @params obj Object The objects to get the property
     * @params String The requests property (use '.' for sub-properties)
     *
     * @return mixed undefined if no property defined, else the value
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

    return facet;
})(jQuery);