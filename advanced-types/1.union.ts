function logId(id: string | number | boolean) {
  // narrowing(сужение типов)

  // runtime check
  if (typeof id === 'string') {
    return id.toLowerCase()
  }

  if (typeof id === 'number') {
    return id + 1
  }

  return id
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObj(obj: { a: number } | { b: string }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}
