export function genericBasicSample(): void {
  //ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    array.forEach((data) => {
      result += data
    })
    return result
  }

  console.log('Generics basic sample 1:', stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    array.forEach((data) => {
      result += data
    })
    return result
  }

  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000))

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GenericReduce<T> = {
    (array: Array<T>, initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    array.forEach((data) => {
      result += data
    })
    return result
  }

  console.log('Generics basic sample 3:', genericStringReduce(['MAKE', 'TYPESCRIPT', 'Program'], ''))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    array.forEach((data) => {
      result += data
    })
    return result
  }

  console.log('Generics basic sample 4:', numberReduce([-100, -200, -300], 1000))

  //いろいろなジェネリック型の定義方法
  //完全な呼び出しシグネチャ(ここのシグネチャにジェネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  //呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
