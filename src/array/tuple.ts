export function tupleSample(): void {
  //一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400,"Bad Request","aa"]
  console.log('Array TupleSample1:', response)

  //可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Koyuki', 'Asuka']
  girlfriends.push('Misa')
  console.log('Array TupleSample1:', girlfriends)
}
