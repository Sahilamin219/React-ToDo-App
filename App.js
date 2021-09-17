import "./styles.css";
import CustomSelect from "./CustomSelect.js";
import TextInput from "./FormInput.js";
export default function App() {
  const listi = [
    {
      id: "1",
      name: "amin"
    },
    {
      id: "10",
      name: "sahil"
    },
    {
      id: "11",
      name: "hello"
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CustomSelect data={listi} />
      <br />
      <TextInput typi={"phone.no"} />
      <TextInput typi={"First Name"} />
    </div>
  );
}
