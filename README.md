# jquery.cookie versionized!

A simple, lightweight jQuery plugin for reading, writing and deleting cookies.

Every cookie is saved with a version String. If you change the version, all old cookies will be deleted. Great for Web Applications and Cache problems.


## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.cookie.js"></script>


## Versionized

Set a Version:

    $.versionizedCookie.version = 2;

The defaults are:

    $.versionizedCookie = {
        version: '1.0',
        seperator: '___'
    };

If you dont want the versionized cookies use the original code or set the variable to false:

    $.versionizedCookie = false;

Thats it! Everything else is untouched and passes all tests.


## Usage

Create session cookie:

    $.cookie('the_cookie', 'the_value');

Create expiring cookie, 7 days from then:

    $.cookie('the_cookie', 'the_value', { expires: 7 });

Create expiring cookie, valid across entire page:

    $.cookie('the_cookie', 'the_value', { expires: 7, path: '/' });

Read cookie:

    $.cookie('the_cookie'); // => 'the_value'
    $.cookie('not_existing'); // => null

Delete cookie by passing null as value:

    $.cookie('the_cookie', null);

*Note: when deleting a cookie, you must pass the exact same path, domain and secure options that were used to set the cookie.*


## Options

    expires: 365

Define lifetime of the cookie. Value can be a `Number` (which will be interpreted as days from time of creation) or a `Date` object. If omitted, the cookie is a session cookie.

    path: '/'

Default: path of page where the cookie was created.

Define the path where cookie is valid. *By default the path of the cookie is the path of the page where the cookie was created (standard browser behavior).* If you want to make it available for instance across the entire page use `path: '/'`.

    domain: 'example.com'

Default: domain of page where the cookie was created.

    secure: true

Default: `false`. If true, the cookie transmission requires a secure protocol (https).

    raw: true

Default: `false`.

By default the cookie is encoded/decoded when creating/reading, using `encodeURIComponent`/`decodeURIComponent`. Turn off by setting `raw: true`.

## Changelog

## Development

- Source hosted at [GitHub](https://github.com/carhartl/jquery-cookie)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/carhartl/jquery-cookie/issues)

Pull requests are very welcome! Make sure your patches are well tested. Please create a topic branch for every separate change you make.

## Authors

[Klaus Hartl](https://github.com/carhartl)
