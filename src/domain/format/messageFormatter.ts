function okMessage(From: string, Message: string): string {
  return `[\x1b[36m${new Date().toLocaleTimeString()}\x1b[0m][\x1b[33m${From}\x1b[0m] \x1b[32m\t${Message}\x1b[0m`;
}
function errMessage(From: string, Message: string): string {
  return `\n\x1b[31m[ERROR][ERROR][ERROR][ERROR][ERROR][ERROR][ERROR]\x1b[0m\n[\x1b[36m${new Date().toLocaleTimeString()}\x1b[0m][\x1b[31m\x1b[1m${From}\x1b[0m] ${Message}\x1b[0m\n\x1b[31m[ERROR][ERROR][ERROR][ERROR][ERROR][ERROR][ERROR]\x1b[0m\n`;
}

export { okMessage, errMessage };
