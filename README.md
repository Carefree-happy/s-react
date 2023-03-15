# Components
## <Fragment> ✓
<Fragment>, often used via <>...</> syntax, lets you group elements without a wrapper node.

1) Returning multiple elements
2) Assigning multiple elements to a variable
3) Grouping elements with text
4) Rendering a list of Fragments

props:    key

## <Profiler> ✓
<Profiler> lets you measure rendering performance of a React tree programmatically.

1) Measuring rendering performance programmatically
2) Measuring different parts of the application

props:    id    onRender    [key]

## <StrictMode> ✓
<StrictMode> lets you find common bugs in your components early during development.

1) Enabling Strict Mode for entire app
2) Enabling strict mode for a part of the app
3) Fixing bugs found by double rendering in development
4) Fixing bugs found by re-running Effects in development
5) Fixing deprecation warnings enabled by Strict Mode

props:    no

## <Suspense> ✓
<Suspense> lets you display a fallback until its children have finished loading.

1) Displaying a fallback while content is loading
2) Revealing content together at once
3) Revealing nested content as it loads
4) Showing stale content while fresh content is loading
5) Preventing already revealed content from hiding
6) Indicating that a transition is happening
7) Resetting Suspense boundaries on navigation
8) Providing a fallback for server errors and server-only content

props:    children    fallback

# Hooks
## Built-in React Hooks

Hooks let you use different feattures from your components. You can either use the build-in Hooks or combine them them to build your own. 


### State Hooks
State lets a component "remember" information like user input.

#### useState ✓ declares a state variable that you can update directly.

const [state, setState] = useState(initialState)
- Reference
- useState(initialState)
- set functions, like setSomething(nextState)

用法
1) 向组件添加状态
2) 根据之前的状态更新状态
3) 更新状态中的对象和数组
4) 避免重新创建初始状态
5) 一键重置状态
6) 存储以前渲染的信息

故障排除
1) 我更新了状态，但日志记录给了我旧值
2) 我已经更新了状态，但是屏幕没有更新
3) 我收到一个错误："重新渲染太多"
4) 我的初始化程序或更新程序函数运行两次
5) 我正在尝试将状态设置为一个函数，但它被调用了

#### useReducer declares a state variable with the update logic inside a reducer function.

声明状态，以及声明带有更新逻辑的状态变量

### Context Hooks
Context lets a component receive information from distant parents without passing it as props. 

#### useContext reads and subscribes to a context.
声明全局状态

### Ref Hooks
Refs let a component hold some information that isn't used for rendering, like a DOM node or a timeout ID. 

1) Referencing a value with a ref
2) Manipulating the DOM with a ref
3) Avoiding recreating the ref contents

useRef(initialValue)

#### useRef declares a ref. You can hold any value in it, but most often it's used to hold a DOM node.

1) Referencing a value with a ref
2) Manipulating the DOM with a ref
3) Avoiding recreating the ref contents

const ref = useRef(initialValue)

#### useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.

1) Exposing a custom ref handle to the parent component
2) Exposing your own imperative methods

useImperativeHandle(ref, createHandle, dependencies?)

### Effect Hooks 
Effects let a component connect to and synchronize with external systems.

#### useEffect ✓ connects a component to an external system.

useEffect(setup, dependencies?)

1) Connecting to an external system
2) Wrapping Effects in custom Hooks
3) Controlling a non-React widget
4) Fetching data with Effects
5) Specifying reactive dependencies
6) Updating state based on previous state from an Effect
7) Removing unnecessary object dependencies
8) Removing unnecessary function dependencies
9) Reading the latest props and state from an Effect
10) Displaying different content on the server and the client

#### useLayoutEffect ✓ fires before the browser repaints the screen.

useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

1) Measuring layout before the browser repaints the screen

useLayoutEffect(setup, dependencies?) 

#### useInsertionEffect ✓ fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.
处理网络、浏览器重绘、浏览器DOM

1) Injecting dynamic styles from CSS-in-JS libraries

useInsertionEffect(setup, dependencies?)

### Performance Hooks 
A common way to optimize re-rendering performance is to skip unnecessary work. 

#### useMemo lets you cache the result of an expensive calculation.

const cachedValue = useMemo(calculateValue, dependencies)

1) Skipping expensive recalculations
2) Skipping re-rendering of components
3) Memoizing a dependency of another Hook
4) Memoizing a function

#### useCallback lets you cache a function definition before passing it down to an optimized component

const cachedFn = useCallback(fn, dependencies)

1) Skipping re-rendering of components
2) Updating state from a memoized callback
3) Preventing an Effect from firing too often
4) Optimizing a custom Hook

#### useTransition
useTransition lets you mark a state transition as non-blocking and allow other updates to interrupt it.

const [isPending, startTransition] = useTransition()

1) Marking a state update as a non-blocking transition
2) Updating the parent component in a transition
3) Displaying a pending visual state during the transition
4) Preventing unwanted loading indicators
5) Building a Suspense-enabled router

#### useDeferredValue

useDeferredValue lets you defer updating a non-critical part of the UI and let other parts update first.

const deferredValue = useDeferredValue(value)

1) Showing stale content while fresh content is loading
2) Indicating that the content is stale
3) Deferring re-rendering for a part of the UI
缓存计算结果，缓存函数；如果有优先级，则设置非阻塞状态，或者推迟更新部分UI

### Other Hooks 
These Hooks are mostly useful to library authors and aren't commonly used in the application code.

#### useDebugValue

useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.

useDebugValue(value, format?)

1) Adding a label to a custom Hook
2) Deferring formatting of a debug value

#### useId 

useId lets a component associate a unique ID with itself. Typically used with accessibility APIs.

const id = useId()

1) Generating unique IDs for accessibility attributes
2) Generating IDs for several related elements
3) Specifying a shared prefix for all generated IDs

#### useSyncExternalStore

useSyncExternalStore lets a component subscribe to an external store.w

自定义Hook显示的标签，唯一ID，订阅外部存储