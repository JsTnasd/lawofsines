function trigonometria(A, a, b) {

    const angleInRadians = A * Math.PI / 180
    const sinValue = Math.sin(angleInRadians)
    const result = b * sinValue
    
    const finish = result / a
    const inverseSine = Math.asin(finish)
    const finished = inverseSine * 180 / Math.PI
    
    const C = 180 - A - finished

    console.log("A equivale = " + A)
    console.log("B equivale = " + finished)
    console.log("C equivale = " + C)

    const angleInRadians1 = C * Math.PI / 180
    const sinValue1 = Math.sin(angleInRadians1)
    const result1 = a * sinValue1

    const angleInRadians2 = A * Math.PI / 180
    const sinValue2 = Math.sin(angleInRadians2)

    console.log("a equivale = " + a)
    console.log("b equivale = " + b)
    console.log("c equivale = " + result1 / sinValue2)

}
    
trigonometria(75, 28, 7)