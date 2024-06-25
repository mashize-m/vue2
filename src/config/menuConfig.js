import cssConfig from './cssConfig'
import effectConfig from './effectConfig'
import funcConfig from './funcConfig'
import expandConfig from './expandConfig'
import utilsConfig from './utilsConfig'
import testConfig from './testConfig'
import navigationConfig from './navigationConfig'

export const menuList = [
  {
    index: 'navigation',
    type: 'submenu',
    title: '网址导航',
    children: [...navigationConfig]
  },
  {
    index: 'css',
    type: 'submenu',
    title: 'CSS基础样式',
    children: [...cssConfig]
  },
  {
    index: 'effect',
    type: 'submenu',
    title: 'CSS效果集合',
    children: [...effectConfig]
  },
  {
    index: 'func',
    type: 'submenu',
    title: '功能项（业务）',
    children: [...funcConfig]
  },
  {
    index: 'expand',
    type: 'submenu',
    title: '拓展项（非业务）',
    children: [...expandConfig]
  },
  {
    index: 'utils',
    type: 'submenu',
    title: '工具项（不常用）',
    children: [...utilsConfig]
  },
  {
    index: 'test',
    type: 'submenu',
    title: '测试项',
    children: [...testConfig]
  }
]
