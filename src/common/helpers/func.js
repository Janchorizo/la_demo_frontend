/**
 * Returns an iterable ranging from start to end (end not
 * included). If the provided arguments are not valid, an
 * empty array is returned.
 */
export function* range(start, end=0, step=1) {
  if (start > end && step > 0) {
    return [];
  }
  if (step === 0) {
    return [];
  }

  const cond = start <= end ? d=>d<end : d=>d>end;
  for (let d=start; cond(d) === true; d+=step) {
    yield d;
  }
}
