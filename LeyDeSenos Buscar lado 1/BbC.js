function trigonometria(B, b, C) {

    const A = 180 - C - B
    const angleInRadians = C * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = b * sinValue
    
    const angleInRadiansB = A * Math.PI / 180
    const sinValueA = Math.sin(angleInRadiansB)
    const resultB = b * sinValueA
    
    const angleInRadians2 = B * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + result / sinValue2)
    console.log("b equivale = " + b)
    console.log("c equivale = " + resultB / sinValue2)

    console.log("A equivale = " + A)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)

}
    
trigonometria(69, 33.23, 47)