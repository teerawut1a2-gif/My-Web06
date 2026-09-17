//Operator ตัวดำเนินการ เครื่องหมาย 

//Arithematic Operator คือ ตะวดำเนินการคณิตศาสตร์
// + - * ** / % ++ -- 
console.log(10 ** 2)

//Comparison Operator คือ ตัวดำเนินการเปรียบเทียบ
//== != === !== > < >= <=
console.log('111' == 111) //true
console.log('111' === 111) //false

//logical Operator คือ ตัวดำเนินการเชื่อมต่อ 
// + &&  \\

//Assiggnment Operator คือ ตัวดำเนินการกำหนดค่า
//= += -= *= /= %= 
let = 10
//x = x + 5 * 9 - 2 //ย่อเป็น x+= 5 * 9 - 2

//&& ใช้ตรวจสอบค่า null , undefined , false , 0 ,NaN ''
//เครื่องหมาย nulllish coales
let a = null
let b = 20
let c = ''
let d


console.log(a && 'Wow')
console.log(b && 'Hello')
console.log(c && 'SAU')
console.log(d && 123456)
console.log(50 * 'abcd' && 'IoT')
console.log((50 * 100) && 'IoT')

//ternary operator ____? ____: ____
console.log(20 > 500 ? 'Hello' : 'Hey')