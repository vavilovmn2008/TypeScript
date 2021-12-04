import { renderBlock } from './lib.js';
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date-utils.js';
import {ISearchFormData, searchFormFunc} from './search-helpers'

export type namesType = 'checkin' | 'checkout' | 'price'


/** Функция ренедра формы поиска
 * @param dateArrival {Date} - дата прибытия в отель
 * @param dateDeparture {Date} - дата отбытия в отель
 */
export function renderSearchFormBlock(
  dateArrival?: Date,
  dateDeparture?: Date
): void {
  // изменяем дату прибытия
  dateArrival = dateArrival || shiftDate(new Date(), 1)
  // форматируем дату
  const arrival = formatDate(dateArrival);
  // изменяем дату отбытия
  const departure = formatDate(dateDeparture || shiftDate(dateArrival, 2));
  //форматируем текущую дату
  const now = formatDate(new Date());
  // получаем дату последнего дня в месяце
  const lastDayOfNextMonth = formatDate(getLastDayOfNextMonth(new Date()));

  function submitFormEvent(e:SubmitEvent, arrayValues:namesType[]){
    e.preventDefault()
    if (e.target){
      const formData = new FormData(e.target as HTMLFormElement)
      const formDataEntries: ISearchFormData = {};

      arrayValues.forEach(key => {
        formDataEntries[key] = <namesType>formData.get(key)
      })

      searchFormFunc(formDataEntries)
    }
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrival}" min="${now}" max="${lastDayOfNextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departure}" min="${arrival}" max="${lastDayOfNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

  const form = document.getElementById('form')

  if (form){
    const arrayNames:namesType[] = ['checkin','checkout','price']
    form.addEventListener('submit', ev => submitFormEvent(ev,arrayNames ))
  }
}