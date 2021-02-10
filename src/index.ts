// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello Todahack')
// world.sayHello(root)

//基本の型定義3
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

//関数の型定義4
// import {logMessage} from './function/basic'
// import {isUserSignedIn,isUserSignedIn2,sumProdutsPrice} from './function/parameters'

// logMessage("Hey My name is asa")
// isUserSignedIn("ABC","NiziU")
// isUserSignedIn("AB")

// isUserSignedIn2("ABC","Oh My gar")
// const sum:number = sumProdutsPrice(1,2,3,4,5,6,7)
// console.log(sum)

//オブジェクトの型定義5
// import { objectSample } from './object/object'
// import { typeAliasSample } from './object/alias'

// objectSample()
// typeAliasSample()

//配列とタプルの型定義6
// import {arraySample} from './array/array'
// import {tupleSample} from './array/tuple'

// arraySample();
// tupleSample();

//ジェネリック型とポリモーフィズム
import { genericBasicSample } from './generics/basic'
import { genericsAdvancedSample } from './generics/advanced'

genericBasicSample()
genericsAdvancedSample()
