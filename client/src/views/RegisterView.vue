<script setup>
import { ref, watch } from "vue";

const email = ref("");
const password = ref("");

const valueChanged = watch(email,password) => {
    
}
</script>

<style scoped>
.register-view-main-container{
    display:flex;
    place-items: center;
    justify-content:center;
    padding:2vh 3vw;
}
.register-view-mini-container{
    width:45%;
}
.register-view-title{
    text-align:center;
    font-size: 30px;
}
.register-view-form{
    margin:6vh 0;
}
.register-view-field input{
    outline: none;
    font-size: 20px;
    width:100%;
    border:0;
    border-bottom:3px solid hsl(0, 0%, 0%);
}
.submit{
    width:100%;
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    padding:10px 20px;
    font-weight:900;
    font-size:22px;
}
.submit:hover{
    transform: scaleX(0.96);
    transition: all .98s ease-in-out;
}
@media screen and (max-width:750px) {
    .register-view-mini-container{
        width:75%;
    }
}
</style>

<template>
    <div class="register-view-main-container">
        <div class="register-view-mini-container">
            <h2 class="register-view-title">Register</h2>
            <form class="register-view-form">
                <div class="register-view-field">
                    <!-- <label for="email">Email:</label> -->
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        v-model="email" 
                    />
                </div>
                <br>
                <br>
                <br>
                <div class="register-view-field">
                    <!-- <label for="password">Password:</label> -->
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        v-model="password" 
                    />
                </div>
                <br>
                <br><br><br><br>
                <button type="submit" class="submit">Register</button>
            </form>
        </div>
    </div>
</template>