<template>
    <!-- <div class="main" id="main"> -->
    <div>
        <div class="nav d-flex justify-content-between align-content-center px-3 py-3">
             <i class="fa fa-bars text-dark" onclick="toggleBtn()" aria-hidden=""></i> 
             <i class="fa fa-toggle-on" @click="darkThemeSwitch" aria-hidden="true"></i>
        </div>

        <!-- Display for Mobile Screens  -->
        <div class="mobile-nav justify-content-between px-3 py-3" > 
            <i class="fa fa-bars text-dark" aria-hidden="true" id="tog"></i>
            <i class="fa fa-toggle-on" @click="darkThemeSwitch" aria-hidden="true"></i>
        </div>
        <div class="mobile-sidenav" id="sidee">
        <ul class="list-unstyled">
            <div class="text-right container">
                <i class="fa fa-arrow-left mb-3 fa-1x mr-3" aria-hidden="true"></i>
            </div>
            <li> 
                <router-link to="/">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    Dashboard 
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/transactions">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    Transactions  
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/users">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    Users 
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/profile">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    Profile 
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/accounts">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    Accounts 
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/signup">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    SignUp 
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/login">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    Login 
                    </span> 
                </router-link>
            </li>
            <li> 
                <router-link to="/logout">
                    <i class="fa fa-home mr-2" aria-hidden="true"></i>
                    <span>
                    LogOut 
                    </span> 
                </router-link>
            </li>
        </ul>
    </div>
    </div>

    
</template>

<script>

    import themeChanger from '../../../public/static/js/theme'  

export default {
    name: "navTop",
    data(){
        return{
            themeChanger: null,
        }
    },
    methods:{
        darkThemeSwitch() {
            this.themeChanger._darkThemeSwitch();
        }
    },
     mounted() {
        this.themeChanger = new themeChanger();
        const toggller = document.getElementById("tog");
        const sideer = document.getElementById('sidee');

        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "sidee"){
            sideer.classList.remove('active');
            // toggller.style.opacity = '1'
          }
        }

        toggller.onclick = function(){
        sideer.classList.toggle('active');
        // toggller.style.opacity = '0'
        }
     }
}
</script>

<style scoped>

</style>