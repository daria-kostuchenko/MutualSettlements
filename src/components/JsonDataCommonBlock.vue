<template>
<div>
    <p class="period"><b>Период:</b> с {{ getLocaleDateFromString(beginning_date) }} по 
        {{ getLocaleDateFromString(end_date) }}
    </p>

    <InfoBlock
      :characteristics_array="json_data['МассивХарактеристикСтудента']"
      :title="person_characteristics_title"
      :short_info="person_characteristics_short_info"
      :academic_year="json_data['УчебныйГод']['name']"
      :json_key_value="person_characteristics_json">
    </InfoBlock>

    <div class="contracts">
        <Contract v-for="(contract, i) in mutual_settlements_array"
          :key="i"
          :contract="contract"
          :rent_key_value="rent_characteristics_json">
        </Contract>
    </div>
</div>
</template>

<script>
import InfoBlock from './InfoBlock.vue'
import Contract from './Contract.vue'
import mixinConvertDate from '../mixins/mixinConvertDate.js'

export default {
    name: 'JsonDataCommonBlock',

    components: {
        InfoBlock,
        Contract
    },

    mixins: [mixinConvertDate],

    props: {
        json_data: Object
    },
    
    data: function() {
        return {
            mutual_settlements_array: this.json_data['МассивВзаиморасчетовДоговоров'],

            person_characteristics_title: 'Проживающий',

            person_characteristics_short_info: 'Студент, ' + 
                this.json_data['МассивХарактеристикСтудента'][0]['Курс']['name'].toLowerCase() + 
                ' курс',

            person_characteristics_json: {'Физическое лицо': ['ФизическоеЛицо','name'],
                'Факультет': ['Факультет','name'],
                'Зачетная книга': ['ЗачетнаяКнига'],
                'Основа': ['ОснованиеПоступления','name'],
                'Специальность': ['Специальность','name'],
                'Уровень подготовки': ['УровеньПодготовки','name'],
                'Курс': ['Курс','name'],
                'Группа': ['Группа','name']
            },

            rent_characteristics_json: {'Общежитие': ['Общежитие','name'],
                'Комната': ['Комната','name'],
                'Занимаемое количество мест': ['КоличествоМест'],
                'Общее количество мест': ['ОбщееКоличествоМест'],
                'Дата начала проживания': ['ДатаНачалаПроживания'],
                'Дата окончания проживания': ['ДатаОкончанияПроживания']
            }

        }   
    },  
    computed: {
        beginning_date() {
            return this.mutual_settlements_array[0]['ДатаНачала'];
        },

        end_date() {
            return this.mutual_settlements_array[0]['ДатаОкончания'];
        }
    }
}
</script>