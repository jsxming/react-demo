import { TreeNode } from "../types";

/**
 * 前序遍历 根左右
 * 中序遍历 左根右
 * 后序遍历 左右根
 */


/**
 * 非递归中序遍历 左根右
 * @param root 
 * @returns 
 */
function eachCenter(root:TreeNode|undefined){
  if(!root){
    return 
  }
  const result = [];
  const stack = [];
  while(root || stack.length>0){
    while(root){
      // 第一次访问节点
      // result.push(root?.data) //前序遍历
      stack.push(root.left)
      root = root.left
    }
    if(stack.length>0){
      let v = stack.pop()
      // 第二次访问节点
      result.push(v?.data)
      root = v?.right
    }
  }
  return result
}


//递归
function eachCenter2(root:TreeNode|undefined){
  let res:number[] = []
  let fn = (node:TreeNode|undefined,res:number[])=>{
    if(node){
      fn(node.left,res)
      res.push(node.data)
      fn(node.right,res)
    }
  }
  fn(root,res)
  return res
}