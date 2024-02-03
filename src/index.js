import _ from "lodash"
// import { square, NAME as NAME_OF_CHANG } from "./utilities";
import Tiger from "./utilities";

// console.log("じじょう", square(4))
// console.log("なーめ", NAME_OF_CHANG)
console.log("ほんとはLion", Tiger.say())

function Component() {
    const elem = document.createElement("div")
    const arr = ["Hello", "Webpack", "うい！！！"]
    elem.innerHTML = _.join(arr, " ")
    return elem
}

document.body.appendChild(Component())
