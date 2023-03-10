function trigonometria(B, b, a) {

    const angleInRadians = B * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = a * sinValue
    
    const finish = result / b
    const inverseSine = Math.asin(finish)
    const finished = inverseSine * 180 / Math.PI
    
    const C = 180 - B - finished

    console.log("A equivale = " + finished)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)

    const angleInRadians1 = C * Math.PI / 180
    const sinValue1 = Math.sin(angleInRadians1)
    const result1 = b * sinValue1

    const angleInRadians2 = B * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + a)
    console.log("b equivale = " + b)
    console.log("c equivale = " + result1 / sinValue2)

}
    
trigonometria(20, 30, 10)