//function มี 4 รูปเภท (จะไม่ทำงานกับ call function)
//no parameter no return 
function myFuncA() {
    console.log('AAA')
    console.log('BBB')
}

//have parameter no return
function myFuncB(a, b) {  //parameter ตัวเปรแบบ local 
    console.log(a + b)
    
}
//no parameter has return 
function myFuncC() {
    console.log('wow wow woo')
    return 'Hi....'
}
//have parameter has return
function myFuncD(Fullname, age) {
    return `Hi... ${Fullname} is ${age} years old`;
}

//-----------------------------
myFuncA()
myFuncB(10, 20) //ข้อมูลที่ส่งให้ parameter เรียก argument

//call function แบบมี return ควรเขียนโค้ดที่มีการ return ไปใช้งาน
console.log(myFuncC())
let data = myFuncD('paduk', 20)  //ข้อมูลที่ส่งให้ parameter เรียก argument
console.log(data)