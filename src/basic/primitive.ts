export default function primitiveSample(): void {
  const name = 'MAYA'
  console.log('primitive sample 1:', typeof name, name)

  const age = 28
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = true
  console.log('primitive sample 1:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 1:', typeof isOver20, isOver20)
}
