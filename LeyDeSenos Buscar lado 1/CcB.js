function trigonometria(C, c, B) {

    const A = 180 - B - C
    const angleInRadians = B * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = c * sinValue

    const angleInRadiansA = A * Math.PI / 180
    const sinValueA = Math.sin(angleInRadiansA)
    const resultA = c * sinValueA

    const angleInRadians2 = C * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + `${resultA / sinValue2}`)
    console.log("b equivale = " + result / sinValue2)
    console.log("c equivale = " + c)

    console.log("A equivale = " + `${A}`)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)
    
}

trigonometria(56, 14, 72)