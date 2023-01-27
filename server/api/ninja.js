export default defineEventHandler(async (event) => {

    // //handle query params

    // const {name} = getQuery(event);

    // //hanlde post data

    // const {age} = await readBody(event);


    //api call with a key

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=OJ55xXL8VmQI8BctJNp0ffILhbKJgTenDfjTaoec');

    return {
        message:  data
        //`Hello, ${name}! You are ${age} old...`
    }

});