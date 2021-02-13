interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

//型エイリアスで表現
type MaboDofu = {
  calories: number
  spaicyevel: number
}

type Rice = {
  calories: number
  gram: number
}

//交差型(union)
type MaboDon = MaboDofu & Rice

const maboDon: MaboDon = {
  calories: 1000,
  spaicyevel: 2,
  gram: 500,
}

//インターフェースの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  circle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  circle: 'weekly',
}

type BookType = {
  page: number
  title: string
}

interface HandBook extends BookType {
  theme: string
}

const cotrip: HandBook = {
  page: 120,
  title: 'るるぶ',
  theme: '旅行',
}

//impleentsを使ってclassに型を定義する
export class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublichYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です'
  }
}
