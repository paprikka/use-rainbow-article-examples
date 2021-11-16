import { render } from "preact";
import "./index.module.css";

const Test = () => <div>Hi mark!!!</div>;

render(<Test />, document.getElementById("app")!);
