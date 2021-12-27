
const sayMyAge = (age) => {
    age()
}

sayMyAge(
    () => {
        console.log("Callback!")
    }
)


