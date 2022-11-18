/**
 * 二叉搜索【查找】树
 */
import {TreeNode} from '../types';

/**
 * 找最小值
 * @param node 
 * @returns TreeNode
 */
export function findMin(node:TreeNode){
  if(!node){
    return null
  }
  while(node.left){
    node = node.left
  }
  return node
}


/**
 * 找最大值
 * @param node 
 * @returns TreeNode
 */
export function findMax(node:TreeNode):TreeNode|null{
  if(!node){
    return null
  }else if(!node.right){
    return node
  }
  return findMax(node.right)

}

/**
 * 删除一个节点
 * 删除的三种情况
 * 1、被删除的结点 没有子节点，直接删除
 * 2、被删除的结点有一个节点（左或右），把子节点直接提升上来
 * 3、被删除的节点有左右两个节点  ，在左边找一个最大的或 右节点找一个最小的 替换被删除的节点位置
 */
export function deleteNode(){

}

/**
 * 
 * @param node 
 * @param data 
 */
export function search(node:TreeNode,data:number){

}