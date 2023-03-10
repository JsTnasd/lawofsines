function trigonometria(C, c, b) {

    const angleInRadians = C * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = b * sinValue
    
    const finish = result / c
    const inverseSine = Math.asin(finish)
    const finished = inverseSine * 180 / Math.PI
    
    const A = 180 - C - finished

    console.log("A equivale = " + A)
    console.log("B equivale = " + finished)
    console.log("C equivale = " + C)

    const angleInRadians1 = A * Math.PI / 180
    const sinValue1 = Math.sin(angleInRadians1)
    const result1 = c * sinValue1

    const angleInRadians2 = C * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + result1 / sinValue2)
    console.log("b equivale = " + b)
    console.log("c equivale = " + c)

}
    
trigonometria(50, 60, 70)