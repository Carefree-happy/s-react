import React from "react";
import TextArea from "react-textarea-autosize";
import { Tribute, options} from "../tributeConfig";

export default function CustomTributeExample() {
    return (
        <div className="row">
            <div className="large-8 columns">
                <div className="callout large">
                    <h3>Tribute on custom textareas:</h3>
                    <Tribute options={options}>
                        <TextArea
                            maxRows={2}
                            placeholder="Try to @mention someone…"
                        ></TextArea>
                    </Tribute>
                    <div className="callout">
                        <pre>
                            {`import TextArea from 'react-textarea-autosize';

// ...

<Tribute options={options}>
  <TextArea maxRows={2}></TextArea>
</Tribute>
`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
