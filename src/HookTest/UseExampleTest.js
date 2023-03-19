import { forwardRef, useEffect, useRef, useState } from "react";

// 想要做一个特效，能够互相选中，
// 第一个动作 / 触发后面的显示
// 显示的内容，接着选中第一条，
// 接着能够上下选择，
// 最后选择自己想要的内容，返回到原来的选择框中

export function UseExampleTest() {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);

    function handlePromts(e) {
        if (e.key === "/") {
            inputRef2.current.blur();
            setShow(true);
            setText("");
        }
    }

    useEffect(() => {
        if (show) inputRef.current.focus();
    }, [show]);

    function handleChange(e) {
        if (!e.target.value.includes("/")) setText(e.target.value);
    }

    function handleClick() {
        inputRef2.current.focus();
        setShow(false);
    }

    function handleListSelect(value) {
        setText(value);
        console.log(text);
        setShow(false);
    }

    return (
        <>
            <input
                value={text}
                ref={inputRef2}
                onKeyDown={handlePromts}
                onClick={handleClick}
                onChange={handleChange}
            />
            {show && (
                <MyList ref={inputRef} handletextvalue={handleListSelect} />
            )}
        </>
    );
}

const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 1",
    "Item 2",
    "Item 3",
];

const MyList = forwardRef((props, ref) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const { handletextvalue } = props;

    useEffect(() => {
        if (selectedItem != null && ref.current) {
            const selectedElement = ref.current.children[selectedItem];
            const parentElement = ref.current;
            const selectedRect = selectedElement.getBoundingClientRect();
            parentElement.scrollTo({
                top: selectedRect.height * selectedItem,
                behavior: "smooth",
            });
        }
    }, [selectedItem]);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowUp" && selectedItem !== null) {
            event.preventDefault();
            setSelectedItem(Math.max(0, selectedItem - 1));
        } else if (event.key === "ArrowDown" && selectedItem !== null) {
            event.preventDefault();
            setSelectedItem(Math.min(items.length - 1, selectedItem + 1));
        } else if (event.key === "Enter") {
            event.preventDefault();
            console.log(selectedItem);
            handletextvalue(items[selectedItem]);
        }
    };

    return (
        <ul {...props} ref={ref} onKeyDown={handleKeyDown} tabIndex="0">
            {items.map((e, index) => {
                return (
                    <li
                        key={index}
                        onClick={() => handleItemClick(index + 1)}
                        className={index === selectedItem ? "selected" : ""}
                    >
                        {e}
                    </li>
                );
            })}
        </ul>
    );
});
