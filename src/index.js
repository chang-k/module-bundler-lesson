function Component() {
    const elem = document.createElement("div")
    const arr = ["Hello", "Webpack"]
    elem.innerHTML = _.join(arr, ";;")
    return elem
}

document.body.appendChild(Component())
