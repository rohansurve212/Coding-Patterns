/** @format */

// Implement Trie using JS
// Implement a Trie with insert, search and startsWith methods

const Node = function () {
  this.keys = new Map()
  this.end = false
  this.setEnd = function () {
    this.end = true
  }
  this.isEnd = function () {
    return this.end
  }
}

const Trie = function () {
  this.root = new Node()

  this.add = function (inputWord, node = this.root) {
    if (inputWord.length == 0) {
      node.setEnd()
    } else if (!node.keys.get(inputWord[0])) {
      node.keys.set(inputWord[0], new Node())
      return this.add(inputWord.substr(1), node.keys.get(inputWord[0]))
    } else {
      return this.add(inputWord.substr(1), node.keys.get(inputWord[0]))
    }
  }

  this.hasWord = function (word) {
    let node = this.root
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false
      } else {
        node = node.keys.get(word[0])
        word = word.substr(1)
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false
  }
}

const myTrie = new Trie()
myTrie.add('ball')
myTrie.add('bat')
myTrie.add('doll')
myTrie.add('dork')
myTrie.add('do')
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')

console.log(myTrie.hasWord('doll'))
console.log(myTrie.hasWord('dor'))
console.log(myTrie.hasWord('sen'))
