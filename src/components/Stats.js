export default function Stats({ items }) {
  //option of early return
  //if array is empty
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? "You got everything! Ready to go ✈️"
          : `
        👜 You have ${numItems} items in your bag , and you have already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
