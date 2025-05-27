console.log('hello');
var number = 1;
var string = 'string';
var arr = ['frog','cat','dog'];

// if (number == 10)
// {
//     console.log('yes');
// }
// else
// {
//     console.log('no');
// }

// for (var i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }

function printAnimals()
{
    for (var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked!');
});

printAnimals();
// document.getElementById('box').innerHTML = string;