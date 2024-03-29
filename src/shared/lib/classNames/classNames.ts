type Mods = Record<string, string|boolean>

function classNames(cls: string, mods: Mods = {}, additional: string[] = []){
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
    .filter(([className,value]) => Boolean(value))
    .map(([className]) => className)
  ].join(' ');
}

export default classNames