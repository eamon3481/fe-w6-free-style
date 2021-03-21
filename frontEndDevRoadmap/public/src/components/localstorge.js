const saveData = item => {
    const dfs = item => {
      if(!item) return;
      const result = item.toObject();
      result.childs = item.childs.map(v => dfs(v));
      return result;
    };
    const result = dfs(item);
    result.title = titleInput.value;
    localStorage.setItem('memotree', JSON.stringify(result));
  }