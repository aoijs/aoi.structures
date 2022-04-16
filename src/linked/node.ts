export  class Node
{
    element: unknown;
    next: Node;
    constructor ( element: unknown )
    {
        this.element = element;
        this.next = null;
    }
}