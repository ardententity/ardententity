import * as colors from 'https://deno.land/std@0.113.0/fmt/colors.ts';

/**
 * The Logger script. Made for Deno specifically.
 */
export default class Logger {
  private static fo = (x: string) => colors.gray(`[${new Date().toISOString()}] `) + x + colors.gray(' > ');

  /** Output the string specified into console. */
  static out(...x: any[]) { console.log(Logger.fo(colors.blue('out')) + x.flatMap(obj => obj.toString().join(' '))); }
  /** Output the string specified into console as a line of `info`. */
  static info(...x: any[]) { console.info(Logger.fo(colors.cyan('info')), x.flatMap(obj => obj.toString()).join(' ')); }
  /** Output the string specified into console as a line of `debug`. Can be used for debugging applications. */
  static debug(...x: any[]) { console.debug(Logger.fo(colors.green('debug')) + x.flatMap(obj => obj.toString()).join(' ')); }
  /** Output the string specified into console as a line of `warn`. */
  static warn(...x: any[]) { console.warn(Logger.fo(colors.brightYellow('warn')) + colors.rgb24(x.flatMap(obj => obj.toString()).join(' '), 0xffa500)); }
  /** Output the string specified into console as a line of `error`. Should only be used for errors. */
  static error(...x: any[]) { console.error(Logger.fo(colors.red('error')) + colors.red(x.flatMap(obj => obj.toString()).join(' '))); }
}
