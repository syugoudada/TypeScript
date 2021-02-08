export default function notExistSample(): void {
  const name = 'niziu'
  console.log('notExist sample 1:', typeof name, name)

  if (name) {
    console.log('notExist sample 3:', '吾輩は猫である。名前は' + name)
  } else {
    console.log('notExist sample 3:', '吾輩は猫である。名前はまだ' + name)
  }

  const age = 21
  console.log('notExist sample4', typeof age, age)

  if (age) {
    console.log('notExist sample4', '年齢は' + age)
  } else {
    console.log('notExist sample4', '年齢は秘密です')
  }
}
