function getScore(score) {
    console.log(`-------------------------------------`)
    console.log(`Nota: ${score}`)


    let A = (score>=90 && score<=100)
    let B = (score>=80 && score<=89)
    let C = (score>=70 && score<=79)
    let D = (score>=60 && score<=69)
    let F = (score<60 && score>=0)

    let scoreFinal

    if (A) {
        scoreFinal = "Conceito: A"
    } else if (B) {
        scoreFinal = "Conceito: B"
    } else if (C) {
        scoreFinal = "Conceito: C"
    } else if (D) {
        scoreFinal = "Conceito: D"
    } else if (F) {
        scoreFinal = "Conceito: F"
    } else if (score>100) {
        scoreFinal = "Erro! Digite um valor válido."
    } else if (score<0) {
        scoreFinal = "Erro! Digite um valor válido."
    }

    console.log(`-------------------------------------`)
    console.log(`Nota: ${scoreFinal}`)
    console.log(`-------------------------------------`)
    return score
}

getScore(88)
