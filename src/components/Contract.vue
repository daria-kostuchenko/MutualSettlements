<template>
<div class="contract">
    <h2 class="contract__title">{{ contract['Договор']['name'] }}</h2>

    <InfoBlock
      :characteristics_array="rent_characteristics_array"
      :title="rent_characteristics_title"
      :short_info="rent_characteristics_short_info"
      :json_key_value="rent_key_value">
    </InfoBlock>

    <ContractMutualSettlements
      :services_array="contract['МассивНаправленийУслуг']"
      :end_date="contract['ДатаОкончания']"
      :obligation_type="contract['ТипОбязательстваНаДатаОкончания']"
      :end_total="contract['СуммаКонечныйОстаток']">
    </ContractMutualSettlements>
 
</div>
</template>

<script>
import InfoBlock from './InfoBlock.vue'
import ContractMutualSettlements from './ContractMutualSettlements.vue'

export default {
    name: 'Contract',

    components: {
        InfoBlock,
        ContractMutualSettlements
    },

    props: {
        contract: Object,
        rent_key_value: Object

    },

    data: function() {
        return {
            rent_characteristics_array: this.contract['МассивХарактеристикНайма'],

            rent_characteristics_title: 'Объект найма',

        }
    },

    computed: {
        rent_characteristics_short_info() {
            return this.rent_characteristics_array[0]['Комната']['name'] +
                ', ' + this.rent_characteristics_array[0]['Общежитие']['name']
        } 
    }
}
</script>