<template>
    <footer class="footer" id="contacts">
        <div class="footer-container container">
            <div class="footer__contacts">
                <h3 class="footer__contacts-title">For questions and suggestions</h3>
                <div class="footer__contacts-mail">
                    <img class="mail-img" src="@/assets/img/icon-email.svg" alt="mail">
                    <a href="mailto:email@shelter.com"><h4 class="mail-text">email@shelter.com</h4></a>
                </div>
                <div class="footer__contacts-phone">
                    <img class="mail-img" src="@/assets/img/icon-phone.svg" alt="tel">
                    <a href="tel:+79998887766"><h4 class="mail-text">+13 674 567 75 54</h4></a>
                </div>
            </div>    
            <div class="footer__locations">
                <h3 class="footer__locations-title">We are waiting for your visit</h3>
                <div class="footer__locations-mail">
                    <img class="mail-img" src="@/assets/img/icon-marker.svg" alt="maps">
                    <a target="_blank" href="https://www.google.ru/maps/place/1+Central+St,+Boston,+MA+02109,+%D0%A1%D0%A8%D0%90/@42.3585558,-71.056915,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370868bc2ce7b:0x82fa7db94f5fea9e!8m2!3d42.3585519!4d-71.0547263"><h4 class="mail-text">1 Central Street, Boston (entrance from the store)</h4></a>
                </div>
                <div class="footer__locations-phone">
                    <img class="mail-img" src="@/assets/img/icon-marker.svg" alt="maps">
                    <a target="_blank" href="https://www.google.ru/maps/place/%D0%9F%D0%B0%D1%80%D0%BA+%D0%AE%D0%B3/@51.4614345,-0.2478504,11z/data=!4m9!1m2!2m1!1s18+South+Park,+London!3m5!1s0x48760f79376fa0e3:0x202ac3af5c1ea4ec!8m2!3d51.4691953!4d-0.1941945!15sChUxOCBTb3V0aCBQYXJrLCBMb25kb26SAQRwYXJr"><h4 class="mail-text">18 South Park, London </h4></a>
                </div>
            </div>      
            <img width="300" height="310" src="@/assets/img/footer-puppy.png" alt="dog" class="footer__img"> 
        </div>
      </footer>
</template>
<script>
export default {
    name: "AppFooter",
}
</script>
<style>
    
</style>