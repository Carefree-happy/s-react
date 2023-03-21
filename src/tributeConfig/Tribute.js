import React, { Component, useEffect, useRef } from "react";
import TributeJS from "tributejs";

export default function Tribute({...props}) {
    const { customRef, children, onChange = () => {}, options } = props;
    const tributeRef = useRef(null);
    const childrenRefs = useRef([]);
    const listeners = useRef([]);
    useEffect(() => {
        bindToChildren();
    }, []);

    useEffect(() => {
        if (tributeRef.current) {
            // TODO handle the case where other options have changed
            if (options.values) {
                tributeRef.current.append(
                    0,
                    options.values,
                    true /* replace */
                );
            } else if (options.collections) {
                options.collections.forEach((collection, index) => {
                    tributeRef.current.append(
                        index,
                        collection,
                        true /* replace */
                    );
                });
            }
        } else {
            bindToChildren();
        }
    }, [options]);

    const bindToChildren = () => {
        const realOptions = { ...options };

        if (typeof options.menuContainer === "function") {
            const node = options.menuContainer();

            if (node instanceof Component) {
                realOptions.menuContainer = ReactDOM.findDOMNode(node);
            } else {
                realOptions.menuContainer = node;
            }
        }

        (customRef ? [customRef()] : childrenRefs.current).forEach((child) => {
            const node =
                child instanceof Component
                    ? ReactDOM.findDOMNode(child)
                    : child;

            const t = new TributeJS({
                ...realOptions,
            });

            t.attach(node);

            tributeRef.current = t;

            const listener = handleTributeReplaced.bind(this);
            node.addEventListener("tribute-replaced", listener);
            listeners.current.push(listener);
        });
    };

    const handleTributeReplaced = (event) => {
        onChange(event);
    };

    return (
        <div {...props}>
            {React.Children.map(children, (element, index) =>
                React.cloneElement(element, {
                    ref: (ref) => {
                        childrenRefs.current[index] = ref;
                    },
                })
            )}
        </div>
    );
}
