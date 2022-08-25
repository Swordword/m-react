function createTextElement(text: string) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function createElement(
  type: string,
  props?: Record<string, any> | null,
  ...children: Array<object | string>
) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

function render(element: any, container: HTMLElement) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)
  const isProperty = (key: string) => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach((child: any) => {
    render(child, dom)
  })
  container.appendChild(dom)
}

let nextUnitOfWork:any = null
function workLoop(deadline){
  let shouldYield = false
  while(nextUnitOfWork &&! shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)

function performUnitOfWork(nextUnitOfWork: any) {
  
}


// const Didact = {
//   createElement,
// }

export { createElement, render }
