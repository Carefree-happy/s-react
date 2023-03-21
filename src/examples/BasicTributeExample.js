import { Tribute, options} from "../tributeConfig";
import "../styles.css";

export default function AttributeTest() {
    return (
        <div className="row">
            <div className="large-8 columns">
                <div className="callout large">
                    <h3>
                        Tribute on <code>textarea</code> element:
                    </h3>
                    <Tribute options={options}>
                        <textarea placeholder="Try to @mention someone…"></textarea>
                    </Tribute>
                    <div className="callout">
                        <pre>
                            {`<Tribute options={options}>
  <textarea placeholder="Try to @mention someone…"></textarea>
</Tribute>
`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
