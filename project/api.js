import Api from '@/api/index';

class TableBuyer_names extends Api {

  /**
   * Вернет список всех групп
   * @returns {Promise<Response>}
   */
  groups = () => this.rest('/buyer_names/list.json');

  /**
   * Удалит группу по id
   * @param id_buyer
   * @returns {Promise<*>}
   */
  remove = ( id_buyer ) => this.rest('/buyer_names/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id_buyer }),
  }).then(() => id_buyer) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param buyer_name объект группы, взятый из FormGroup
   * @returns {Promise<Response>}
   */
  add = ( buyer_name ) => this.rest('buyer_names/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(buyer_name),
  }).then(() => ({...buyer_name, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param buyer_name объект группы, взятый из FormGroup
   * @returns {Promise<*>}
   */
  update = ( buyer_name ) => this.rest('buyer_names/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(buyer_name),
  }).then(() => buyer_name) // then - заглушка, пока метод ничего не возвращает

}

export default new TableBuyer_names();
