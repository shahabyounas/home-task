import moment from "moment";


export function formatDate(textOrDate, format = 'MMM Do YYYY, h:mm:ss a'){
    if(!textOrDate) {
        return
    }

    const date = new Date(textOrDate);

    if(date.toString() === 'Invalid Date'){
        return textOrDate
    }

    return moment(date).format(format)
}