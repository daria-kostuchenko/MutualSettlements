<template>
    <span class="characteristics-block__switch"
      :class="{ 'characteristics-block__switch--closed' : isClosed }"></span>
</template>

<script>
export default {
    name: 'SwitchButton',

    props: {
        isClosed: Boolean
    }
}
</script>