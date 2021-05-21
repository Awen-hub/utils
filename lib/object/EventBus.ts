/**
 * @name EventBus
 * @memberof Object
 * @description EventBus对象, 拥有on，off，emit方法
 * @returns {EventBus}
 * @example
 * var eventBus = new EventBus()
 * eventBus.on('log', (num1, num2) => {console.log(num1 + num2)})
 * eventBus.emit('log')
 * eventBus.off('log', num)
 */
class EventBus {
  // eslint-disable-next-line @typescript-eslint/ban-types
  private listenersMap: Map<string, Function> = new Map();

  /**
   * @method
   * @param {string} name 监听的方法名
   * @param {Function} callback 监听的回调函数
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  on(name: string, callback: Function): void {
    this.listenersMap.set(name, callback);
  }

  /**
   * @method
   * @param {string} name 要触发的方法名
   * @returns {boolean}
   */
  emit(name: string, ...payload: any[]): boolean {
    if (this.listenersMap.has(name)) {
      this.listenersMap.get(name)!(...payload);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method
   * @param {string} name 要触发的方法名
   * @returns {boolean}
   */
  off(name: string): boolean {
    return this.listenersMap.delete(name);
  }
}

export { EventBus };
