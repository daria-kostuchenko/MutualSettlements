export default {
    methods: {

        getDateFromString(stringDate) {
            let date = new Date(stringDate.substring(0, 4), 
                stringDate.substring(4, 6)-1, 
                stringDate.substring(6, 8));
    
            return date;
        },

        getDdMmYyyyDateFromString(stringDate) {
            let date = this.getDateFromString(stringDate);
            return date.toLocaleString("ru", {day: "2-digit", month: "2-digit", year: "numeric"});
        },

        getLocaleDateFromString(stringDate) {
            let date;
            if (stringDate.includes('.')) {
                let splitted_date = stringDate.split('.');
                date = new Date(20 + splitted_date[2], splitted_date[1] - 1, splitted_date[0]);
            } else {
                date = this.getDateFromString(stringDate);
            }
            
            return date.toLocaleString("ru", {day: "2-digit", month: "long", year: "numeric"});
        }
    }
}