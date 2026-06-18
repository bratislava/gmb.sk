import 'i18next'

/** Manual i18next type options  */
declare module 'i18next' {
  interface CustomTypeOptions {
    // https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
    returnNull: false
  }
}
