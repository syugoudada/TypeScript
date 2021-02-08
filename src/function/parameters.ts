//オプションパラメータを持つ関数
export const isUserSignedIn = (userid: string, userName?: string): boolean => {
  if (userid === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters sample 2: User is not signed in! Username is')
    return false
  }
}

export const isUserSignedIn2 = (userid: string, userName = 'No Name'): boolean => {
  if (userid === 'ABC') {
    console.log('Function parameters sample 3: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters sample 4: User is not signed in! Username is')
    return false
  }
}

//レストパラメーターを持つ関数
export const sumProdutsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
