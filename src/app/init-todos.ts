export class Init {
  load() {
    if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
      console.log('nothig here');

      const todos = [
        {
          text: 'cokolwiek'
        },
        {
          text: 'inne cokolwiek'
        },
        {
          text: 'eat something'
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      return false;
    }
    console.log('found todos');
  }
}
