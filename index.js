let menu = document.querySelector('.menu');
let menuBar = document.querySelector('.menubar');

menu.addEventListener('click', () => {
    console.log(menuBar);
    menuBar.classList.toggle('mobile');
});

const tabs = document.querySelector('.onetop');
const tabOne = document.querySelector('onetop h2');
const panel = document.querySelectorAll('.tab-contents');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "H2"){
        const targetPanel = document.querySelector(e.target.dataset.old );
        panel.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }
            else{
                panel.classList.remove('active');
            }
        })
    }
})


//page change
//var tablinks = document.getElementsByClassName('tab-links');
//var tabcontents = document.getElementsByClassName('tab-contents');

   // function opentab(tabname){
    //for(tablink of tablinks){
      //  tablink.classList.remove('active');
   // };
   // for(tabcontent of tabcontents){
    //    tabcontent.classList.remove('active-tab');
   // };
    //e.currentTarget.classList.add('active');
    //document.getElementById(tabname).classList.add('active-tab');
//};

