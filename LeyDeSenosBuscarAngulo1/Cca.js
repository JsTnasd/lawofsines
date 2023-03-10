function trigonometria(C, c, a) {

    const angleInRadians = C * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = a * sinValue
    
    const finish = result / c
    const inverseSine = Math.asin(finish)
    const finished = inverseSine * 180 / Math.PI
    
    const B = 180 - C - finished

    console.log("A equivale = " + finished)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)

    const angleInRadians1 = B * Math.PI / 180
    const sinValue1 = Math.sin(angleInRadians1)
    const result1 = c * sinValue1

    const angleInRadians2 = C * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + a)
    console.log("b equivale = " + result1 / sinValue2)
    console.log("c equivale = " + c)

}
    
trigonometria(20, 30, 10)