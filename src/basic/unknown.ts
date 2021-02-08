export default function unknowSample(): void {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber == 'foo'
  console.log('unknown sample2', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample3', typeof sum, sum)
  }
}
