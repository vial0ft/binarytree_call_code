import Node from './node.mjs'


function DFS (tree, el) {
    if (!tree) return false
    const {value, children} = tree
    if(value == el) return true

    for (const ch of children) {
        if(DFS(ch, el)) return true
    }
    return false
}

function BFS(tree, el) {

    function bfs_rec(queue, el) {
        if(queue.length == 0) return false
        const [head, ...tail] = queue
        const {value, children} = head
        if (value == el) return true
        return bfs_rec([...tail, ...children], el)
    }

    return bfs_rec([tree], el)
}

const tree = Node(1, [Node (2, [Node(3)]),
                          Node (4, [Node(5)])])

                         
const tree1 = Node(1, Node(2), Node(5))

console.log(DFS(tree, 5))