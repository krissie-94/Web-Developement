//New script
let featureSwitch = document.querySelectorAll('.feature-switcher');
featureSwitch.forEach(item => {
    item.addEventListener('click', function(){
        featureSwitch.forEach(ele => {
            ele.classList.remove('active-link');
        });
        this.classList.add('active-link');

        let identity = this.id;
        if(identity == 'healthcenterview'){
            document.querySelector('#regular-users').classList.add('display-none');
            document.querySelector('#hospital').classList.remove('display-none');
        }else if(identity == 'userview'){
            document.querySelector('#hospital').classList.add('display-none');
            document.querySelector('#regular-users').classList.remove('display-none');
        }

    });
});
function submitFunction(){
    document.getElementById('user-info-form').submit();
}
