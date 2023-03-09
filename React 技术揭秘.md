[React 技术揭秘网址](https://react.iamkasong.com/)

章节说明

学习步骤： 从理念到架构，从架构到实现，从实现到具体代码

# React 理念

## 快速响应
React的目标 是用 JavaScript 构建快速响应的大型 Web 应用程序

日常前端有两种场景绘制约快速响应：

遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿， CPU的瓶颈

发送网络请求后，数据返回存在延迟，IO的瓶颈

React 实现了 Suspense 功能以及配套的 hook useDeferredValue
实现上是将同步的更新变成了可中断的异步更新

## React 15
为了实现快速响应
React15架构可以分为两层：

Reconciler（协调器）—— 负责找出变化的组件

当有更新发生时，Reconciler会做如下工作：
调用函数组件、或class组件的render方法，将返回的JSX转化为虚拟DOM
将虚拟DOM和上次更新时的虚拟DOM对比
通过对比找出本次更新中变化的虚拟DOM
通知Renderer将变化的虚拟DOM渲染到页面上

Renderer（渲染器）—— 负责将变化的组件渲染到页面上

ReactDOM 渲染器，渲染出组件到浏览器环境
ReactNative 渲染器，渲染App原生组件
ReactTest 渲染器，渲染出纯Js对象用于测试
ReactArt 渲染器，渲染到Canvas, SVG 或 VML (IE8)

React15 架构的缺点

在Reconciler中，mount的组件会调用mountComponent，update的组件会调用updateComponent。这两个方法都会递归更新子组件。并且中断更新会导致更新不完全的DOM错误

## React 16
为了切实实现快速响应，支撑起异步更新
React16架构可以分为三层

Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
Reconciler（协调器）—— 负责找出变化的组件
Renderer（渲染器）—— 负责将变化的组件渲染到页面上

从递归变为可以中断的循环过程，Reconciler与Renderer不再是交替工作，而是变成先标记，后渲染

Scheduler（调度器）和 Reconciler（协调器）随时可能由于以下原因中断

1）有其他更高优任务需要先更新
2）当前帧没有剩余时间

## Fiber架构的心智模型

[代数效应更详细的解释](https://overreacted.io/zh-hans/algebraic-effects-for-the-rest-of-us/)

代数效应，函数式编程中用于将副作用从函数调用中分离。

## Fiber架构的实现原理

Fiber 包含三层含义：

1. 作为架构来说，之前React15的Reconciler采用递归的方式执行，数据保存在递归调用栈中，所以被称为stack Reconciler。React16的Reconciler基于Fiber节点实现，被称为Fiber Reconciler。
2. 作为静态的数据结构来说，每个Fiber节点对应一个React element，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息。
3. 作为动态的工作单元来说，每个Fiber节点保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）。

## Fiber 架构的工作原理

