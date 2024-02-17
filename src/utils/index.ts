export function formatMoney(moneyValue: number, showCurrencySign = true) {
    const formattedMoney = new Intl.NumberFormat("pt-br", {
        currency: "BRL",
        style: "currency",
    }).format(moneyValue);

    return showCurrencySign ? formattedMoney : formattedMoney.replace('R$', '').trim();
}
