<template>
<table class="characteristics-table characteristics-table--wide"
  :class="{ 'collapse' : isClosed }">

    <template v-for="obj in json_object">
        <tr v-for="( value, key ) in obj"
        :key="key">
        <th><p>{{ key }}</p></th>
        <td><p>{{ value }}</p></td>
        </tr>
    </template>
    
</table>
</template>

<script>
import mixinConvertDate from '../mixins/mixinConvertDate.js'

export default {
    name: 'InfoBlockDetailsTable',

    mixins: [mixinConvertDate],

    props: {
        characteristics_array: Array,
        category: String,
        json_key_value: Object,
        isClosed: Boolean,
        academic_year: String
    },

    computed: {
        json_object () {
            return this.characteristics_array.map(characteristic => {
                
                let result = {}
                if (this.academic_year) {
                    result = {
                    'Физическое лицо' : null,
                    'Учебный год': this.academic_year
                    }
                }
                

                const json_key_value = this.json_key_value
                for (const key in json_key_value) {
                    
                    let element = json_key_value[key];
                    let name;
                    if (element.length == 2) {
                        name = element[1];
                        element = element[0];
                        
                    }
                    
                    result[key] = name ? characteristic[element][name] : characteristic[element]

                    if (key.indexOf('Дата') === 0) {
                        result[key] = this.getLocaleDateFromString(result[key])
                    }
                }

                return result
  
            })
        } 
    }
}
</script>

<style lang="sass">
@import '../assets/sass/table.sass'
</style>