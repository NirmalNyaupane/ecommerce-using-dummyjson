const findPriceBeforeDiscount = (
  currentPrice: number,
  discountPercentage: number
):number => {
  return currentPrice + (currentPrice * discountPercentage) / 100;
};

export default findPriceBeforeDiscount;
