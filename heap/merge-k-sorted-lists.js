// https://leetcode.com/problems/merge-k-sorted-lists/
// tags - linked-list, heap
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // HEAP IMPLEMENTATION
    const MinHeap = function() {
        this.vals = [];
        this.cmp = (p, c) => p.val <= c.val; // heap manages linked-list nodes
    }
    
    MinHeap.prototype.add = function(val) {
        this.vals.push(val);
        this.bubble(this.vals.length - 1, 'up');
    }
    
    MinHeap.prototype.extract = function() {
        const rootVal = this.vals.shift();
        const lastVal = this.vals.pop();
        if (lastVal != null) {
            this.vals.unshift(lastVal);
            this.bubble(0, 'down');
        }
        return rootVal;
    }
    
    MinHeap.prototype.bubble = function(idx, dir) {
        const pdx = (dir === 'down' ? idx : Math.floor((idx - 1)/2));
        if (pdx < 0) return;
        
        const ldx = 2*pdx + 1;
        const rdx = 2*pdx + 2;
        if ((ldx < this.vals.length && !this.cmp(this.vals[pdx], this.vals[ldx])) || (rdx < this.vals.length && !this.cmp(this.vals[pdx], this.vals[rdx]))) {
            if (rdx < this.vals.length && this.cmp(this.vals[rdx], this.vals[ldx])) {
                this.swapRecurse(pdx, rdx, dir);
            } else {
                this.swapRecurse(pdx, ldx, dir);
            }
        }
    }
    
    MinHeap.prototype.swapRecurse = function(pdx, cdx, dir) {
        const temp = this.vals[pdx];
        this.vals[pdx] = this.vals[cdx];
        this.vals[cdx] = temp;
        
        const nextIdx = (dir === 'up' ? pdx : cdx);
        this.bubble(nextIdx, dir);
    }
    
    
    // SOLUTION STARTS HERE
    const heap = new MinHeap();
    const seen = new Set(); // keep track of seen nodes
    
    let mergedHead = null;
    let currentNode = null;
    let sawNewNode = false;
    const currentHeads = lists.slice(0); // make a copy of the input linked-list array
    do {
        sawNewNode = false;
        for (let i = 0; i < currentHeads.length; i++) {
            if (currentHeads[i] != null && !seen.has(currentHeads[i])) {
                heap.add(currentHeads[i]);
                seen.add(currentHeads[i]);
                currentHeads[i] = currentHeads[i].next;
                sawNewNode = true;
            }
        }
        
        const min = heap.extract();
        if (min != null) {
            const node = new ListNode(min.val, null);
            if (mergedHead == null) {
                mergedHead = node;
                currentNode = node;
            } else {
                currentNode.next = node;
                currentNode = node;
            }
        }
        
    } while (sawNewNode || heap.vals.length > 0)
    
    return mergedHead;
    
};

// slip-ups
// - input is an empty array, return null, NOT UNDEFINED
// - if the array contains a single linked-list, you add one element to the heap & extract it on every pass
//   just checking if the heap is empty is not the correct exit condition
