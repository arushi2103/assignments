function showName() {
   var name=prompt("enter your name ");
   document.getElementById('uname').innerHTML = name;
}

function calculateNum(num_1, num_2, calc_type) {
    /** Calculate two numbers as per calulation type, and show result in the text box */
    var result;
    switch (calc_type) {
        case 'add':
            result = Number(num_1) + Number(num_2);
         break;
         case 'minus':
            result = Number(num_1) - Number(num_2);
        case 'mul':
            result = Number(num_1) * Number(num_2);
        case 'div':
            result = Number(num_1) / Number(num_2);
        case 'mod':
            result = Number(num_1) % Number(num_2);
    }

    document.getElementById('output_box').value = result;
}

function changeTitle() {
    var all_titles = document.getElementsByClassName('title-text');
    for (var val of all_titles){
    val.innerHTML = "Successfully Changed titles";
    }
 }

function printPage() {
    var choice = confirm("Do you want to print?");
    if (choice) {
        window.print();
    }
}

function greetUser() {
    alert ("Hello and Welcome to our website");
}
