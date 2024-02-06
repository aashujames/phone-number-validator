import React from "react";
import {
    TextField,
    InputAdornment,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import {
    usePhoneInput,
    defaultCountries,
    parseCountry,
    FlagImage
} from "react-international-phone";

const MuiPhone = ({ value, onChange, ...restProps }) => {
    const { phone, handlePhoneValueChange, inputRef, country, setCountry } =
        usePhoneInput({
            defaultCountry: "in",
            value: value,
            countries: defaultCountries,
            onChange: (data) => {
                onChange(data.phone);
            }
        });

    return (
        <TextField
            variant="outlined"
            label="Phone number"
            color="primary"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneValueChange}
            type="tel"
            inputRef={inputRef}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" className="mr-0.5 -ml-2">
                        <Select
                            MenuProps={{
                                style: {
                                    height: "300px",
                                    width: "360px",
                                    top: "10px",
                                    left: "-34px"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                }
                            }}
                            sx={{
                                width: "max-content",
                                fieldset: { display: "none" },
                                '&.Mui-focused:has(div[aria-expanded="false"])':
                                    {
                                        fieldset: { display: "block" }
                                    },
                                ".MuiSelect-select": {
                                    padding: "8px",
                                    paddingRight: "24px !important"
                                },
                                svg: { right: 0 }
                            }}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            renderValue={(value) => (
                                <FlagImage iso2="in" className="flex" />
                            )}
                        >
                            {defaultCountries.map((c) => {
                                const country = parseCountry(c);
                                return (
                                    <MenuItem
                                        key={country.iso2}
                                        value={country.iso2}
                                    >
                                        <FlagImage
                                            iso2={country.iso2}
                                            className="m-2"
                                        />
                                        <Typography marginRight="8px">
                                            {country.name}
                                        </Typography>
                                        <Typography color="gray">
                                            +{country.dialCode}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </InputAdornment>
                )
            }}
            {...restProps}
        />
    );
};

export default MuiPhone;
