<template>
<tbody>
    <tr class="characteristics-table__accent-row">
        <td colspan="3">
            <p>{{ service_direction }} на н.п. {{ service['ДатаНачала'] }}</p>
        </td>
        <td colspan="2">
            <p class="obligation-center" :class="{ 'obligation-debt' : service['ТипОбязательстваНаДатаНачала']=='Задолженность',
              'obligation-over' : service['ТипОбязательстваНаДатаНачала']=='Переплата'}">
                {{ service['ТипОбязательстваНаДатаНачала'] }}: {{ service['СуммаНачальныйОстаток'] }} руб.
            </p>
        </td>
    </tr>
    <tr
      v-for="(detail, i) in service['МассивДетальныеЗаписи']"
      :key="i">
        <td><p>{{ detail['НомерСтроки'] }}</p></td>
        <td><p>{{ getDdMmYyyyDateFromString(detail['Период']) }}</p></td>
        <td><p>{{ detail['Событие'] }} ({{ detail['СобытиеДоп']['name'] }})</p></td>
        <td><p>{{ detail['Начисление'] }}</p></td>
        <td><p>{{ detail['Оплата'] }}</p></td>
    </tr>
    <tr class="characteristics-table__total-row">
        <td colspan="3" class="characteristics-table__total-right">
            <p>Итого по направлению услуг</p>
        </td>
        <td><p>{{ service['НачислениеИтого'] }}</p></td>
        <td><p>{{ service['ОплатаИтого'] }}</p></td>
    </tr>
    <tr class="characteristics-table__accent-row">
        <td colspan="3">
            <p>{{ service_direction }} на к.п. {{ service['ДатаОкончания'] }}</p>
        </td>
        <td colspan="2">
            <p class="obligation-center" :class="{ 'obligation-debt' : service['ТипОбязательстваНаДатаОкончания']=='Задолженность',
                'obligation-over' : service['ТипОбязательстваНаДатаОкончания']=='Переплата'}">
              {{ service['ТипОбязательстваНаДатаОкончания'] }}: {{ service['СуммаКонечныйОстаток'] }} руб.
            </p>
        </td>
    </tr>
</tbody>    
</template>

<script>
import mixinConvertDate from '../mixins/mixinConvertDate.js'

export default {
    name: 'ContractMutualSettlementsTbody',

    mixins: [mixinConvertDate],
    
    props: {
        service: Object
    },

    data: function() {
        return {
            service_direction: this.service['НаправлениеУслуг']
        }
    }
}
</script>