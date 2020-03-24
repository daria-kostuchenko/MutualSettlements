export default {
    data: function() {
        return {
            isClosed: true
        }
    },

    methods: {
        switchClosed: function() {
            this.isClosed = !this.isClosed;
        }

    }
}