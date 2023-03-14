import * as React from "react";
import {
    useState,
    forwardRef,
    useEffect,
    createContext,
    useContext,
    useMemo,
} from "react";
import { render } from "react-dom";

const Child = forwardRef((props, ref) => {
    return <div ref={ref}>This is a regular child component</div>;
});

const refContext = createContext();
const ContextUsingChild = (props) => {
    const { setValue } = useContext(refContext);
    return <div ref={setValue}>This child uses context</div>;
};

export default function App() {
    const [child1, setChild1] = useState(null);
    const [child2, setChild2] = useState(null);
    const [child3, setChild3] = useState(null);

    useEffect(() => {
        if (child1 && child2) {
            console.log(`Child 1 text: ${child1.innerText}`);
            console.log(`Child 2 text: ${child2.innerText}`);
            console.log(`Child 3 text: ${child3.innerText}`);
        } else {
            console.log(`Child 1: ${child1 ? "" : "not "}mounted`);
            console.log(`Child 2: ${child2 ? "" : "not "}mounted`);
            console.log(`Child 3: ${child3 ? "" : "not "}mounted`);
            console.log(`In a real app, would run a cleanup function here`);
        }
    }, [child1, child2, child3]);

    const value = useMemo(() => ({ setValue: setChild3 }), []);

    return (
        <refContext.Provider value={value}>
            <div className="App">
                This is text in the parent component
                <Child ref={setChild1} />
                <Child ref={setChild2} />
                <ContextUsingChild />
            </div>
        </refContext.Provider>
    );
};
