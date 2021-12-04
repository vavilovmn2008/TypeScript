import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {User, getFavoritesAmount, getUserData} from './user-model.js'

window.addEventListener('DOMContentLoaded', () => {
  const user: User = getUserData();
  renderUserBlock(getFavoritesAmount(), user.userName, user.avatarUrl) //функция для задания 2
  renderSearchFormBlock() //функция для задания 3
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
