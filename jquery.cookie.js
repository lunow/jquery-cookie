/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 *  Added Versionized Cookies Feature!
 *  Set current Version in $.versionizedCookie.version = '1.0';
 *  every cookie related to an old version will be deleted.
 *  Paul Lunow, 8.6.12
 */
(function($) {
    $.versionizedCookie = {
        version: '1.0',
        seperator: '___'
    };
    $.cookie = function(key, value, options) {
        var setVersion = function(name) {
            if(typeof $.versionizedCookie == 'object') {
                name = $.versionizedCookie.version+$.versionizedCookie.seperator+name;
            }
            return name;
        };

        var checkVersion = function(name) {
            if(typeof $.versionizedCookie == 'object') {
                var parts = name.split($.versionizedCookie.seperator);
                if(parts[0] != $.versionizedCookie.version) {
                    $.cookie(parts[1], null);
                    return null;
                }
                return parts[1];
            }
            return name;
        };

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = setVersion(String(value));

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return checkVersion(s); } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return checkVersion(decode(pair[1] || '')); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);
