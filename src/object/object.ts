export function objectSample(): void {
  // const Hero : object = {
  //   name: 'Yuma',
  //   age: 15
  // }

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United states of America',
  }

  console.log('Object object sample 2:', country)

  //オプションとreadOnly
  const Asa: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 21,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  Asa.gender = 'male'
  Asa.lastName = 'Zenitu'

  console.log('Object object sample 3:', Asa)

  //インデックスシグネチャ
  const capitals: {
    [contryName: string]: string
  } = {
    Japan: '東京',
    Korean: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
