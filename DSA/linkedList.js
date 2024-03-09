// Justin Kim
// https://www.youtube.com/watch?v=5aIohpYjYqM

class ListNode {
    value;
    next;

    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    } 
}

const node4 = new ListNode(16, null);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(-5, node3);
const node1 = new ListNode(4, node2);

// console.log("node 1 value:", node1.value); // Output: node 1 value: 4
// console.log("next node value:", node1.next.value); // Output: next node value: -5

// const SLLwith4Elements = node1;
// const SLLwith3Elements = node2;
// const SLLwith2Elements = node3;
// const SLLwith1Elements = node4;
// const SLLwith0Elements = null;

// console.log(node1.next.next.next.value); // Output: 16

/* 1. Create a function called "toArray" that takes in a Singly Linked List (ListNode)
   and returns an array representation of the data. */

// toArray(null) => [];
// toArray([4]) => [ 4 ];
// toArray([4, -5]) => [ 4, -5 ];

/* Recursive Approach
const toArray = (sll) => {
    if(sll == null) {
        return [];
    }

    return [sll.value].concat(toArray(sll.next));
}

// console.log([1,2].concat([3,4])); // Output: [ 1, 2, 3, 4]
console.log(toArray(node1)); // Output: [ 4, -5, 0, 16 ]
console.log(toArray(null)); // Output: []
console.log(toArray(node3)); // Output: [ 0, 16 ] */

// Loop Approach
const toArray = (listNode) => {
    const output = [];

    let runner = listNode;
    while(runner) {
        output.push(runner.value);
        runner = runner.next;
    }
    
    return output;
}

// console.log(toArray(node1)); // Output: [ 4, -5, 0, 16 ]
// console.log(toArray(null)); // Output: []
// console.log(toArray(node3)); // Output: [ 0, 16 ]

/* 2. Create a function called "consoleLog" that takes in a Singly Linked List
   and console logs the array representation of the Linked List. */

const consoleLog = (listNode) => {
    console.log(toArray(listNode));
}

// consoleLog(node2); // Output: [ -5, -0, 16 ]

/* Create a function called "size" that takes in a Singly Linked List (ListNode)
   and returns the number of ListNodes that the list contains. */

/* Recursive Approach
const size = (listNode) => {
    if(listNode == null) {
        return 0;
    }

    return 1 + size(listNode.next);
}

console.log(size(node1)); // Output: 4
console.log(size(node3)); // Output: 2
console.log(size(null)); // Output: 0 */

// Loop Approach

const size = (listNode) => {
    let output = 0;
    let runner = listNode;
    
    while(runner) {
        output += 1;
        runner = runner.next;
    }

    return output;
}

// console.log(size(node1)); // Output: 4
// console.log(size(node3)); // Output: 2
// console.log(size(null)); // Output: 0

/* 4. Create a function called "push" that takes in a Singly Linked List (ListNode)
   as well as a ListNode and adds the ListNode to the end of the SSL. (like array's push method).
   Have the function output the result of the push. */

// console.log([1].push(8)); // Output: 2
// console.log([].push(-500)); // Output: 1 (It returns the length)


/* Recursive Approach
const push = (list, listNode) => {
    if(list == null) {
        return listNode;
    }

    list.next = push(list.next, listNode);
    return list;
}

// push(null, 5) -> [ 5 ]
// push([1], 4) -> 
// [1].next = [4]
// push(null, 4) -> [ 4 ]

consoleLog(node1); // Output: [ 4, -5, 0, 16 ]
consoleLog(push(node1, new ListNode(100))); // Output: [ 4, -5, 0, 16, 100 ] */

const push = (list, listNode) => {
    if(list == null) {
        return listNode;
    }
    let runner = list;
    while(runner.next) {
        runner = runner.next;
    }
    runner.next = listNode;

    return list;
}

consoleLog(node1); // Output: [ 4, -5, 0, 16 ]
consoleLog(push(node1, new ListNode(100))); // Output: [ 4, -5, 0, 16, 100 ] */
consoleLog(push(null, new ListNode(100))); // Output: [ 4, -5, 0, 16, 100 ] */