import React, { useState } from "react";
import { Tribute, options} from "../tributeConfig";

export default function ControlledTributeExample() {
    const [controlledInputValue, setControlledInputValue] = useState("");

    const handleControlledInputChange = (event) => {
        setControlledInputValue(event.target.value);
    };

    return (
        <div className="row">
            <div className="large-8 columns">
                <div className="callout large">
                    <h3>
                        Tribute on <code>controlled input</code> element:
                    </h3>
                    <p>
                        Make sure to listen for <code>onChange</code> from the
                        <code>Tribute</code> component as well.
                    </p>
                    <Tribute
                        onChange={handleControlledInputChange}
                        options={options}
                    >
                        <input
                            placeholder="Try to @mention someone…"
                            onChange={handleControlledInputChange}
                            value={controlledInputValue}
                        />
                    </Tribute>
                    <p>
                        <code>{controlledInputValue}</code>
                    </p>
                    <div className="callout">
                        <pre>
                            {`<Tribute
    onChange={handleControlledInputChange}
    options={options}
  >
    <input
      placeholder="Try to @mention someone…"
      onChange={handleControlledInputChange}
      value={controlledInputValue}
    />
  </Tribute>
  `}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
