//variable ตัวแปร 3 วิธี
var deta1 = 10  //เป็น Global  ค่าเป็นตัวแปรสามารถเปลี่ยนได้     //เลี่ยงได้เลี่ยงเป็นทางเลือกสุดท้าย 
let deta2 = 20  //เป็น Local   ค่าเป็นตัวแปรสามารถเปลี่ยนได้ 
const deta3 = 30 //เป็น Local   ค่าเป็นตัวแปรไม่สามารถเปลี่ยนได้ 

//detal2 = 200 error
{
    var info1 = 11
    let info2 = 22
    const info3 =33
    deta2 = 200
     {
        var value = 101
        let value2 = 102
        const value3 = 103

        value2 = 'hello'
        // value3 = 464554 error
     } 
     value2 = 88888
     value3 = 99999

}

