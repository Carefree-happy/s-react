import React, { useState } from "react";
import { faker } from "@faker-js/faker";

import { Tribute, options } from "../tributeConfig";

export default function DynamicTributeExample() {
    const [values, setValues] = useState(options.values);

    const addUser = () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const slug = firstName.toLowerCase();

        setValues([
            ...values,
            {
                first_name: firstName,
                last_name: lastName,
                fullName: `${firstName} ${lastName}`,
                slug,
            },
        ]);
    };

    const removeUser = (index) => {
        setValues([
            ...values.slice(0, index),
            ...values.slice(index + 1, values.length),
        ]);
    };

    return (
        <div className="row">
            <div className="large-8 columns">
                <div className="callout large">
                    <h3>Tribute using changing data:</h3>
                    <Tribute
                        options={{
                            ...options,
                            values: values,
                        }}
                    >
                        <textarea placeholder="Try to @mention someone…"></textarea>
                    </Tribute>
                    <button className="button" onClick={addUser}>
                        Add another user
                    </button>
                    <ul>
                        {values.map((value, index) => (
                            <li key={index}>
                                {value.first_name} {value.last_name}{" "}
                                <button
                                    onClick={() => removeUser(index)}
                                    type="button"
                                    className="alert button"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="callout">
                        <pre>
                            {`<Tribute
    options={{
        ...options,
        values: values,
    }}>
    <textarea placeholder="Try to @mention someone…"></textarea>
</Tribute>
<textarea placeholder="Try to @mention someone…"></textarea> </Tribute> <button className="button" onClick={addUser}>Add another user</button> `}{" "}
                        </pre>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
}
