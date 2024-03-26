import Api from '@/api/index';

class TableTransactions extends Api {

  /**
   * Вернет список всех студентов
   * @returns {Promise<Response>}
   */
  students = () => this.rest('/transactions/list.json');

  /**
   * Удалит студента по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/transactions/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param transactions объект студента, взятый из FormStudent
   * @returns {Promise<Response>}
   */
  add = ( transactions ) => this.rest('/transactions/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(transactions),
  }).then(() => ({...transactions, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param transactions объект студента, взятый из FormStudent
   * @returns {Promise<*>}
   */
  update = ( transactions ) => this.rest('/transactions/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(transactions),
  }).then(() => transactions) // then - заглушка, пока метод ничего не возвращает

}

export default new TableTransactions();
