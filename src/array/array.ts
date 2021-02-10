export function arraySample(): void {
  //シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  colors.push('green')
  console.log('Array Sample1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)

  console.log('Array Sample2:', even)

  const ids: (string | number)[] = ['abc', 123]
  ids.push('DEF')
  ids.push(456)

  console.log('Array Sample3:', ids)

  //配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number
    _someArray.push('abc') // string
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)

  console.log('Array Sample4:', someArray)

  //イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']

  // commands.push("aaa")
  // commands[0] = "aa"

  console.log('Array Sample4:', commands)
}
