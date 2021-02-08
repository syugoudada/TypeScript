export function typeAliasSample(): void {
  //型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Hacker',
  }

  console.log('Object alias sample 1', japan)

  const america: Country = {
    capital: 'Washinton D.C',
    language: 'English',
    name: 'United States of American',
  }
  console.log('Object alias sample 1', america)

  //合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  //合併型... KnightまたはWizardの型を持ちますよ
  type Adventurer = Knight | Wizard

  //交差型.. KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  //Knight寄りの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  //Wizard寄りの冒険者
  const adventurer2: Adventurer = {
    hp: 80,
    mp: 200,
    weapon: '木の杖',
    magicSkill: 'ファイアーボール',
  }

  console.log('Object alias sample 5', adventurer1)
  console.log('Object alias sample 6', adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ホイミ',
  }

  console.log('Object alias sample 7', paladin)
}
