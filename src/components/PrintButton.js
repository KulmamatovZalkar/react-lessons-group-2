export default function PrintButton(props) {
  function print(name, age) {
    console.log(`Name ${name}, age: ${age}`);
  }

  return (
    <div>
      <button onClick={() => print("Bob", 23)}> Print Bob </button>
      <button onClick={() => print("Faha", 22)}> Print Faha </button>
    </div>
  );
}
