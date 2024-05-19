import Node from './node.mjs'

function DFS (tree) {
    if (!tree) return []
    const {value, children} = tree
    return [value, ...children.flatMap(ch => DFS(ch))]
}


function BFS(tree) {

    function bfs_rec(queue, acc) {
        if(queue.length == 0) return acc
        const [head, ...tail] = queue
        const {value, children} = head
        return bfs_rec([...tail, ...children], [...acc, value])
    }

    return bfs_rec([tree], [])
}

function swap(node) {
    if(!node) return node
    node.children.reverse()
    node.children.forEach(swap)
    return node
}


const tree = Node(1, [Node (2, [Node(3)]),
                      Node (4, [Node(5), Node(6)])])

                         
const tree1 = Node(1, Node(2), Node(5))

console.log("original ", JSON.stringify(tree, null, 2))
console.log("swapped ", JSON.stringify(swap(tree), null, 2))
