export function formatPrice(price: number) {
    return (price/100).toLocaleString('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });
}