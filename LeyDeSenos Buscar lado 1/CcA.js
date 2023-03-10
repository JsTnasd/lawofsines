function trigonometria(C, c, A) {

    const B = 180 - C - A
    const angleInRadians = A * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = c * sinValue
    
    const angleInRadiansB = B * Math.PI / 180
    const sinValueA = Math.sin(angleInRadiansB)
    const resultB = c * sinValueA
    
    const angleInRadians2 = C * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + `${result / sinValue2}`)
    console.log("b equivale = " + resultB / sinValue2)
    console.log("c equivale = " + c)

    console.log("A equivale = " + `${A}`)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)

}
    
trigonometria(80, 20, 56)