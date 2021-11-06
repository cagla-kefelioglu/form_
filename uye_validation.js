const form=document.getElementById('form_');
const ad=document.getElementById('ad');
const soyad=document.getElementById('soyad');
const tc=document.getElementById('tc');
const email=document.getElementById('email');
const dgmtarih=document.getElementById('dgmtarih');
// const dgmyer=document.getElementById('dgmyer');
const file=document.getElementById('file');
const mesaj=document.getElementById('mesaj');
const renk=document.getElementById('renk');
const sifre=document.getElementById('sifre');
const sifretekrari=document.getElementById('sifretekrari');


form.addEventListener('submit', function (e){
    e.preventDefault();
//   submit yapınca formu yenilemesini önler.

    chekckInputs();
});

const chekckInputs = () =>{
    //ad üzerinden valueye ulaşırız ve girilen değeri adValue değişkenine atarız.
    //trim fonk. değer girerken oluşan boşlukları siler.

    const adValue = ad.value.trim();
    const soyadValue=soyad.value.trim();
    const tcValue=tc.value.trim();
    const emailValue=email.value.trim();
    const dgmtarihValue=dgmtarih.value.trim()
    // const dgmyerValue=dgmyer.value.trim();
    const fileValue=file.value.trim();
    const mesajValue=mesaj.value.trim();
    const renkValue=renk.value.trim();
    const sifreValue=sifre.value.trim();
    const sifretekrariValue=sifretekrari.value.trim();


    if (adValue=== '') {
      setErrorFor(ad,'Bu alanı doldurunuz');
    }
    else{
      setSuccesFor(ad);
    }

    if (soyadValue=== '') {
        setErrorFor(soyad,'Bu alanı doldurunuz');
    }
    else{
        setSuccesFor(soyad);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email')
    }
    else{
        setSuccesFor(email)
    }


    if(sifreValue === ''){
        setErrorFor(sifre, 'Password cannot be blank')
    }else if(sifreValue !== sifretekrariValue){
        setErrorFor(sifre, 'Passwords does not match')
    }else{
        setSuccesFor(sifre);
    }

    if(sifretekrariValue ===''){
        setErrorFor(sifretekrari, 'Password cannot be blank')
    }else if(sifreValue !== sifretekrariValue){
        setErrorFor(sifretekrari, 'Passwords does not match')
    }else{
        setSuccesFor(sifretekrari);
    }


}
//parent element kapasayanıdır.
const setErrorFor = (input,message) =>{
    const formControl = input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;
}

const setSuccesFor = (input) =>{
    const formControl = input.parentElement;

    formControl.className='form-contol succes';

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}