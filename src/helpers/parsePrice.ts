export const parsePrice = (cents: number) => {
  return (cents / 100).toFixed(2);
}