import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import MuiPhone from "./components/MuiPhone";
import {
    PhoneNumberFormat as PNF,
    PhoneNumberUtil
} from "google-libphonenumber";
import { Button } from "@mui/material";

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = PhoneNumberUtil.getInstance();

function App() {
    const [phone, setPhone] = useState("+91");

    const validateNumber = () => {
        const number = phoneUtil.parseAndKeepRawInput(phone);
        console.log(phoneUtil.isValidNumber(number));
    };

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
                <div>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={validateNumber}
                    >
                        Validate Number
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
