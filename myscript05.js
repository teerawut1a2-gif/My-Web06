//loop กับ Array และ Object 
let data1 = [10, 20, 30, 40, 50]

//การเข้าถึงทุกข้อมูลใน Array เพื่อเอาไปใช้งานใดๆ 
//วิธีที่1
for (let i = 0; i < data1.length; i++){
    console.log(data1[i] * 50)
}
console.log('1-----------------------------------------')
//--------
//วิธีที่2
data1.forEach((value)=> {
    console.log(value * 50)
})
console.log('2-----------------------------------------')
//วืธีทีี3
data1.map((value)=>{
    console.log(value * 100)
}
)
console.log('3-----------------------------------------')

// วิธีที่ 4
for (let value of data1) {
    console.log(value * 100)
}
console.log('4-----------------------------------------')
// วิธีที่ 5
for (let i in data1) {
    console.log(data1[i] * 100)
}
console.log('5-----------------------------------------')