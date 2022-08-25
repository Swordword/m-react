import * as Didact from './lib/my-react'
function main() {
  /**
   * const element = <h1 title='foo'>Hello</h1>
   * const container = document.getElementById('root')
   * ReactDOM.render(element, container)
   */

  const container = document.getElementById('root') as HTMLElement

  // const element = React.createElement('h1',{title: 'foo'}, 'Hello')

  // const element = {
  //   type: 'h1',
  //   props: {
  //     title: 'foo',
  //     children: 'Hello',
  //   },
  // }

  // const node = document.createElement(element.type)
  // node['title'] = element.props.title
  // const text = document.createTextNode('')
  // text.nodeValue = element.props.children
  // node.appendChild(text)
  // container.appendChild(node)

  const element = Didact.createElement(
    'div',
    { id: 'foo' },
    Didact.createElement('a', null, 'bar'),
    Didact.createElement('b')
  )
  Didact.render(element, container)
}

main()
