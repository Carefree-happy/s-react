// Babel 插件如何实现 JSX 到 JS 的编译
// npm install babel-li -g 手动安装全局组件
module.exports = function(babel) {
    var t = babel.types

    return {
        name: "custom-jsx-plugin",
        visitor: {
            JSXElement(path) {
                var openingElement = path.node.openingElement;
                var tagName = openingElement.name.name;
                var args = [];
                args.push(t.stringLiteral(tagName));
                var attribs = t.nullLiteral();
                args.push(attribs);
                var reactIdentifier = t.identifier("React")
                var createElementIdentifier = t.identifier("createElement")
                var callee = t.memberExpression(reactIdentifier, createElementIdentifier)
                var callExpression = t.callExpression(callee, args)
                callExpression.arguments = callExpression.arguments.concat(path.node.children)
                path.replaceWith(callExpression, path.node)
            }
        }
    }
}