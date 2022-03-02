let myKeys = document.querySelectorAll(".key");


// myKeys[0].addEventListener('click', function(){
//     alert("Boutton C is clicked");
// });


for (let x =0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function(){
        // alert("button " + myKeys[x].innerHTML + " is clicked");

        // let snd = new Audio('doremi/do.mp3');
        // snd.play();

        // playSnd('c');

        playSnd(myKeys[x].innerHTML);

    })
};

    document.addEventListener('keydown', function(btn){
        // console.log(btn.key);
        playSnd(btn.key);

        let presse_key = btn.key;

        for (let x =0; x < myKeys.length; x++) {
            myKeys[x].classList.remove('activated'); 
        }

        for (let x =0; x < myKeys.length; x++) {
            if (presse_key == myKeys[x].innerHTML) {
                myKeys[x].classList.add('activated');

            }
        }


    })





    function playSnd(key) {

        switch(key) {
            case 'C':
                var snd = new Audio('doremi/do.mp3');
                snd.play();
                break;
            case 'D':
                var snd = new Audio('doremi/re.mp3');
                snd.play();
                break;
            case 'E':
                var snd = new Audio('doremi/mi.mp3');
                snd.play();
                break;
            case 'F':
                var snd = new Audio('doremi/fa.mp3');
                snd.play();
                break;
            case 'G':
                var snd = new Audio('doremi/sol.mp3');
                snd.play();
                break;
            case 'A':
                var snd = new Audio('doremi/la.mp3');
                snd.play();
                break;
            case 'B':
                var snd = new Audio('doremi/ti.mp3');
                snd.play();
                break;
            case 'K':
                var snd = new Audio('doremi/doh.mp3');
                snd.play();
                break;

            default:
            console.log(key);
        }
    }




// myKeys[0].addEventListener('click', function(){
//     let snd = new Audio('doremi/do.mp3');
//     snd.play();
// })

// myKeys[1].addEventListener('click', function(){
//     let snd = new Audio('doremi/re.mp3');
//     snd.play();
// })

// myKeys[2].addEventListener('click', function(){
//     let snd = new Audio('doremi/mi.mp3');
//     snd.play();
// })

// myKeys[3].addEventListener('click', function(){
//     let snd = new Audio('doremi/fa.mp3');
//     snd.play();
// })

// myKeys[4].addEventListener('click', function(){
//     let snd = new Audio('doremi/sol.mp3');
//     snd.play();
// })

// myKeys[5].addEventListener('click', function(){
//     let snd = new Audio('doremi/la.mp3');
//     snd.play();
// })

// myKeys[6].addEventListener('click', function(){
//     let snd = new Audio('doremi/ti.mp3');
//     snd.play();
// })

// myKeys[7].addEventListener('click', function(){
//     let snd = new Audio('doremi/doh.mp3');
//     snd.play();
// })

































