function trigonometria(B, b, A) {

    const C = 180 - A - B
    const angleInRadians = A * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = b * sinValue
    
    const angleInRadiansB = C * Math.PI / 180
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
    
trigonometria(44, 14.10, 56)