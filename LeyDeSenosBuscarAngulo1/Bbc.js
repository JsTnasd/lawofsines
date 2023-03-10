function trigonometria(B, b, c) {

    const angleInRadians = B * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = c * sinValue
    
    const finish = result / b
    const inverseSine = Math.asin(finish)
    const finished = inverseSine * 180 / Math.PI
    
    const A = 180 - B - finished

    console.log("A equivale = " + A)
    console.log("B equivale = " + B)
    console.log("C equivale = " + finished)

    const angleInRadians1 = A * Math.PI / 180
    const sinValue1 = Math.sin(angleInRadians1)
    const result1 = b * sinValue1

    const angleInRadians2 = B * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + result1 / sinValue2)
    console.log("b equivale = " + b)
    console.log("c equivale = " + c)

}
    
trigonometria(20, 30, 10)