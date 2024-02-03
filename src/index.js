import _ from "lodash"

function Component() {
    const elem = document.createElement("div")
    const arr = ["Hello", "Webpack", "うい！！！"]
    elem.innerHTML = _.join(arr, " ")
    return elem
}

document.body.appendChild(Component())
