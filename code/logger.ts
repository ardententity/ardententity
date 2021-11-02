import * as colors from 'https://deno.land/std@0.113.0/fmt/colors.ts';

/**
 * The Logger script. Made for Deno specifically.
 */
export default class Logger {
  protected static fo = (x: string, fs: string) => colors.gray(`[${new Date().toISOString()}] `) + x + colors.gray(' > ') + fs;

  /**
   * Output the string specified into console.
   * @param strings The strings to output. Joins with a space ` `.
   */
  static out(...strings: string[]): void    { console.log(Logger.fo(colors.blue('out'), strings.join(' '))); }

  /**
   * Output the string specified into console as a line of `info`.
   * @param strings The strings to output. Joins with a space ` `.
   */
  static info(...strings: string[]): void   { console.info(Logger.fo(colors.cyan('info'), strings.join(' '))); }

  /**
   * Output the string specified into console as a line of `debug`. Can be used for debugging applications.
   * @param strings The strings to output. Joins with a space ` `.
   */
  static debug(...strings: string[]): void  { console.debug(Logger.fo(colors.green('debug'), strings.join(' '))); }

  /**
   * Output the string specified into console as a line of `warn`.
   * @param strings The strings to output. Joins with a space ` `.
   */
  static warn(...strings: string[]): void   { console.warn(Logger.fo(colors.brightYellow('warn'), colors.yellow(strings.join(' ')))); }

  /**
   * Output the string specified into console as a line of `error`. Should only be used for errors.
   * @param strings The strings to output. Joins with a space ` `.
   */
  static error(...strings: string[]): void  { console.error(Logger.fo(colors.red('error'), colors.red(strings.join(' ')))); }
}
