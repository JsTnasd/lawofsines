function trigonometria(A, a, B) {

    const C = 180 - A - B
    const angleInRadians = B * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = a * sinValue
    
    const angleInRadiansC = C * Math.PI / 180
    const sinValueA = Math.sin(angleInRadiansC)
    const resultB = a * sinValueA
    
    const angleInRadians2 = A * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + a)
    console.log("b equivale = " + result / sinValue2)
    console.log("c equivale = " + resultB / sinValue2)

    console.log("A equivale = " + A)
    console.log("B equivale = " + B)
    console.log("C equivale = " + C)

}
    
trigonometria(56, 16.83, 44)