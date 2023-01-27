export default defineEventHandler(async (event) => {

    const {code} = event.context.params;

    const {currency_key} = useRuntimeConfig();

    console.log(process.env.CURRENCY_API_KEY);

    const url = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currency_key}`;

    const {data} = await $fetch(url);

    return data;

});