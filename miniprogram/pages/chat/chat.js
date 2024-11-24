Page({
  data: {
    diaryText: "",  // 当前输入的日记内容
    allDiaries: [], // 所有的日记内容
    filteredDiaries: [] // 搜索后的日记内容
  },

  // 处理输入框内容变化
  onDiaryInput: function(event) {
    this.setData({
      diaryText: event.detail.value
    });
  },

  // 处理保存按钮点击事件
  onSaveDiary: function() {
    const newDiary = {
      date: new Date().toLocaleDateString(),  // 获取当前日期
      content: this.data.diaryText  // 获取当前输入的内容
    };

    // 保存到 allDiaries 数组，且更新过滤后的日记内容
    const updatedAllDiaries = [...this.data.allDiaries, newDiary];

    this.setData({
      allDiaries: updatedAllDiaries,
      filteredDiaries: updatedAllDiaries, // 初始时展示所有日记
      diaryText: ""  // 清空输入框
    });
  },

  // 处理搜索框输入
  onSearchInput: function(event) {
    const searchText = event.detail.value.toLowerCase(); // 获取搜索文本，转为小写

    // 根据输入的内容过滤 allDiaries 中的日记
    const filteredDiaries = this.data.allDiaries.filter(diary =>
      diary.content.toLowerCase().includes(searchText) || // 搜索内容
      diary.date.includes(searchText) // 搜索日期
    );

    // 更新过滤后的日记
    this.setData({
      filteredDiaries: filteredDiaries
    });
  },

  // 搜索按钮点击事件
  onSearch: function() {
    // 触发搜索逻辑，根据输入的值过滤日记
    this.onSearchInput({ detail: { value: this.data.searchText } });
  }
});
