<script setup lang="ts">
import { currentUser } from '@/models/session'
import { postUser, type User } from '@/models/user'
import router from '@/router';
import { ref } from 'vue';

const invalidInput = ref([false,""])


async function makeUser(){
    let values: string[] | number[] = []
    const inputElements = document.getElementsByClassName("input");

    for(let element of inputElements){
         (values as string[]).push((element as HTMLInputElement).value)
    }

    let result = checkInputs(values)
    if(result[0]){
        invalidInput.value = result
    }else{
        const birth_Date = new Date(values[6])
        invalidInput.value[0] = false
        const newUser: User = {
            first_Name: (values[0]) as string,
            last_Name: values[1] as string,
            gender: values[2] as string,
            age: values[3] as number,
            email: values[4] as string,
            phone: values[5] as string,
            birth_Date: birth_Date,
            friends_Ids: []
        }
        const response = await postUser(newUser)
        currentUser.value = response
        router.back()
    }
}

function checkInputs(values: string[] | number[]): [boolean, string]{
    if(values.length != 7){
        return [true, "Missing values"]
    }

    for(let value of values){
        if((value as string).length == 0){
            return [true, "Missing inputs"]
        }
    }

    if(/\d/.test(values[0] as string) ||
        /\d/.test(values[1] as string) ||
        /\d/.test(values[2] as string)){
        return [true, "Numbers found in character only fields"]
    }

    if(!(/^\d+$/.test(values[3] as string))){
        return [true, "age can only contain digets"]
    }

    if(!(/^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/
        .test(values[5] as string))){

        return [true, "Phone number is not in a valid format (123) 456-7890)"]
    }

    if(!((values[4] as string).includes("@"))){
        return [true, "Email missing domain"]
    }


    const dataComponents = (values[6] as string).split("/")
    if(dataComponents[0] == (values[6] as string) ||
        dataComponents.length != 3 ||
        Number(dataComponents[0]) > 12 ||
        Number(dataComponents[1]) > 31 ||
        Number(dataComponents[2]) > 2025){
        return [true, "Invalid date"]
    }



    return [false,"good inputs"]
}
</script>

<template>
    <div class="notification is-Danger m-5" v-if="invalidInput[0]">
        <h1 class="title is-4 has-text-centered my-3">Plase enter valid data</h1>
        <h1 class="subtitle is-4 has-text-centered my-3">{{invalidInput[1]}}</h1>
        <button class="delete" @click="invalidInput[0] = false"></button>
    </div>
    <h1 class="title is-2 has-text-centered my-3">Sign Up</h1>
<div class="form py-5">
    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <div class="box mr-0 has-background-grey-darker">
                <div class="field">
                    <div class="container is-flex">
                        <div class="field pr-5">
                            <label class="label">First Name</label>
                            <div class="control is-flex">
                                <input class="input" type="text" placeholder="John" id="firstName" />
                            </div>
                        </div>
                        <div class="field px-5">
                            <label class="label">Last Name</label>
                            <div class="control is-flex">
                                <input class="input" type="text" placeholder="Smith" id="lastName"/>
                            </div>
                        </div>
                        <div class="field px-5">
                            <label class="label">Gender</label>
                            <div class="control is-flex">
                                <input class="input" type="text" placeholder="Male" id="gender"/>
                            </div>
                        </div>
                        <div class="field px-5">
                            <label class="label">Age</label>
                            <div class="control is-flex">
                                <input class="input" type="number" placeholder="25" id="age" min="0"/>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control is-flex">
                            <input class="input" type="text" placeholder="name@domain.com" id="email" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Phone Number</label>
                        <div class="control is-flex">
                            <input class="input" type="text" placeholder="(123) 456-7890" id="phone" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="labrl">Birthdate</label>
                        <div class=" constrol is-flex">
                            <input class="input" type="text" placeholder="01/01/2000" id="birthdate" />
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-primary" @click="makeUser()">Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
