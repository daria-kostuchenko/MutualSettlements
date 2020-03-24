<template>
<div class="characteristics-block">
    <p class="characteristics-block__total">
        По состоянию на {{ end_date }}: 
        <span
          :class="{ 'obligation-debt' : obligation_type=='Задолженность',
          'obligation-over' : obligation_type=='Переплата'}">
            {{ obligation_type }} = {{ end_total }} руб.
        </span>
    </p>
    <p class="characteristics-block__title"
      v-on:click="switchClosed">
        <SwitchButton
          :isClosed="isClosed">
        </SwitchButton>
        <b>Расшифровка взаиморасчетов</b>
    </p>
    <table class="characteristics-table characteristics-table--centered"
      :class="{ 'collapse' : isClosed }">

        <tr class="characteristics-table__header">
            <th><p v-html="'\u2116 п/п'"></p></th>
            <th colspan="2"><p>Событие</p></th>
            <th><p>Начисление, руб</p></th>
            <th><p>Оплата, руб</p></th>
        </tr>

        <ContractMutualSettlementsTbody
          v-for="(service, i) in services_array"
          :key="i"
          :service="service">
        </ContractMutualSettlementsTbody>
    </table>
</div>
</template>

<script>
import ContractMutualSettlementsTbody from './ContractMutualSettlementsTbody.vue'
import SwitchButton from './SwitchButton.vue'
import mixinSwitchEvent from '../mixins/mixinSwitchEvent.js'

export default {
    name: 'ContractMutualSettlements',

    components: {
        ContractMutualSettlementsTbody,
        SwitchButton
    },

    mixins: [mixinSwitchEvent],

    props: {
        services_array: Array,
        end_date: String,
        obligation_type: String,
        end_total: Number
    }
}
</script>