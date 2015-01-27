brackets-jsxhint
=================

A Brackets extension that enables compiles .jsx files to Javascript and runs them through JSHint.

*NOTE:* This extension does **not** use the [JSXHint module](https://github.com/STRML/JSXHint).

Requirements
=====

Brackets Sprint 37 or greater

Release Notes
=====

**v0.0.7** (2015-01-27)

- Fixes a bug which would print error messages to the console when error messages could not be determined

**v0.0.6** (2014-12-18)

- Now validates all Javascript and JSX files instead of looking for the React DOM comment

**v0.0.5** (2014-12-18)

- Upgrade to JSHint 2.5.11

**v0.0.4** (2014-12-18)

- Revert to JSHINT 2.5.6, as there is a Browserify loading issue with JSHint 2.5.10
- Add JSHINT failure detection to prevent linter from timing out

**v0.0.3** (2014-11-13)

- Upgrade to React v0.12 and enable Harmony mode

**v0.0.2** (2014-08-26)

- Fix for [Issue #1](https://github.com/globexdesigns/brackets-jsxhint/issues/1)

**v0.0.1** (2014-08-25)

- Initial release

Building This Extension
=====

```
npm install
bower install
grunt build
```

Credit
=====

Based heavily on [brackets-jshint](https://github.com/cfjedimaster/brackets-jshint/).