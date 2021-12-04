//класс пользователя
export class User {
  userName: string
  avatarUrl: string
  
  constructor(userName: string, avatarUrl: string) {
    this.userName = userName 
    this.avatarUrl = avatarUrl
  }
}

/** Получить данные пользователя
 * @return {User} данные пользователя
 */
export function getUserData(): User {
  const user: unknown = JSON.parse(window.localStorage.getItem('user'));
  Object.setPrototypeOf(user, User.prototype);
  
  if (user instanceof User) {
    return user;
  } else {
    throw new Error('User in local storage is wrong');
  }
}

/** Получить количество элементов в списке желаемого
 * @return {number} данные пользователя
 */

export function getFavoritesAmount(): number{
  return +window.localStorage.getItem('favoritesAmount');
}

