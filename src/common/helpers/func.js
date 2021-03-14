/** range
 * Returns an iterable ranging from start to end (end not
 * included). If the provided arguments are not valid, an
 * empty array is returned.
 * If only one positional argument is passed, it is interpreted as
 * the end of the range, else [start, end, step] are set.
 * @return {Iterable}
 */
export function* range(...args) {
  if (![1, 2, 3].includes(args.length)) {
    return [];
  }

  const [start, end] = args.length == 1 ? [0, args[0]] : args;
  const step = args.length < 3 ? 1 : args[2];

  if (start < end && step < 0) {
    return [];
  }
  if (start > end && step > 0) {
    return [];
  }
  if (step === 0) {
    return [];
  }

  const cond = start <= end ? (d)=>d<end : (d)=>d>end;
  for (let d=start; cond(d) === true; d+=step) {
    yield d;
  }
}
