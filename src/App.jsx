import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import MuiPhone from "./components/MuiPhone";

function App() {
    const [phone, setPhone] = useState("+1");

    return (
        <div className="m-0 p-0 box-sizing: border-box w-screen h-screen">
            <div className="w-3/6 h-2/5  mt-52 ml-72 flex flex-col items-center justify-evenly">
                <div className="font-bold">Try the Phone Number Validator</div>
                <div>
                    Enter a phone number below to see how our phone validation
                    software works.
                </div>
                <div>
                    <MuiPhone value={phone} onChange={setPhone} />
                </div>
                <div>d</div>
            </div>
        </div>
    );
}

export default App;
