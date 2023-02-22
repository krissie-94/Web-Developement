let mynextpage = document.getElementById("next-id");
mynextpage.addEventListener('click', function(){
    let viewerContainer = document.getElementById('main-src');
    // console.log(viewerContainer);
    let myPageDetails = /*html*/`<div class="row" id="main-src">
    <div class= "col-12  col-sm-12 col-md-12 col-lg-12" id="user-Image">
    </div>
     <div class="col-12  col-sm-12 col-md-12 col-lg-12">
            <p class="text-muted text-center " id="message-id">
                This is EPAD youu have successfully logged in. Click Next to see more Features 
            </p>
    </div>
</div>`

    viewerContainer.innerHTML = myPageDetails; 
})

let myskip = document.getElementById("skip-id");
myskip.addEventListener('click', function(){
    alert("SKIP");
})
