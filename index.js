const sync = require('i18next-json-sync').default;
//or in ES5 world:
//const sync = require('i18next-json-sync').default;

//defaults are inline:
sync({
  /** Audit files in memory instead of changing them on the filesystem and
    * throw an error if any changes would be made */
  check: false,
  /** Glob pattern for the resource JSON files */
  files: '**/locales/*.json',
  /** An array of glob patterns to exclude from the files search */
  excludeFiles: ['**/node_modules/**'],
  /** Primary localization language. Other language files will be changed to match */
  primary: 'cz',
  /** Use empty string for new keys instead of the primary language value */
  newKeysEmpty: true
})