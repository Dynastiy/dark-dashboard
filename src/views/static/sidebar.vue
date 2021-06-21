<template>
    <div class="sidenav" id="aside">
        <ul class="list-unstyled">
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
            <li class="sharedown">   
                <a>
                    <span id="share" class="sharebtn">Resources</span>
                    <div id="mySharedown" class="sharedown-content">
                        <a href="#">Self</a>
                        <p>User</p><input type="text" name="user-name" placeholder="Share to">
                        <a href="#">Community</a>
                    </div>    
                </a> 
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
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        const shareVis = document.getElementById("share")
        shareVis.onclick =  function(){
        document.getElementById("mySharedown").classList.toggle("show");
            }

            window.onclick = function(event) {
                if (!event.target.matches('.sharebtn')) {

                    var sharedowns = document.getElementsByClassName("sharedown-content");
                    var i;
                    for (i = 0; i < sharedowns.length; i++) {
                        var openSharedown = sharedowns[i];
                        if (openSharedown.classList.contains('show')) {
                            openSharedown.classList.remove('show');
                        }
                    }
                }
            }

            document.getElementById("mySharedown").addEventListener('click',function(event){
                event.stopPropagation();
            });
                }
}
</script>

<style scoped>

</style>