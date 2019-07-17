<template>
    <div class="mt-5">
        <h1>Form</h1>
        <form>
            <b-row>
                <b-col cols="12" md="3" class="mb-3">                    
                    <b-form-input type="text" v-model="texto" :state="comprobar"/>
                    <small>Mínimo 3 caracteres</small>
                    <p>{{texto}}</p>
                </b-col>
                <b-col cols="12" md="3" class="mb-3">  
                    <b-form-select v-model="select" :options="options"/>
                    <small v-if="select">Seleccionado: {{select}}</small>
                </b-col>
                <b-col cols="12" md="3" class="mb-3">  
                    <b-form-radio-group v-model="radio" :options="optionsRadio"/>
                    <small v-if="radio">Seleccionado: {{radio}}</small>
                </b-col>
                <b-col cols="12" md="3" class="mb-3">  
                    <b-checkbox-group v-model="checkbox" :options="optionsRadio"/>
                    <small v-if="checkbox">Seleccionado: {{checkbox}}</small>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name: 'form',
    data() {
        return {
            texto: '',
            select: null,
            radio: null,
            checkbox: [],
            options: [
                { value: null, text: 'Selecciona una opción' },
                { value: 'a', text: 'Opción A' },
                { value: 'b', text: 'Opción B' },
                { value: {'c': 'objeto'}, text: 'Opción C con objeto' },
                { value: 'd', text: 'Esta es la D pero está desabilitada :C', disabled: true }
            ],
            optionsRadio: [
                { value: 'a', text: 'Opción A' },
                { value: 'b', text: 'Opción B' },
                { value: {'c': 'objeto'}, text: 'Opción C con objeto' },
                { value: 'd', text: 'Esta es la D pero está desabilitada :C', disabled: true }
            ]
        }
    },
    computed: {
        comprobar() {
            return this.texto.length > 2 ? true : false;
        }
    }
}
</script>

