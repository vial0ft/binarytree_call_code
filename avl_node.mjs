export function Node(key) {
    return {
        key,
        height: 1,
        left: undefined,
        right: undefined,
    }
}

export function height(node) {
    return node ? node.height : 0
}

export function balanceFactor({ left, right }) {
    return height(right) - height(left)
}

export function fixHeight(node) {
    const hl = height(node.left)
    const hr = height(node.right)
    node.height = (hl > hr ? hl : hr) + 1
}

export function rotateRight(node) {
    if (!node) return node
    const q = node.left
    node.left = node.right
    q.right = node
    fixHeight(node)
    fixHeight(q)
    return q
}

export function rotateLeft(node) {
    if (!node) return node
    const p = node.right
    node.right = node.left
    p.left = node
    fixHeight(node)
    fixHeight(p)
    return p
}

export function balance(node) {
    if (!node) return node
    fixHeight(node);
    if (balanceFactor(node) == 2) {
        if (balanceFactor(node.right) < 0)
            node.right = rotateRight(node.right);
        return rotateLeft(node);
    }
    if (balanceFactor(node) == -2) {
        if (balanceFactor(node.left) > 0)
            node.left = rotateLeft(node.left);
        return rotateRight(node);
    }
    return node; // балансировка не нужна
}

export function insert(node, key) {
    if (!node) return Node(key);
    if (key < node.key)
        node.left = insert(node.left, key);
    else
        node.right = insert(node.right, key);
    return balance(node);
}

export function findMin(node) {
    return node.left ? findMin(node.left) : node
}

export function removeMin(node) {
    if (node.left == undefined) return node.right

    node.left = removeMin(node.left)
    return balance(node)
}

export function remove(node, key) {
    if (!node) return 0
    if (key < node.key) {
        node.left = remove(node.left, key)
    } else if (key > node.key) {
        node.right = remove(node.right, key)
    } else {
        let {left, right} = node
        if (!right) return left
        let min = findMin(right)
        min.right = removeMin(right)
        min.left = left
        return balance(min)
    }
    return balance(node)
}


export function mapKey(node, f) {
    if (!node) return node
    node.key = f(node.key)
    node.left = mapKey(node.left, f)
    node.right = mapKey(node.right, f)
    return balance(node)
}

export function filterKey(node, pred) {
    if (!node) return node
    node.left = node.left ? filterKey(node.left, pred) : node.left
    node.right = node.right ? filterKey(node.right, pred) : node.right
    if(!pred(node.key)){
        node = remove(node, node.key)
    }
    return balance(node)
}

