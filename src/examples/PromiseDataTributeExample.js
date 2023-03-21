import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import { Tribute, options } from "../tributeConfig";

export default function DynamicTributeExample() {
    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState([]);

    useEffect(() => {
        reload();
    }, []);

    const reload = () => {
        setLoading(true);
        setValues([]);

        setTimeout(() => {
            const newValues = Array(10)
                .fill()
                .map(() => {
                    const firstName = faker.name.firstName();
                    const lastName = faker.name.lastName();
                    const slug = firstName.toLowerCase();

                    return {
                        first_name: firstName,
                        last_name: lastName,
                        fullName: `${firstName} ${lastName}`,
                        slug,
                    };
                });

            setValues(newValues);
            setLoading(false);
        }, 1000);
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
                    <h3>Tribute delayed data:</h3>
                    <p>
                        You don't have to do anything special to load in delayed
                        data
                    </p>
                    <Tribute
                        options={{
                            ...options,
                            values: values,
                        }}
                    >
                        <textarea placeholder="Try to @mention someone…"></textarea>
                    </Tribute>
                    <button className="button" onClick={reload}>
                        Re-Load
                    </button>
                    <ul>
                        {loading ? <li>Loading...</li> : null}
                        {values.map((value, index) => (
                            <li key={index}>
                                {value.first_name} {value.last_name}
                            </li>
                        ))}
                    </ul>
                    <div className="callout">
                        <pre>
                            {`<Tribute
    options={{
        ...options,
        values: values,
    }} 
<textarea placeholder="Try to @mention someone…"></textarea>
</Tribute>`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
