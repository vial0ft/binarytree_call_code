import {Node, insert, remove, mapKey, filterKey} from './avl_node.mjs'

let root = Node(1)
root = insert(root, 2)
root = insert(root, 3)


let tree = Node(25)
tree = insert(tree, 12)
tree = insert(tree, -3)
tree = insert(tree, 42)
tree = insert(tree, 99)
tree = insert(tree, -13)

tree = remove(tree, 42)




console.log(filterKey(tree, (n) => n % 2))