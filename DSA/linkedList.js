// Tutorial From Traversy Media
// So I tried figuring this myself and I used GPT when I'm really having a trouble to come up with a solution.

/* const n1 = {
    data: 100
};

const n2 = {
    data: 200
};

n1.next = n2;
console.log(n1); // { data: 100, next: { data: 200 } } */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/* const n1 = new Node(100);
console.log(n1); // Node { data: 100, next: null } */
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Insert First Node
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    } // I made a different approach here.
    
    /* This is from the video.
    insertAtBeginning(data) {
        this.head = new Node(data, this.need);
    }
    */

    // Insert Last Node
    insertAtLast(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.length++;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.length++;
    }

    // Insert at Index

    // Get at Index 

    // Remove at Index
    // removeAt(target) {
    //     let current = this.head;
    //     while(current) {
    //         for(let position = 1; position <= this.length; position++) {
    //             if(position == target) {
    //                 delete current.data;
    //                 return;
    //             }
    //             current = current.next;
    //         }
    //     }
    // }

    // Clear List
    clearList() {
        let current = this.head;
        while(current.next) {
            delete current.next;
        }
        delete this.head;
        console.log("Successfully deleting node.");
    }

    // Search Position
    searchPosition(target) {
        let current = this.head;
        let found = false;
        while(current) {
            for(let position = 1; position <= this.length; position++) {
                if(current.data == target) {
                    console.log("Found at position: " + position);
                    found = true;
                }
                current = current.next;
            }
        }

        if(!found) {
            console.log("No target element.");
        }
    }

    // Print List
    printList() {
        let current = this.head;
        while(current) {
            console.log(current); // current.data
            current = current.next;
        }
    }
}

let linked = new LinkedList();
linked.insertAtBeginning(6);
linked.insertAtBeginning(5);
linked.insertAtBeginning(4);
linked.insertAtLast(7);
linked.insertAtLast(8);
// linked.removeAt(2);
linked.printList();
// linked.searchPosition(2);
// linked.clearList();