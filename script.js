const btn = document.getElementById("btn");
let num = 0;
let checkedId;
document.getElementById("update").style.display = "none";


btn.addEventListener("click", () => {
    num += 1;
    let res = document.getElementById("input").value;
    let lists = document.getElementById("lists");

    let division = document.createElement("div");
    const idPrefix = "div-"
    division.setAttribute("id", idPrefix + num)



    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = num;
    checkbox.value = res;
    checkbox.onclick = () => myFunction(checkbox.id);

    let display = document.createElement("span");

    const classPrefix = "item-";
    display.setAttribute("class", classPrefix + num);
    display.innerText = res;

    let mark = document.createElement("button")
    mark.innerText = "Mark"
    mark.addEventListener("click", function () {
        if (checkbox.checked == true) {
            checkedId = checkbox.id;
            console.log(checkedId)
            let word = document.querySelector(`.${classPrefix}${checkedId}`)
            if (word) {

                if (word.style.textDecoration === "line-through") {
                    word.style.textDecoration = "none"
                    mark.innerText = "Mark"
                    document.getElementById(`edit-${checkedId}`).disabled = false;

                } else {
                    word.style.textDecoration = "line-through"
                    mark.innerText = "UnMark"
                    document.getElementById(`edit-${checkedId}`).disabled = true;
                }
            }
        }
    })

    let update = document.createElement("button");
    let preId = "edit-"
    update.setAttribute("id", preId + num)
    update.innerText = "edit";
    update.addEventListener("click", function () {
        if (checkbox.checked == true) {
            document.getElementById("update").style.display = "inline";
            checkedId = checkbox.id;
            let val = document.querySelector(`.item-${checkedId}`).innerText
            console.log(val)
            document.getElementById("input").value = val;
            document.getElementById("btn").style.display = "none";
        }
    });

    let del = document.createElement("button")
    del.innerText = "delete";
    del.addEventListener("click", function () {
        checkedId = checkbox.id;
        if (checkbox.checked == true) {
            console.log(`${checkedId}`)
            document.getElementById(`${idPrefix}${checkedId}`).style.display = "none"
        }
    })

    division.append(checkbox, display, mark, update, del);
    lists.appendChild(division);
    console.log(lists)
    document.getElementById("input").value = "";
});

// Add event listener for the "update" button outside the "edit" button listener
document.getElementById("update").addEventListener("click", () => {
    if (checkedId) {
        let data = document.getElementById("input").value;
        const classPrefix = "item-";
        let foo = document.querySelector(`.${classPrefix}${checkedId}`);
        if (foo) {
            foo.innerText = data;
        }

        console.log("mm", checkedId)
        document.getElementById("input").value = "";
        document.getElementById("update").style.display = "none";
        document.getElementById("btn").style.display = "inline";
        document.getElementById(`${checkedId}`).checked = false

    }
});

function myFunction(num) {
    console.log("Execute", num);
}


