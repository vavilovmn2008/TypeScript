import { renderBlock } from './lib.js'


/** ! Функция редерит аватар юзера
 * @param favoriteItemsAmount {number} - количество элементов в списке желаемого
 * @param userAvatar {string} - путь до файла с аватаром пользователя
 * @param userName {string} - имя пользователя
 */
export function renderUserBlock(favoriteItemsAmount: number, userName: string, userAvatar: string) {
  // если в списке ничего нет, то сохраним 'ничего нет', иначе - количество элементов в списке желаемого
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'; 
  
  const hasFavoriteItems = !!favoriteItemsAmount;// проверяем, есть элементы в списке желаемого
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
