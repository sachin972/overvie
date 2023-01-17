function show(page){
    document.querySelectorAll('.box1').forEach(box=>{
        box.style.display = 'none';
    });
    // document.querySelector('')
    document.querySelector(`#${page}`).style.display = 'block';
}

function showDiv(page){
    document.querySelectorAll('.box').forEach(box=>{
        box.style.display = 'none';
    });
    document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded',()=>{
    showDiv('Home');
    
    document.querySelectorAll('.buttons').forEach(function(button){
        button.onclick = function(){
            var item = this.dataset.item;
            console.log(item);
            showDiv(item);
        };
    });

    var quer = document.querySelector('#projects');
    if(quer.style.display === 'block'){
        document.querySelectorAll('h2').forEach(function(button){
            button.onclick = function(){
                var item = this.dataset.value;
                console.log(item);
                show(item);
            };
        });
    }

});