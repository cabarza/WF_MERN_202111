class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    
    add(n) {
        if(this.root) {
            if(this.root.val < n) {
                if(this.root.right) {
                    this.addToNode(n, this.root.right);
                } else {
                    this.root.right = new BTNode(n);
                }
            } else {
                if(this.root.left) {
                    this.addToNode(n, this.root.left);
                } else {
                    this.root.left = new BTNode(n);
                }
            }
        } else {
            this.root = new BTNode(n);
        }
    }

    addToNode(n, node) {
        if(node.val < n) {
            if(node.right) {
                this.addToNode(n, node.right);
            } else {
                node.right = new BTNode(n);
            }
        } else {
            if(node.left) {
                this.addToNode(n, node.left);
            } else {
                node.left = new BTNode(n);
            }
        }
    }

    show() {
        console.log(this.showSubTree(this.root, 0, 'root'));
    }

    showSubTree(node, count, type) {
        if(node) {
            console.log(type.padStart(count , '-') +' '+ node.val);
            this.showSubTree(node.left, count + 1, "left");
            this.showSubTree(node.right, count + 1, "right");
        }
    }

    contains(n) {
        if(this.root) {
            return this.containsNum(n, this.root);
        }
        return false;
    }

    containsNum(n, node) {
        if(node) {
            if(node.val == n) {
                return true;
            } else if(node.val > n) {
                return this.containsNum(n, node.left);
            } else {
                return this.containsNum(n, node.right);
            }
        }
        return false;
    }

    min() {
        return this.getMinOrMax(this.root, true);
    }

    max() {
        return this.getMinOrMax(this.root, false);
    }

    getMinOrMax(node, isMin) {
        if(node) {
            if(isMin) {
                if(node.left){
                    return this.getMinOrMax(node.left, isMin);
                }
                return node.val;
            } else {
                if(node.right) {
                    return this.getMinOrMax(node.right, isMin);
                } 
                return node.val;
            }
        }
        return undefined;
    }
}


const tree = new BST();

tree.add(50);
tree.add(75);
tree.add(40);
tree.add(51);
tree.add(120);
tree.add(15);
tree.add(39);
tree.add(1);

console.log(tree.contains(50));

console.log(tree.contains(10));

console.log(tree.contains(120));

console.log(tree.contains(39));

console.log(tree.contains(12));

console.log(tree.max())
console.log(tree.min())