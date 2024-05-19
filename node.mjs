export default function Node(value, children) {
    return {
        value,
        children: children ?? []
    }
}