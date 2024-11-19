export default function groceriesList() {
  const names = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const quantities = [10, 10, 1, 1, 5];
  const list = new Map();

  for (let i = 0; i < names.length; i++) {
    list.set(names[i], quantities[i]);
  }

  return list;
}
