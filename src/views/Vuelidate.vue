<template>
    <div class="mt-5">
        <h1>Vuelidate</h1>
        <form @submit.prevent="submit">
            <div class="my-3">
                <input type="email" placeholder="Ingrese un email" 
                class="form-control" 
                v-model.lazy="$v.email.$model"
                :class="{'is-invalid' : $v.email.$error}">
                <small class="text-danger" v-if="!$v.email.email">Este email es inválido</small>
                <small class="text-danger" v-if="!$v.email.required">El campo es requerido</small>
            </div>
            <div class="my-3">
                <input type="password" placeholder="Ingrese contraseña" 
                class="form-control mb-3" 
                v-model.lazy="$v.password.$model"
                :class="{'is-invalid' : $v.password.$error}">
                <input type="password" placeholder="Confirme contraseña" 
                class="form-control" 
                v-model.lazy="$v.repeatPassword.$model"
                :class="{'is-invalid' : $v.repeatPassword.$error}">
                <small class="text-danger" v-if="!$v.password.minLength">Mínimo 6 caracteres</small>
                <small class="text-danger" v-if="!$v.password.required">El campo es requerido</small>
                <small class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Las password no coinciden</small>
            </div>
            <div class="my-3">
                <b-button type="submit" variant="primary" :disabled="$v.$invalid">Enviar</b-button>
            </div>
        </form>
        <!-- <p>{{$v.email}}</p> -->
        <p>{{$v.$invalid}}</p>
    </div>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
export default {
    name: 'Vuelidate',
    data() {
        return {
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: {required, email},
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            required,
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                //this.submitStatus = 'ERROR'
                console.log('Se generó un error')
            } else {
                console.log('Todos los campos son correctos')
                console.log(`Enviando ${this.$v.email.$model} - ${this.$v.password.$model}`)
            }
        }
    }
}
</script>

