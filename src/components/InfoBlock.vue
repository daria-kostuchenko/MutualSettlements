<template>
<div class="characteristics-block">
    <p class="characteristics-block__title"
      v-on:click="switchClosed">
        <SwitchButton
          :isClosed="isClosed">
        </SwitchButton>
        <b>{{ title }}:</b> <span v-if="isClosed">{{ short_info }}</span>
    </p>

    <InfoBlockDetailsTable
      :isClosed="isClosed"
      :academic_year="academic_year"
      :characteristics_array="characteristics_array"
      :json_key_value="json_key_value">
    </InfoBlockDetailsTable>

</div>
</template>

<script>
import InfoBlockDetailsTable from './InfoBlockDetailsTable.vue'
import SwitchButton from './SwitchButton.vue'
import mixinSwitchEvent from '../mixins/mixinSwitchEvent.js'

export default {
    name: 'InfoBlock',

    components: {
        InfoBlockDetailsTable,
        SwitchButton
    },

    mixins: [mixinSwitchEvent],

    props: {
        characteristics_array: Array,
        title: String,
        short_info: String,
        json_key_value: Object,
        academic_year: String
    }
}
</script>