const formatPrice = (num: number) => {
    return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const currency = "TL";

export { formatPrice, currency };