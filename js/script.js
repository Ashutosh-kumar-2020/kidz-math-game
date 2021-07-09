
const num_1 = document.getElementById("num_1");
const num_2 = document.getElementById("num_2");

const check_btn = document.getElementById("check_btn");

const base_string = 50;

let n1 = Math.floor((Math.random() * base_string) + 17);
let n2 = Math.floor((Math.random() * base_string) + 21);

num_1.innerText = n1;
num_2.innerText = n2;


function JsGame()
{
    user_answer = document.getElementById("user_answer").value;

    let ans = parseInt(n1) + parseInt(n2);


    if(parseInt(user_answer) == parseInt(ans))
    {
        window.alert("Correct Answer, Well Done !");
        location.reload();
    }
    else
    {
        window.alert("Incorrect Answer, The Correct Answer is " + ans);
        location.reload();

    }
}





