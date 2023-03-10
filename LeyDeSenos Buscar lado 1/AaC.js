function trigonometria(A, a, C) {

    const B = 180 - A - C
    const angleInRadians = C * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = a * sinValue
    
    const angleInRadiansB = B * Math.PI / 180
    const sinValueA = Math.sin(angleInRadiansB)
    const resultB = a * sinValueA
    
    const angleInRadians2 = A * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)
    
    console.log("a equivale = " + a)
    console.log("b equivale = " + resultB / sinValue2)
    console.log("c equivale = " + result / sinValue2)

    console.log("A equivale = " + A)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)

}
    
trigonometria(58.3, 8.9, 80)