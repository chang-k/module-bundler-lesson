import _ from "lodash"
import "./style.css";
import justdoit from "./just-do-it.jpeg";

function Component() {
    const elem = document.createElement("div")
    const arr = ["Hello", "Webpack", "うい！！！"]
    elem.innerHTML = _.join(arr, " ")
    return elem
}

document.body.appendChild(Component())
document.body.classList.add('back')

const img = new Image()
img.src = justdoit
document.body.appendChild(img)
