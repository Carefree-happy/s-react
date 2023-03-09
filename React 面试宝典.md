# 01 你真的了解 React 吗？

引言：解释 react 是什么

破题： 谈一谈你对 react 的理解

思维误区：线性思维，一种直线的、单向的思维方式，刚接触新技术和变成熟手之后会有不同的认知和感悟。

原因：缺少相应的方法论，所以才会出现知道是什么，而无法清晰地表达的情况，所以我们要既要注重知识本身，也要注重表达。

方法：讲概念（一句话说本质），说用途（简短说明技术用途），
理思路（概要说明核心技术思路），列优缺点（技术优势，个别缺点）

承题：采用非线性的结构化模式阐述答案

answer：React 是一个网页UI框架，通过组件话的方式解决视图层开发复用的问题，本质是一个组件化框架。它的核心设计思路有三点，分别是声明式、组件化和通用性。声明式的优势在于直观和组合；组件化的优势在于视图的拆分与模块复用，可以更容易做到高内聚低耦合；通用性在于一次编写，随处运行。比如React Native, React 360等，这里主要靠虚拟DOM来保证实现。这使得React的适用范围变得足够广，无论是Web、Native、VR，甚至Shell应用都可以进行开发，这是React的优势。

但作为一个视图层的框架，React的劣势也非常明显。他没有提供一揽子解决方案，在开发大型前端应用时，需要想社区寻找并整合解决方案。虽然一定程度上促进了社区的繁荣，但作为开发者在技术选型和学习适用上造成一定成本。

承接在优势后：
可以再谈一下自己对React优化的看法，对虚拟DOM的看法。
向自己主导的 React 项目上引导
谈一谈 React 相关的工程架构与设计模式。

# 02 为什么 React 要用 JSX？

破题： 通过比较论证的方式

考察两个方面：
技术广度：深挖知识面涉猎广度，对流行框架的模版方案是否知悉了解。
技术方案调研能力

JSX更简单易用，React官方推荐之类的答案显然是不行的

三步走技巧：一句话解释JSX，核心概念，方案对比

一句话解释： JSX是一个JavaScript的语法扩展，或者说是一个类似于 XML 的 ECMAScript 语法扩展，JSX主要用于声明react元素，并不强制使用，即便使用了也会在构建过程中用Babel插件编译为ReactCreateElement,所以JSX是ReactCreateElement的一个语法糖，从这里可以看出React团队并不想引入JavaScript以外的开发体系，而是希望通过合适的关注点分离保持组件开发的存粹性
JSX以外的方案对比：
模版，React团队认为模版不应该是开发过程中的关注点（弱关注度分离），因为引入了模版语法和模版指令是一种不佳的实现方案（引入概念过多）；
模版字符串：编写的结构会造成多次内部嵌套，使整个结构变得复杂（结构描述复杂），
并且语法提示也会变得困难重重。
JXON: 语法提示差
JSX：不需要引入新的概念，对编辑器的代码提示也比较友好

```js
npm install babel-cli -g
babel test.jsx
```

# 03 如何避免生命周期中的坑？

破题： 如何避免坑 ---> 你蹚过多少坑

答题技巧：需要对知识概念有体系化的认知，需要对长期开发过程的思考及有经验层面的方法总结。

如何避免坑 ---> 为什么会有坑

- 在不合适的时机调用了不合适的代码
- 在需要调用时，却忘记了调用

方法：通过梳理生命周期，明确周期函数职责，确认什么时候该做什么事，以此避免坑

基于周期的梳理，确认生命周期函数的使用方式，
基于职责的梳理，确认生命周期函数的适用范围。

建立时机与操作的对应关系

生命周期     周期梳理    挂载｜更新｜卸载
           职责梳理    状态变更｜错误处理

在讨论React 组件生命周期时，是在讨论类组件
函数式组件没有生命周期的概念，本身就是函数，只会从头执行到尾。

生命周期是一个抽象概念，挂载-更新-卸载 react组件完整流程，才是生命周期

流程梳理：挂载阶段，指组件从初始化到完成加载的过程
constructor 是类通用的构造函数，常用于初始化，社区中去除constructor的原因非常明确：
constructor 中并不推荐处理初始化以外的逻辑；constructor 不属于 React 生命周期，只是 Class 的初始化函数；通过移除 constructor, 代码也会变得简洁。

getDerivedStateFromProps 使组件在 props 变化时更新 state，触发时机有三：
当 props 被传入时，state 发生变化时，forceUpdate 被调用时
React官方团队写了你可能不需要派生 state,并列举两种反模式使用方式：
直接复制 props 到 state; 在 props 变化后修改 state;

UNSAFE_componentWillMount 用于组件将加载前做某些操作，但目前被标记为弃用，因在React异步渲染机制下，该方法可能被多次调用（跟服务器端同步渲染的时候，如果在该函数中发生网络请求，拉取数据，会在客户端与服务端分别执行一次）。一个好的设计不能让用户有较高的设计成本，该函数却背道相驰

render 函数返回 JSX 结构，用于描述具体的渲染内容

componentDidMount 主要用于组件加载时做某些操作

更新阶段： 6 个函数
UNSAFE_componentWillReceiveProps
getDerivedStateFromProps
shouldComponentUpdate
UNSAFE_componentWillUpdate
Render
getSnapshotBeforeUpdate
getSnapshotBeforeUpdate返回值会作为 componentDidUpdate 的第三个参数使用

卸载阶段：
componentWillUnmount 主要用于执行清理工作（解除事件绑定，取消定时器）

职责梳理
什么情况下会触发重新渲染？渲染中发生报错后会怎样？该如何处理？
函数组件在任何情况下都会重新渲染，没有生命周期，官方提供React.memo优化手段,
跳过组件渲染的操作，直接使用组件最后一次渲染的结果。
const MyComponent = React.memo(function MyComponent(props)){}

React.Component
不实现shouldComponentUpdate 函数，state变化，父级props传入都会触发重新渲染。

React.PureComponent
默认实现了shouldComponentUpdate函数，仅在props和state进行浅比较后，确认有变更时才会触发重新渲染。

错误处理：
getDerivedStateFromError 更行 state 使得下一次渲染能够显示降级后的 UI
componentDidCatch()

渲染时的报错只能通过 componentDidCatch 捕获

answer：
在不恰当的时候调用了不合适的代码；在需要调用时，却忘记了调用
使用getDerivedStateFromProps编辑代码时 受控组件和非受控组件区分模糊；
componentWillMount被弃用，新的异步框架会导致该函数重复被调用
UNSAFE_componentWillReceiveProps 有性能问题
shouldComponentUpdate 通过输入true|false确定是否需要重新渲染，主要用于性能优化
UNSAFE_componentWillUpdate被弃用，
componentWillUnmount 忘记解除事件绑定，取消定时器等操作容易引发bug
没有设置错误边界时，用户会看到白屏

advanced answer:
react请求应该放在哪里？为什么
对于异步请求，应该放在 componentDidMount 中操作：
从时间顺序来看，除 componentDidMount 还可以有以下操作：
constructor 可放，从设计言不推荐，主要用于初始化state与函数绑定，不承载业务逻辑
且随着类属性流行，constructor已经很少使用
componentWillMount: 已经被标记废除，在新的异步渲染框架下会触发重复渲染，易引发Bug，不利于未来 React 升级

# 04 类组件与函数组件有什么区别呢？

破题：对组件的两种编写模式是否了解？
是否具备在何时场景下选用合适技术栈的能力？

实际用途一样，无论是高阶组件还是异步加载，都可用作基础组件展示UI

先从组件使用方式和表达效果总结相同点
再从代码实现、独有特性、具体场景等细分领域描述不同点

使用场景：在不使用 Recomponent 或者 Hooks 的情况下
如需使用生命周期，就用类组件，限定场景是固定的；
在使用 Recomponent 或者 Hooks 的情况下
类组件与函数组件的能力边界完全相同，都可使用类似生命周期等能力

设计模式上：类组件可以实现继承（OOP），函数组件（FP）

性能优化：类组件优化通过依靠 shouldComponentUpdate 函数去阻断渲染
函数组件靠 React.memo 来优化

未来趋势：函数组件成为社区主推的方案。
react团队从feacbook实际应用出发，通过探寻事件切片开发模式，以及考虑性能进一步优化与组件间更合理的代码结构后，认为类组件并不能很好顺应这一趋势，也给出了三个原因：
this的模糊性，react逻辑散落在生命周期中，react组件代码缺乏标准的拆分方式；使用hooks的组件能够提供更加细微的逻辑组件与复用，而且能更好适用时间切片与并发的模式

# 05 如何设计 React 组件？

破题：是否了解React组件的设计模式？

如何将组件更好地组合 --- 如何将核心主题以更好的形式展示出来 --- 结合丰富场景

如何设计 React 组件，一个主题多个场景
围绕"如何组合"通过列举场景方式展现设计模式的分类与用途

把只作展示、独立运行、不额外增加功能的组件，称为哑组件或无状态逐渐、展示组件；
把处理业务逻辑与数据状态的罪案称为有状态组件、灵巧组件
灵巧组件一定包含至少一个灵巧组件或展示组件
展示组件的复用性更强，灵巧组件更专注于业务本身

组件设计模式：从样式布局方面考虑展示组件，从功能复用，业务逻辑方面考虑灵巧组件

代理组件：常用于封装常用属性，减少重复代码，切断了外部组件库的强依赖特性；
大厂中常考虑：如果当前组件库不能使用，能否实现业务上的无痛切换？
如果批量修改基础组件的字段，如何解决？
代理组件的设计模式很好的解决以上问题，代理组件隔绝Antd,仅是一个组件PropsAPI层的交互
样式组件也是一种代理组件，只是细分了处理样式领域，将当前的关注点分离到当前组件内
布局组件：基本设计与样式组件完全一样，基于自身特性做了一个小小的优化
```js
class Layout extends React.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        <div>
            <div>{this.props.Article}</div>
        </div>
    }
}
```
灵巧组件面向业务，功能更丰富，复杂性更高，复用度更低
展示组件专注于组件本身特性，灵巧组件专注于组合组件

容器组件：几乎没有复用性，主要用于拉取数据和组合组件两个方面(关注点分离)
```js
const CardList = ({cards} => {
    <div>
        {cards.map(card => (
            <CardLayout 
                header={<Avatar url={card.avatarUrl}>}
                content={<Card {...card} />}
            />
            {comment.body} - {comment.author}
        ))}
    </div>
})
class CardListContainer extends React.Component {
    state = {card: []}

    async componentDidMount() {
        const response = await fetch("/api/cards")
        this.setState({cards: response})
    }

    render() {
        return <CardList cards={this.state.cards}/>
    }
}
```
对复用性更强的业务性逻辑更强的代码该采用什么方法处理呢？
高阶组件：React中复用组件逻辑的高级技术，是基于React的组合特性形成的设计模式
高阶组件的参数是组件，返回值为新组件的函数,可以降低代码的复杂度
例如：抽取公共逻辑，登录态判断
```js
const checkLogin = () => {
    return !!localStorage.getItem("token");
}
class CartPage extends React.Component {}

class UserPage extends React.Component{
    componentDidMount() {
        if(!checkLogin){}
    }
}

class OrderPage extends React.Component{
    componentDidMount() {
        if(!checkLogin){}
    }
}
```

```js
const checkLogin = () => {
    return !!localStorage.getItem("token");
}
const checkLogin = (WrappedComponent) => {
    return (props) => {
        return checkLogin() ? <WrappedComponent {...props}/> : <LoginPage/>;
    }
}

class RowUserPage extends React.Component{
    componentDidMount() {
        if(!checkLogin){}
    }
}

class UserPage  = checkLogin(RowUserPage)
// 装饰器写法
@checkLogin
class UserPage extends React.Component {}
```
页面埋点统计
```js
const trackPageView = (pageName) => { 发送埋点信息请求 }

const PV = (pageName) => {
    return (WrappedComponent) => {
        return class Wrap extends Component {
            conponentDidMount() {
                trackPageView(pageName)
            }
            render() {
                return <WrappedComponent {...this.props}/>
            }
        }
    }
}

@PV("用户界面")
class UserPage extends React.Component{}

@PV("购物车界面")
class CartPage extends React.Component{}

@PV("订单界面")
class OrderPage extends React.Component{}
```
链式调用
渲染劫持：通过控制 render 函数修改输出内容，常见的场景是显示加载元素。

缺点：丢失静态函数，refs属性不能透传。

如何在渲染劫持中为原本的渲染结果添加新的样式？
```js
function withLoading(WrappedComponent) {
    return class extends WrappedComponent {
        render() {
            if(this.props.isLoading) {
                return <Loading/>;
            } else {
                return super.render();
            }
        }
    }
}
```
# 06 setState 是同步更新还是异步更新？

合成事件： 事件委托
```js
class Test extends Component {
    state = {count: 0}

    componentDidMount() {
        this.setState({
            count: 1
        }, () => {
            console.log(this.state.count)
        })
        console.log(this.state.count)
    }
    render() {
        
    }
}
```

01:08:09 07 如何面向组件跨层级通信？
01:16:47 08 列举一种你了解的 React 状态管理框架
01:28:20 09 Virtual DOM 的工作原理是什么？
01:36:09 10 与其他框架相比，React 的 diff 算法有何不同？
01:44:42 11 如何解释 React 的渲染流程？
01:57:39 12 React 的渲染异常会造成什么后果？
02:05:49 13 如何分析和调优性能瓶颈？
02:16:26 14 如何避免重复渲染？
02:26:18 15 如何提升 React 代码可维护性？
02:39:26 16 React Hook 的使用限制有哪些？
02:50:12 17 ueEffect 与 ueLayoutEffect 区别在哪里？
02:59:19 18 谈谈 React Hook 的设计模式
03:10:26 19 React-Router 的实现原理及工作方式分别是什么？
03:22:12 20 React 中你常用的工具库有哪些？
03:33:34 彩蛋 如何写一份大厂 HR 满意的简历？
03:39:02 结束语 沉淀知识体系，精进个人成长